import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const ProductCard = ({ name, qty, price }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View>
        <Text style={styles.text}>
          {" "}
          {qty} x {price}
        </Text>
      </View>
    </View>
  );
};

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <View
      style={{
        flex: 0.5,
        borderColor: "grey",
        borderWidth: 5,
        padding: 5,
        justifyContent: "space-between",
      }}
    >
      <View>
        {cart.length === 0 ? (
          <Text>No items in cart!</Text>
        ) : (
          cart.map((el, i) => (
            <ProductCard key={i} name={el.name} price={el.price} qty={el.qty} />
          ))
        )}
      </View>

      <View style={styles.card}>
        <View>
          <Text style={styles.text}>Total :</Text>
        </View>
        <View>
          <Text style={styles.text}>
            {cart.length === 0
              ? 0
              : cart
                  .map((el) => +el.price * el.qty)
                  .reduce((acc, curr) => acc + curr, 0)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  text: { fontSize: 25, color: "white" },
  card: {
    backgroundColor: "grey",
    marginVertical: 10,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
