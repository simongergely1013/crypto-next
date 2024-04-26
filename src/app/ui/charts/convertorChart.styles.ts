export const setStyles = (condition: boolean) => {
  return {
    wrapper: "p-6 rounded-xl",
    bg: condition ? "bg-[#191832]" : "bg-white",
    title: "flex gap-3 text-2xl",
    span: condition ? "text-white" : "text-[##353570]",
    to: condition ? "text-[#D1D1D1CC]" : "text-[#35357099]",
    chartContainer: "w-full",
  };
};
