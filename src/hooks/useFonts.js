import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    "manrope-200": require("../../assets/fonts/manrope/static/Manrope-ExtraLight.ttf"),
    "manrope-300": require("../../assets/fonts/manrope/static/Manrope-Light.ttf"),
    "manrope-400": require("../../assets/fonts/manrope/static/Manrope-Regular.ttf"),
    "manrope-500": require("../../assets/fonts/manrope/static/Manrope-Medium.ttf"),
    "manrope-600": require("../../assets/fonts/manrope/static/Manrope-SemiBold.ttf"),
    "manrope-700": require("../../assets/fonts/manrope/static/Manrope-Bold.ttf"),
    "manrope-800": require("../../assets/fonts/manrope/static/Manrope-ExtraBold.ttf"),
  });
