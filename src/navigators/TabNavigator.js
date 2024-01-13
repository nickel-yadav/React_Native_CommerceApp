import React from "react";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTabBar from "../components/BottomTabBar";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
