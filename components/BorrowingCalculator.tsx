"use client";

import React, { useMemo, useState } from "react";
import { Input } from "./Input";
import { useTranslations } from "next-intl";

type ApplicantType = "single" | "joint";

type IncomeFrequency = "annual" | "monthly" | "fortnightly" | "weekly";

type Results = {
  maxBorrowing: number;
  monthlySurplus: number;
  assessmentRate: number;
};

const normalizeToAnnual = (amount: number, frequency: IncomeFrequency) => {
  if (!Number.isFinite(amount) || amount <= 0) return 0;

  switch (frequency) {
    case "monthly":
      return amount * 12;
    case "fortnightly":
      return amount * 26;
    case "weekly":
      return amount * 52;
    case "annual":
    default:
      return amount;
  }
};

const calculateTax = (annualIncome: number): number => {
  if (!Number.isFinite(annualIncome) || annualIncome <= 0) return 0;

  // Approximate Australian resident income tax rates (2023–24)
  // 0 – 18,200: 0
  // 18,201 – 45,000: 19% over 18,200
  // 45,001 – 120,000: $5,092 + 32.5% over 45,000
  // 120,001 – 180,000: $29,467 + 37% over 120,000
  // 180,001+: $51,667 + 45% over 180,000
  let tax = 0;

  if (annualIncome <= 18200) {
    tax = 0;
  } else if (annualIncome <= 45000) {
    tax = (annualIncome - 18200) * 0.19;
  } else if (annualIncome <= 120000) {
    tax = 5092 + (annualIncome - 45000) * 0.325;
  } else if (annualIncome <= 180000) {
    tax = 29467 + (annualIncome - 120000) * 0.37;
  } else {
    tax = 51667 + (annualIncome - 180000) * 0.45;
  }

  const medicareLevy = annualIncome * 0.02;

  return tax + medicareLevy;
};

