export const setStyles = (condition: boolean) => {
  return {
    main: "flex min-h-screen flex-col px-20 py-6 border",
    mainBg: condition ? "bg-dark-primaryBg" : "bg-slate-200",
    button:
      "w-[244px] h-[45px] flex justify-center items-center bg-[#232337] bg-opacity-50 transition-bg ease-in-out rounded",
    buttonColors: condition
      ? "bg-[#232337] text-dark-textPrimary"
      : "bg-[#FFFF] text-light-textSecondary",
    active: "bg-[#6161de] border border-opacity-60 border-[#7878FF] text-white",
    primaryText: condition ? "text-white" : "text-[#424286]",
    secondaryText: condition ? "text-[#9E9E9E]" : "text-[#424286CC]",
  };
};
