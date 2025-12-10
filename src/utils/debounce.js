export const debounce = (func, delay) => {
  let timeoutId;
  return (e) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(e);
    }, delay);
  };
};
