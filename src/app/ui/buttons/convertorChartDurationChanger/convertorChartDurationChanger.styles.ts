export const setStyles = (condition: boolean) => {
  return {
    container: "w-[392px] flex my-12 p-1 rounded-md",
    bg: condition ? "bg-[#232336]" : "bg-[#CCCCFA66]",
    button:
      "w-[56px] h-[34px] text-sm rounded-md transition-bg ease-in-out duration-300",
  };
};
