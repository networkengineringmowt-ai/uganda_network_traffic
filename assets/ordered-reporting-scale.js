globalThis.__NETWORK_TRAFFIC_REPORTING_SCALE__ = Object.freeze({
  colors: Object.freeze({
    veryLow: "#00c853",
    low: "#0095ff",
    moderate: "#f4ea00",
    high: "#ff8a00",
    veryHigh: "#ed001c",
  }),
  aadtBands: Object.freeze([
    Object.freeze({
      label: "AADT < 2,000   Very Low",
      shortLabel: "<2k",
      maximum: 2000,
      colorKey: "veryLow",
    }),
    Object.freeze({
      label: "AADT 2k-5k   Low",
      shortLabel: "2k-5k",
      maximum: 5000,
      colorKey: "low",
    }),
    Object.freeze({
      label: "AADT 5k-8k   Moderate",
      shortLabel: "5k-8k",
      maximum: 8000,
      colorKey: "moderate",
    }),
    Object.freeze({
      label: "AADT 8k-15k   High",
      shortLabel: "8k-15k",
      maximum: 15000,
      colorKey: "high",
    }),
    Object.freeze({
      label: "AADT > 15k   Very High",
      shortLabel: ">15k",
      maximum: null,
      colorKey: "veryHigh",
    }),
  ]),
  mefBands: Object.freeze([
    Object.freeze({
      label: "< 0.85 low traffic",
      maximum: 0.85,
      colorKey: "veryLow",
    }),
    Object.freeze({ label: "0.85-0.95", maximum: 0.95, colorKey: "low" }),
    Object.freeze({
      label: "0.95-1.05 baseline",
      maximum: 1.05,
      colorKey: "moderate",
    }),
    Object.freeze({ label: "1.05-1.15", maximum: 1.15, colorKey: "high" }),
    Object.freeze({
      label: "> 1.15 peak",
      maximum: null,
      colorKey: "veryHigh",
    }),
  ]),
});
