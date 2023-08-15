import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import Cesta from "./src/pages/Cesta/Cesta";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [loadedFont] = useFonts({
    Montserrat_400Regular: require("./assets/fonts/Montserrat-Regular.ttf"),
    Montserrat_700Bold: require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!loadedFont) {
    return (
      <>
        <AppLoading />
      </>
    );
  } else {
    return (
      <SafeAreaView>
        <StatusBar />
        <Cesta />
      </SafeAreaView>
    );
  }
}
