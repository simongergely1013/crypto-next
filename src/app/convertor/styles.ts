export const setStyles = (condition: boolean) => {
  return {
    main: "flex min-h-screen flex-col px-20 py-6 border",
    mainBg: condition ? "bg-dark-primaryBg" : "bg-slate-200",
    linksContainer: "flex mb-10",
    headerContainer: "flex flex-col gap-2 mb-10",
    header: "text-xl font-medium",
    date: "text-base flex gap-2",
    convertorWrapper: "relative flex gap-8 mb-20",
    convertorContainer: "w-1/2 p-6 rounded-xl",
    convertorHeader: "text-sm mb-6",
    inputsContainer: "relative flex justify-between py-2 my-3 border-b",
    select: "w-1/4 py-2 pr-2 pl-10 font-medium",
    input: "w-1/3 pl-2 font-bold",
    inputIndexL: "pl-4 text-sm",
    inputIndexR: "pl-1 text-sm",
    button:
      "w-[244px] h-[45px] flex justify-center items-center bg-[#232337] bg-opacity-50 transition-bg ease-in-out rounded",
    buttonColors: condition
      ? "bg-[#232337] text-dark-textPrimary"
      : "bg-[#FFFF] text-light-textSecondary",
    active: "bg-[#6161de] border border-opacity-60 border-[#7878FF] text-white",
    primaryText: condition ? "text-white" : "text-[#424286]",
    secondaryText: condition ? "text-[#9E9E9E]" : "text-[#424286CC]",
    bgColor: condition ? "bg-[#191932]" : "bg-white",
    currencyIcon: "absolute left-2.5 top-4",
    chartWrapper: "border",
  };
};
