export const setStyles = (condition: boolean) => {
  return {
    primaryText: condition ? "text-white" : "text-[#424286]",
    secondaryText: condition ? "text-[#9E9E9E]" : "text-[#424286CC]",
    inputIndexL: "pl-4 text-sm",
    inputIndexR: "pl-1 text-sm",
  };
};
