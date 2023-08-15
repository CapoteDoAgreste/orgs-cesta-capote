import React from "react";
import { StatusBar, SafeAreaView, Image, View } from "react-native";
import Cesta from "./src/pages/Cesta/Index";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import data from "./src/mocks/data.js";

export default function App() {
  const [loadedFont] = useFonts({
    Montserrat_400Regular: require("./assets/fonts/Montserrat-Regular.ttf"),
    Montserrat_700Bold: require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!loadedFont) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <Cesta data={data} />
      </SafeAreaView>
    );
  }
}
