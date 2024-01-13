import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Platform,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { toggleFavourite } from "../features/products/productSlice";

const CARD_WIDTH = Dimensions.get("window").width * 1;
const CARD_HEIGHT = Dimensions.get("window").height * 0.3;
const SPACING_FOR_CARD_INSET = Dimensions.get("window").width * 0.1 - 24;

const ImageCarousel = ({ imageUrlList, isFavourited, index }) => {
  const dispatch = useDispatch();
  const renderCard = ({ item }) => {
    const handleToggleFavourite = () => {
      dispatch(toggleFavourite(index));
    };
    return (
      <View style={styles.cardStyle}>
        <ImageBackground
          source={{ uri: item }}
          resizeMode="contain"
          style={styles.image}
        >
          <View style={styles.favouritBtnContainer}>
            <TouchableOpacity
              style={styles.favouriteBtn}
              onPress={handleToggleFavourite}
            >
              {isFavourited ? (
                <AntDesign name="heart" size={24} color="#FF8181" />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              )}
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={imageUrlList}
        renderItem={renderCard}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        decelerationRate={0}
        snapToInterval={CARD_WIDTH + 10}
        snapToAlignment="center"
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    height: 207,
    justifyContent: "center",
    alignItems: "center",
  },
  cardStyle: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    alignItems: "center",
    backgroundColor: "#F8F9FB",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  favouritBtnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  favouriteBtn: {
    marginRight: 20,
    marginTop: 6,
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
});

export default ImageCarousel;
