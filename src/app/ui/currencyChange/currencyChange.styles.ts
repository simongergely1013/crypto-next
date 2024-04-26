export const setStyles = (condition: boolean) => {
  return {
    main: "relative w-[108px] h-[48px] rounded-xl",
    bgColor: condition
      ? "bg-dark-navTopBg border border-slate-700"
      : "bg-slate-200",
    select: "w-full h-full rounded-xl pl-9 cursor-pointer",
    currencyIcon: "absolute left-2.5 top-3.5",
    textColor: condition ? "text-dark-textPrimary" : "text-light-textSecondary",
  };
};
