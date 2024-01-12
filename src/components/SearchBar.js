import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
  };
  return (
    <View style={styles.searchBarContainer}>
      <Feather
        name="search"
        size={16}
        color="white"
        style={styles.searchIcon}
      />
      <TextInput style={styles.input} onChangeText={handleSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#153075",
    paddingVertical: 10,
    paddingLeft: 18,
    borderRadius: 28,
    marginTop: 65,
  },
  searchIcon: {
    marginRight: 8,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
});
