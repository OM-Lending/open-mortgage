"use client";

import React, { useState, useEffect } from "react";
import { Input } from "./Input";
import { useTranslations } from "next-intl";

export const RepaymentCalculator = () => {
  const t = useTranslations("resources.repaymentCalculatorInputs");
  const tResults = useTranslations("resources.repaymentCalculatorResults");
  const tHeadings = useTranslations("resources");

  const [loanAmount, setLoanAmount] = useState<string>("500000");
  const [interestRate, setInterestRate] = useState<string>("5.89");
  const [loanTerm, setLoanTerm] = useState<string>("30");
  const [repaymentType, setRepaymentType] = useState<
    "principalAndInterest" | "interestOnly"
  >("principalAndInterest");
  const [repaymentFrequency, setRepaymentFrequency] = useState<
    "monthly" | "fortnightly" | "weekly"
  >("monthly");

  const [results, setResults] = useState<{
    monthly: number;
    totalRepayment: number;
    totalInterest: number;
  } | null>(null);

  const calculateRepayment = () => {
    const amount = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100;
    const years = parseFloat(loanTerm);

    if (isNaN(amount) || isNaN(rate) || isNaN(years)) {
      return;
    }

    let monthlyPayment = 0;
    let totalPayment = 0;
    let totalInterest = 0;

    if (repaymentType === "principalAndInterest") {
      const monthlyRate = rate / 12;
      const numberOfPayments = years * 12;
      
      // Formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
      monthlyPayment =
        amount *
        ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1));
          
      totalPayment = monthlyPayment * numberOfPayments;
      totalInterest = totalPayment - amount;
    } else {
      // Interest only
      const monthlyRate = rate / 12;
      monthlyPayment = amount * monthlyRate;
      
      // Total payment for interest only term (assuming full term for simplicity here, 
      // though usually IO is limited to 5 years. This is a basic calculator.)
      // For a better UX, we might want to ask for IO period vs P&I period.
      // For now, we'll calculate interest for the full term + principal at end
      totalInterest = monthlyPayment * years * 12;
      totalPayment = totalInterest + amount; 
    }

    setResults({
      monthly: monthlyPayment,
      totalRepayment: totalPayment,
      totalInterest: totalInterest,
    });
  };

  useEffect(() => {
    calculateRepayment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loanAmount, interestRate, loanTerm, repaymentType]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getFrequencyPayment = () => {
    if (!results) return 0;
    
    // Correct way to convert monthly to fortnightly/weekly for mortgages usually involves
    // taking the annual repayment and dividing by 26 or 52.
    // However, banks vary. Some take monthly * 12 / 26.
    const annual = results.monthly * 12;
    
    if (repaymentFrequency === "monthly") return results.monthly;
    if (repaymentFrequency === "fortnightly") return annual / 26;
    if (repaymentFrequency === "weekly") return annual / 52;
    
    return results.monthly;
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Inputs */}
      <div className="space-y-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#0d3250] mb-2">
            {tHeadings("repaymentCalculatorInputTitle")}
          </h3>
          <p className="text-sm text-[#666666]">
            {tHeadings("repaymentCalculatorInputSubtitle")}
          </p>
        </div>

        <Input
          label={t("loanAmount.label")}
          placeholder={t("loanAmount.placeholder")}
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            label={t("interestRate.label")}
            placeholder={t("interestRate.placeholder")}
            type="number"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
          <Input
            label={t("loanTerm.label")}
            placeholder={t("loanTerm.placeholder")}
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#0d3250] mb-2">
            {t("repaymentType.label")}
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setRepaymentType("principalAndInterest")}
              className={`py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                repaymentType === "principalAndInterest"
                  ? "bg-[#0d3250] text-white border-[#0d3250]"
                  : "bg-white text-[#0d3250] border-[#e0e0e0] hover:border-[#0d3250]"
              }`}
            >
              {t("repaymentType.principalAndInterest")}
            </button>
            <button
              type="button"
              onClick={() => setRepaymentType("interestOnly")}
              className={`py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                repaymentType === "interestOnly"
                  ? "bg-[#0d3250] text-white border-[#0d3250]"
                  : "bg-white text-[#0d3250] border-[#e0e0e0] hover:border-[#0d3250]"
              }`}
            >
              {t("repaymentType.interestOnly")}
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-[#f9fbff] rounded-[32px] border border-[#e3e7f5] p-8 flex flex-col justify-center">
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#0d3250] mb-2">
            {tHeadings("repaymentCalculatorResultsTitle")}
          </h3>
          <p className="text-sm text-[#666666]">
            {tHeadings("repaymentCalculatorResultsSubtitle")}
          </p>
        </div>

        {results && (
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-sm text-[#666666] uppercase tracking-wider mb-2 font-medium">
                {repaymentFrequency === "monthly"
                  ? tResults("monthlyRepayment")
                  : repaymentFrequency === "fortnightly"
                  ? tResults("fortnightlyRepayment")
                  : tResults("weeklyRepayment")}
              </p>
              <p className="text-5xl font-black text-[#0d3250]" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                {formatCurrency(getFrequencyPayment())}
              </p>
            </div>

            <div className="flex justify-center gap-2 mb-6">
               {(["monthly", "fortnightly", "weekly"] as const).map((freq) => (
                 <button
                   key={freq}
                   onClick={() => setRepaymentFrequency(freq)}
                   className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                     repaymentFrequency === freq
                       ? "bg-[#0d3250] text-white"
                       : "bg-white text-[#666666] border border-[#e0e0e0] hover:bg-gray-50"
                   }`}
                 >
                   {t("repaymentFrequency." + freq)}
                 </button>
               ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-[#e3e7f5]">
              <div>
                <p className="text-xs text-[#666666] mb-1">{tResults("totalRepayment")}</p>
                <p className="text-lg font-semibold text-[#0d3250]">
                  {formatCurrency(results.totalRepayment)}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#666666] mb-1">{tResults("totalInterest")}</p>
                <p className="text-lg font-semibold text-[#0d3250]">
                  {formatCurrency(results.totalInterest)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

