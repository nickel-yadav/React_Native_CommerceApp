import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProductData } from "../features/products/productSlice.js";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { defaultProductData } from "../../data/index.js";
import StackNavigator from "../navigators/StackNavigator.js";

export default function AppWrapper() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedProductData = await AsyncStorage.getItem("productData");
        if (storedProductData) {
          const parsedData = JSON.parse(storedProductData);
          dispatch(setProductData(parsedData));
        } else {
          await AsyncStorage.setItem(
            "productData",
            JSON.stringify(defaultProductData.products)
          );
          dispatch(setProductData(defaultProductData.products));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
