export const getDescriptionStyles = (
  activeIndex: number,
  index: number,
  defaultFontSize: string = "20px",
  maximizedFontSize: string = "22px"
) => {
  const isActive = activeIndex === index;
  const fontSize = isActive ? maximizedFontSize : defaultFontSize;
  const fontWeight = isActive ? 500 : 400;

  return { fontSize, fontWeight };
};

export const getLabelStyles = (
  activeIndex: number,
  index: number,
  defaultFontSize: string = "28px",
  maximizedFontSize: string = "32px"
) => {
  const isActive = activeIndex === index;
  const fontSize = isActive ? maximizedFontSize : defaultFontSize;
  const fontWeight = isActive ? 700 : 600;

  return { fontSize, fontWeight };
};
