import React from "react";
import { StatusBar, StyleSheet, SafeAreaView, Text } from "react-native";
import Cesta from "./src/pages/Cesta";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
