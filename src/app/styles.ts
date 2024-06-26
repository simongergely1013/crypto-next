export const setStyles = (condition: boolean) => {
  return {
    main: "flex min-h-screen flex-col px-20 py-6",
    mainBg: condition ? "bg-dark-primaryBg" : "bg-slate-200",
    button:
      "w-[244px] h-[45px] flex justify-center items-center bg-opacity-50 transition-bg ease-in-out rounded-md",
    buttonColors: condition
      ? "bg-[#232337] text-dark-textPrimary"
      : "bg-[#FFFF] text-light-textSecondary",
    active: "bg-[#6161de] border border-opacity-60 border-[#7878FF]",
    inactiveDark: "bg-[#232337]",
    inactiveLight: "bg-[#FFFF] text-[#181825]",
    linkContainer: "flex mb-20",
    coinsSlider: "relative flex items-center gap-2 mb-10",
    chartsContainer: "min-h-[404px] flex gap-6",
  };
};
