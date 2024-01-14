import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function BottomTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{ flexDirection: "row", padding: 10, backgroundColor: "white" }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            <Feather
              name="home"
              size={16}
              color={isFocused ? "#2A4BA0" : "#8891A5"}
            />
            <Text
              style={{
                color: isFocused ? "#2A4BA0" : "#8891A5",
                fontSize: 12,
                fontFamily: "manrope-500",
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
