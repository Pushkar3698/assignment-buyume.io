import { TYPE } from "./actions";

let INITIAL_STATE = {
  cart: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === TYPE.increment) {
    let product = action.payload;

    let newCart = [...state.cart];

    const index = newCart.findIndex((el, i) => el.id === product.id);

    if (index !== -1) {
      let founded = newCart[index];
      founded.qty++;
    } else {
      newCart = [...newCart, { ...product, qty: 1 }];
    }

    return {
      ...state,
      cart: newCart,
    };
  }
  if (action.type === TYPE.decrement) {
    const product = action.payload;

    let newCart = [...state.cart];
    const index = newCart.findIndex((el, i) => el.id === product.id);

    if (newCart[index].qty === 0) {
      let secondcart = newCart.filter((el, i) => el.id !== product.id);

      return {
        ...state,
        cart: secondcart,
      };
    }

    if (index !== -1) {
      let founded = newCart[index];

      founded.qty--;
    } else {
      return;
    }
    return {
      ...state,
      cart: newCart,
    };
  }

  return state;
};

export default reducer;
