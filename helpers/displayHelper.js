export const scrollStepToTop = () => {
  window.scrollTo(0, 0);
  document.getElementById("logo").scrollIntoView();
};

export const scrollTo = (top) => {
  window.scrollTo({ top: top });
  document.getElementById("root").scrollIntoView();
};
