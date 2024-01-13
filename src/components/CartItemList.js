import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../features/cart/cartSlice";

export default function CartItemList({ cartItems }) {
  const dispatch = useDispatch();

  const renderItem = ({ item, index }) => (
    <View style={styles.itemsContainer}>
      <View style={styles.itemInfoContainer}>
        <Image
          style={{ width: 30, height: 30, marginRight: 14, borderRadius: 6 }}
          source={item.thumbnail}
        />
        <View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.itemHeadingText}
          >
            {item.title.length > 20
              ? `${item.title.substring(0, 20)}...`
              : item.title}
          </Text>
          <Text style={styles.itemPriceText}>$ {item.price}</Text>
        </View>
      </View>
      <View style={styles.itemQuantContainer}>
        <TouchableOpacity
          style={styles.itemQuantActionBtn}
          onPress={() => dispatch(decreaseQuantity(index))}
        >
          <AntDesign name="minus" size={16} color="black" />
        </TouchableOpacity>
        <Text style={styles.itemQuantText}>{item.itemQuantity}</Text>
        <TouchableOpacity
          style={styles.itemQuantActionBtn}
          onPress={() => dispatch(increaseQuantity(index))}
        >
          <AntDesign name="plus" size={16} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={cartItems}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  itemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBFB",
    marginBottom: 10,
  },
  itemInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemHeadingText: {
    fontSize: 14,
    fontFamily: "manrope-500",
  },
  itemPriceText: {
    fontSize: 14,
    fontFamily: "manrope-400",
  },
  itemQuantContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemQuantActionBtn: {
    padding: 8,
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: "#F8F9FB",
  },
  itemQuantText: {
    fontSize: 14,
    fontFamily: "manrope-500",
    marginHorizontal: 10,
  },
});
