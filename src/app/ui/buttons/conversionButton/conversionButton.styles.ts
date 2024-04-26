export const setStyles = (condition: boolean) => {
  return {
    wrapper: "absolute w-full flex justify-center top-[35%]",
    circle:
      "w-12 h-12 flex justify-center items-center rounded-[1000px] left-[49%] cursor-pointer transition-all hover:scale-105 ease-in-out",
    bg: condition ? "bg-white" : "bg-[#353570]",
    iconStroke: condition ? "#3D3D7E" : "#FFFFFF",
  };
};
