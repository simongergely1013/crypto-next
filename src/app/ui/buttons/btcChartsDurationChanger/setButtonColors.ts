export const setButtonColors = (
  text: string,
  duration: string,
  condition: boolean
) => {
  if (condition && duration === text) {
    return "bg-[#6161D680] text-white";
  } else if (!condition && duration === text) {
    return "bg-[#6161D680] text-black";
  } else if (condition) {
    return "text-[#A7A7CC]";
  } else {
    return "text-[#424286]";
  }
};
