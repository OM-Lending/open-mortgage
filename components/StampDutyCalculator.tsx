"use client";

import React, { useState, useEffect } from "react";
import { Input } from "./Input";
import { useTranslations } from "next-intl";

type State = "NSW" | "VIC" | "QLD" | "WA" | "SA" | "TAS" | "ACT" | "NT";
type PropertyType = "liveIn" | "investment";

const STATES: State[] = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];

export const StampDutyCalculator = () => {
  const t = useTranslations("resources.stampDutyCalculatorInputs");
  const tResults = useTranslations("resources.stampDutyCalculatorResults");
  const tHeadings = useTranslations("resources");
  const tCommon = useTranslations("common");

  const [state, setState] = useState<State>("NSW");
  const [propertyValue, setPropertyValue] = useState<string>("850000");
  const [propertyType, setPropertyType] = useState<PropertyType>("liveIn");
  const [isFirstHomeBuyer, setIsFirstHomeBuyer] = useState<boolean>(false);
  const [isForeignBuyer, setIsForeignBuyer] = useState<boolean>(false);

  const [result, setResult] = useState<number | null>(null);

  // Simplified calculation logic for major states (estimates only)
  const calculateStampDuty = () => {
    const value = parseFloat(propertyValue);
    if (isNaN(value)) {
      setResult(null);
      return;
    }

    let duty = 0;

    // Basic rate estimates (2024/25 approximations for example purposes)
    // Real implementation would need precise bracket tables for each state
    switch (state) {
      case "NSW":
        if (value <= 16000) duty = 0; // Simplified
        else if (value <= 35000) duty = (value - 16000) * 0.0175; // Simplified
        else if (value > 35000 && value <= 1089000) duty = 10000 + (value - 350000) * 0.045; // Very rough approx
        else duty = value * 0.055; // Rough top bracket
        break;
      case "VIC":
        if (value <= 25000) duty = value * 0.014;
        else if (value > 25000 && value <= 960000) duty = 5000 + (value - 130000) * 0.06; // Rough avg
        else duty = value * 0.065; // Rough top
        break;
      case "QLD":
        if (value <= 5000) duty = 0;
        else if (value <= 1050000) duty = 3000 + (value - 75000) * 0.035; // Rough
        else duty = value * 0.0575;
        break;
      default:
        // Generic fallback for other states (approx 4-5%)
        duty = value * 0.045;
    }

    // First Home Buyer Concessions (Simplified logic)
    if (isFirstHomeBuyer) {
        if (state === "NSW" && value <= 800000) duty = 0;
        else if (state === "NSW" && value < 1000000) duty = duty * 0.5; // Partial
        else if (state === "VIC" && value <= 600000) duty = 0;
        else if (state === "VIC" && value < 750000) duty = duty * 0.6; // Partial
        else if (state === "QLD" && value <= 500000) duty = 0;
    }

    // Foreign Buyer Surcharge (approx 7-8% usually)
    if (isForeignBuyer) {
      duty += value * 0.08; 
    }

    // Ensure no negative duty
    setResult(Math.max(0, duty));
  };

  useEffect(() => {
    calculateStampDuty();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, propertyValue, propertyType, isFirstHomeBuyer, isForeignBuyer]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Inputs */}
      <div className="space-y-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#0d3250] mb-2">
            {tHeadings("stampDutyCalculatorInputTitle")}
          </h3>
          <p className="text-sm text-[#666666]">
            {tHeadings("stampDutyCalculatorInputSubtitle")}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#0d3250] mb-2">
            {t("state.label")}
          </label>
          <div className="grid grid-cols-4 gap-2">
            {STATES.map((s) => (
              <button
                key={s}
                onClick={() => setState(s)}
                className={`py-2 px-1 rounded border text-sm font-medium transition-all ${
                  state === s
                    ? "bg-[#0d3250] text-white border-[#0d3250]"
                    : "bg-white text-[#0d3250] border-[#e0e0e0] hover:border-[#0d3250]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <Input
          label={t("propertyValue.label")}
          placeholder={t("propertyValue.placeholder")}
          type="number"
          value={propertyValue}
          onChange={(e) => setPropertyValue(e.target.value)}
        />

        <div>
          <label className="block text-sm font-medium text-[#0d3250] mb-2">
            {t("propertyType.label")}
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setPropertyType("liveIn")}
              className={`py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                propertyType === "liveIn"
                  ? "bg-[#0d3250] text-white border-[#0d3250]"
                  : "bg-white text-[#0d3250] border-[#e0e0e0] hover:border-[#0d3250]"
              }`}
            >
              {t("propertyType.liveIn")}
            </button>
            <button
              type="button"
              onClick={() => setPropertyType("investment")}
              className={`py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                propertyType === "investment"
                  ? "bg-[#0d3250] text-white border-[#0d3250]"
                  : "bg-white text-[#0d3250] border-[#e0e0e0] hover:border-[#0d3250]"
              }`}
            >
              {t("propertyType.investment")}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
            {/* First Home Buyer Toggle */}
            <div>
                <label className="block text-sm font-medium text-[#0d3250] mb-2">
                    {t("firstHomeBuyer.label")}
                </label>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsFirstHomeBuyer(!isFirstHomeBuyer)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            isFirstHomeBuyer ? "bg-[#0d3250]" : "bg-gray-200"
                        }`}
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                isFirstHomeBuyer ? "translate-x-6" : "translate-x-1"
                            }`}
                        />
                    </button>
                    <span className="text-sm text-[#666666]">
                      {isFirstHomeBuyer ? tCommon("yes") : tCommon("no")}
                    </span>
                </div>
            </div>

            {/* Foreign Buyer Toggle */}
            <div>
                <label className="block text-sm font-medium text-[#0d3250] mb-2">
                    {t("foreignBuyer.label")}
                </label>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsForeignBuyer(!isForeignBuyer)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            isForeignBuyer ? "bg-[#0d3250]" : "bg-gray-200"
                        }`}
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                isForeignBuyer ? "translate-x-6" : "translate-x-1"
                            }`}
                        />
                    </button>
                    <span className="text-sm text-[#666666]">
                      {isForeignBuyer ? tCommon("yes") : tCommon("no")}
                    </span>
                </div>
            </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-[#f9fbff] rounded-[32px] border border-[#e3e7f5] p-8 flex flex-col justify-center">
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[#0d3250] mb-2">
            {tHeadings("stampDutyCalculatorResultsTitle")}
          </h3>
          <p className="text-sm text-[#666666]">
            {tHeadings("stampDutyCalculatorResultsSubtitle")}
          </p>
        </div>

        {result !== null && (
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-sm text-[#666666] uppercase tracking-wider mb-2 font-medium">
                {tResults("estimatedDuty")}
              </p>
              <p className="text-5xl font-black text-[#0d3250]" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                {formatCurrency(result)}
              </p>
            </div>

            <div className="pt-8 border-t border-[#e3e7f5]">
              <p className="text-xs text-[#666666] italic leading-relaxed text-center">
                {tResults("disclaimer", { state })}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

