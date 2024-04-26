export const setStyles = (condition: boolean) => {
  return {
    wrapper: "relative w-1/2 px-6 pt-8 rounded-xl",
    bg: condition ? "bg-[#191832]" : "bg-white",
    infoContainer: "absolute left-6 -mt-4 flex flex-col gap-1",
    coinName: "flex text-xl gap-1",
    price: "text-[28px]",
    date: "absolute text-base right-6",
    chart: "w-[584px] absolute bottom-0",
    textPrimary: condition ? "text-[#D1D1D1]" : "text-[#191932]",
    textSecondary: condition ? "text-white" : "text-[#181825]",
  };
};
