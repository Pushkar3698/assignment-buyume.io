import { SafeAreaView } from "react-native";
import Products from "./Products";
import Cart from "./Cart";
import { Provider } from "react-redux";
import store from "./Redux/store";

// 1. The Cart should be empty when the component is loaded.

// 2. On Click of ‘+’ button, the product should be added to cart.

// 3. On Click of ‘-’ button, the product should be subtracted from cart.

// 4. If no product is in the cart, display “No Product added to the cart”.

// 5. You can use useState, redux is not compulsory.

// 6. Use separate component for left and right boxes.

const products = [
  { id: 1, name: "Product-1", price: 100 },

  { id: 2, name: "Product-2", price: 200 },

  { id: 3, name: "Product-3", price: 300 },
];
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, padding: 10, backgroundColor: "green" }}>
        <Products products={products} />
        <Cart />
      </SafeAreaView>
    </Provider>
  );
}
