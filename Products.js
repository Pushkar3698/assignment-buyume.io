import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementtHandler, incrementHandler } from "./Redux/actions";

const Product = ({ id, name, price }) => {
  const cart = useSelector((state) => state.cart);
  const findIndex = cart.findIndex((el, i) => el.id === id);
  const dispacth = useDispatch();

  const increment = () => {
    dispacth(incrementHandler({ id, name, price }));
  };
  const decrement = () => {
    if (cart.length === 0) return;
    dispacth(decrementtHandler({ id, name, price }));
  };

  return (
    <View
      style={{
        backgroundColor: "grey",
        marginVertical: 10,
        flexDirection: "row",
        padding: 10,
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={styles.text}>{name}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={styles.text}>{price}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "blue",
          width: 100,
          borderRadius: 20,
          justifyContent: "space-between",
          paddingHorizontal: 5,
          borderColor: "black",
          borderWidth: 3,
        }}
      >
        <TouchableOpacity>
          <Text style={styles.button} onPress={decrement}>
            -
          </Text>
        </TouchableOpacity>
        <Text style={styles.button}>
          {findIndex !== -1 ? cart[findIndex].qty : 0}
        </Text>
        <TouchableOpacity>
          <Text style={styles.button} onPress={increment}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Products = ({ products }) => {
  return (
    <SafeAreaView style={{ flex: 0.5 }}>
      <View>
        <Text style={{ textAlign: "center", fontSize: 30 }}>Products</Text>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Product id={item.id} name={item.name} price={item.price} />
        )}
      />
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
  },
  button: {
    fontSize: 25,
    color: "white",
  },
});
