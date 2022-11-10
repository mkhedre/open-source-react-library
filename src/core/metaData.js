export const title = (title) => {
  document.title = title;
};

export const description = (desc) => {
  document.getElementById('meta-desc').content = desc;
};