const calculateMaxLoan = (
  monthlySurplus: number,
  assessmentRateAnnual: number,
  termYears: number
): number => {
  if (!Number.isFinite(monthlySurplus) || monthlySurplus <= 0) return 0;
  if (!Number.isFinite(termYears) || termYears <= 0) return 0;

  const r = assessmentRateAnnual / 12;
  const n = termYears * 12;

  if (r <= 0) {
    return monthlySurplus * n;
  }

  const pow = Math.pow(1 + r, n);
  const denominator = r * pow;
  if (!Number.isFinite(denominator) || denominator === 0) return 0;

  return monthlySurplus * ((pow - 1) / denominator);
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(Math.max(0, value || 0));

export const BorrowingCalculator = () => {
  const tInputs = useTranslations("resources.borrowingCalculatorInputs");
  const tResults = useTranslations("resources.borrowingCalculatorResults");
  const tHeadings = useTranslations("resources");

  const [applicantType, setApplicantType] = useState<ApplicantType>("single");
  const [incomeFrequency, setIncomeFrequency] =
    useState<IncomeFrequency>("annual");
  const [dependants, setDependants] = useState<string>("0");

  const [applicant1Fixed, setApplicant1Fixed] = useState<string>("100000");
  const [applicant1Other, setApplicant1Other] = useState<string>("0");
  const [applicant2Fixed, setApplicant2Fixed] = useState<string>("60000");
  const [applicant2Other, setApplicant2Other] = useState<string>("0");

  const [monthlyExpenses, setMonthlyExpenses] = useState<string>("2000");
  const [existingRepayments, setExistingRepayments] = useState<string>("0");
  const [interestRate, setInterestRate] = useState<string>("6.0");
  const [loanTermYears, setLoanTermYears] = useState<string>("30");
  const results: Results | null = useMemo(() => {
    const a1Fixed = parseFloat(applicant1Fixed || "0");
    const a1Other = parseFloat(applicant1Other || "0");
    const a1GrossAnnual = normalizeToAnnual(
      a1Fixed + a1Other,
      incomeFrequency
    );

    let a2GrossAnnual = 0;
    if (applicantType === "joint") {
      const a2Fixed = parseFloat(applicant2Fixed || "0");
      const a2Other = parseFloat(applicant2Other || "0");
      a2GrossAnnual = normalizeToAnnual(a2Fixed + a2Other, incomeFrequency);
    }

    const net1Annual =
      a1GrossAnnual > 0 ? a1GrossAnnual - calculateTax(a1GrossAnnual) : 0;
    const net2Annual =
      applicantType === "joint" && a2GrossAnnual > 0
        ? a2GrossAnnual - calculateTax(a2GrossAnnual)
        : 0;

    const totalNetAnnual = net1Annual + net2Annual;
    if (!Number.isFinite(totalNetAnnual) || totalNetAnnual <= 0) {
      return null;
    }

    const totalNetMonthly = totalNetAnnual / 12;

    const expensesMonthly = parseFloat(monthlyExpenses || "0");
    const repaymentsMonthly = parseFloat(existingRepayments || "0");

    if (
      !Number.isFinite(expensesMonthly) ||
      !Number.isFinite(repaymentsMonthly)
    ) {
      return null;
    }

    const surplus = totalNetMonthly - expensesMonthly - repaymentsMonthly;
    const rateValue = parseFloat(interestRate || "0");
    const termYearsValue = parseFloat(loanTermYears || "0");

    if (surplus <= 0 || rateValue <= 0 || termYearsValue <= 0) {
      return null;
    }

    const assessmentRateAnnual = (rateValue + 3) / 100;
    const maxLoan = calculateMaxLoan(
      surplus,
      assessmentRateAnnual,
      termYearsValue
    );

    return {
      maxBorrowing: maxLoan,
      monthlySurplus: surplus,
      assessmentRate: rateValue + 3,
    };
  }, [
    applicantType,
    incomeFrequency,
    applicant1Fixed,
    applicant1Other,
    applicant2Fixed,
    applicant2Other,
    monthlyExpenses,
    existingRepayments,
    interestRate,
    loanTermYears,
  ]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Inputs */}
      <div className="space-y-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#0d3250] mb-2">
            {tHeadings("borrowingCalculatorInputTitle")}
          </h3>
          <p className="text-sm text-[#666666]">
            {tHeadings("borrowingCalculatorInputSubtitle")}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#0d3250] mb-2">
            {tInputs("applicantType.label")}
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setApplicantType("single")}
              className={`py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                applicantType === "single"
                  ? "bg-[#0d3250] text-white border-[#0d3250]"
                  : "bg-white text-[#0d3250] border-[#e0e0e0] hover:border-[#0d3250]"
              }`}
            >
              {tInputs("applicantType.single")}
            </button>
            <button
              type="button"
              onClick={() => setApplicantType("joint")}
              className={`py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                applicantType === "joint"
                  ? "bg-[#0d3250] text-white border-[#0d3250]"
                  : "bg-white text-[#0d3250] border-[#e0e0e0] hover:border-[#0d3250]"
              }`}
            >
              {tInputs("applicantType.joint")}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#0d3250] mb-2">
              {tInputs("incomeFrequency.label")}
            </label>
            <select
              className="block w-full rounded-xl border border-[#e0e0e0] bg-white px-3 py-2 text-sm text-[#0d3250] focus:outline-none focus:ring-2 focus:ring-[#0d3250]"
              value={incomeFrequency}
              onChange={(e) => setIncomeFrequency(e.target.value as IncomeFrequency)}
            >
              <option value="annual">
                {tInputs("incomeFrequency.annual")}
              </option>
              <option value="monthly">
                {tInputs("incomeFrequency.monthly")}
              </option>
              <option value="fortnightly">
                {tInputs("incomeFrequency.fortnightly")}
              </option>
              <option value="weekly">
                {tInputs("incomeFrequency.weekly")}
              </option>
            </select>
          </div>

          <Input
            label={tInputs("dependants.label")}
            placeholder={tInputs("dependants.placeholder")}
            type="number"
            value={dependants}
            onChange={(e) => setDependants(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-[#0d3250]">
            {tInputs("applicant1.title")}
          </h4>
          <Input
            label={tInputs("applicant1Fixed.label")}
            placeholder={tInputs("applicant1Fixed.placeholder")}
            type="number"
            value={applicant1Fixed}
            onChange={(e) => setApplicant1Fixed(e.target.value)}
          />
          <Input
            label={tInputs("applicant1Other.label")}
            placeholder={tInputs("applicant1Other.placeholder")}
            type="number"
            value={applicant1Other}
            onChange={(e) => setApplicant1Other(e.target.value)}
          />
        </div>

        {applicantType === "joint" && (
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#0d3250]">
              {tInputs("applicant2.title")}
            </h4>
            <Input
              label={tInputs("applicant2Fixed.label")}
              placeholder={tInputs("applicant2Fixed.placeholder")}
              type="number"
              value={applicant2Fixed}
              onChange={(e) => setApplicant2Fixed(e.target.value)}
            />
            <Input
              label={tInputs("applicant2Other.label")}
              placeholder={tInputs("applicant2Other.placeholder")}
              type="number"
              value={applicant2Other}
              onChange={(e) => setApplicant2Other(e.target.value)}
            />
          </div>
        )}

        <Input
          label={tInputs("monthlyExpenses.label")}
          placeholder={tInputs("monthlyExpenses.placeholder")}
          type="number"
          value={monthlyExpenses}
          onChange={(e) => setMonthlyExpenses(e.target.value)}
        />

        <Input
          label={tInputs("existingRepayments.label")}
          placeholder={tInputs("existingRepayments.placeholder")}
          type="number"
          value={existingRepayments}
          onChange={(e) => setExistingRepayments(e.target.value)}
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            label={tInputs("interestRate.label")}
            placeholder={tInputs("interestRate.placeholder")}
            type="number"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
          <Input
            label={tInputs("loanTerm.label")}
            placeholder={tInputs("loanTerm.placeholder")}
            type="number"
            value={loanTermYears}
            onChange={(e) => setLoanTermYears(e.target.value)}
          />
        </div>
      </div>

      {/* Results */}
      <div className="bg-[#f9fbff] rounded-[32px] border border-[#e3e7f5] p-8 flex flex-col justify-center">
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#0d3250] mb-2">
            {tHeadings("borrowingCalculatorResultsTitle")}
          </h3>
          <p className="text-sm text-[#666666]">
            {tHeadings("borrowingCalculatorResultsSubtitle")}
          </p>
        </div>

        {results ? (
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-sm text-[#666666] uppercase tracking-wider mb-2 font-medium">
                {tResults("maxBorrowing")}
              </p>
              <p
                className="text-5xl font-black text-[#0d3250]"
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                }}
              >
                {formatCurrency(results.maxBorrowing)}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-[#e3e7f5]">
              <div>
                <p className="text-xs text-[#666666] mb-1">
                  {tResults("monthlySurplus")}
                </p>
                <p className="text-lg font-semibold text-[#0d3250]">
                  {formatCurrency(results.monthlySurplus)}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#666666] mb-1">
                  {tResults("assessmentRate")}
                </p>
                <p className="text-lg font-semibold text-[#0d3250]">
                  {results.assessmentRate.toFixed(2)}%
                </p>
              </div>
            </div>

            <p className="text-xs text-[#666666] mt-4">
              {tResults("disclaimer")}
            </p>
          </div>
        ) : (
          <p className="text-sm text-[#666666]">
            {tResults("noResult")}
          </p>
        )}
      </div>
    </div>
  );
};


