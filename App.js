import { useState } from "react";
import { StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import useFonts from "./src/hooks/useFonts";
import { Provider } from "react-redux";
import { store } from "./src/store/store.js";
import AppWrapper from "./src/components/AppWrapper.js";

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
