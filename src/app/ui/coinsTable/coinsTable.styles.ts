export const setStyles = (condition: boolean) => {
  return {
    bg: condition ? "#191925" : "",
    tableContainer: {
      borderRadius: "12px",
      maxHeight: 680,
    },
    table: { minWidth: 650, background: condition ? "#191925" : "" },
    tableHead: {
      background: condition ? "#131219" : "#E2E8F0",
      color: condition ? "#D1D1D1" : "#424286",
      border: "none",
      fontFamily: "inherit",
    },
    volVsMktCp: {
      width: "210px",
      background: condition ? "#131219" : "#E2E8F0",
      color: condition ? "#D1D1D1" : "#424286",
      border: "none",
      fontFamily: "inherit",
    },
    tableCell: {
      border: "none",
    },
    index: {
      color: condition ? "#D1D1D1" : "#424286",
      border: "none",
      fontFamily: "inherit",
    },
    nameAndPrice: {
      color: condition ? "white" : "#232336",
      border: "none",
      fontFamily: "inherit",
    },
    nameAndPriceDiv: "flex items-center",
    namePriceSpan: "font-medium text-base leading-6",
    percentageChange: {
      color: condition ? "white" : "#232336",
      border: "none",
      div: "flex items-center justify-end gap-1",
      fontFamily: "inherit",
    },
    progressBarCell: {
      border: "none",
      fontFamily: "inherit",
    },
    progressBar: "h-full absolute rounded",
    borderBottom: `6px solid ${condition ? "#131219" : "#E2E8F0"}`,
  };
};

export const setTextColor = (condition: boolean) => {
  return condition ? "text-green" : "text-red";
};
