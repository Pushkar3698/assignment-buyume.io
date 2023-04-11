export const TYPE = {
  increment: "INCREMENT",
  decrement: "DECREMENT",
};

export const incrementHandler = (product) => {
  return {
    type: TYPE.increment,
    payload: product,
  };
};

export const decrementtHandler = (product) => {
  return {
    type: TYPE.decrement,
    payload: product,
  };
};
