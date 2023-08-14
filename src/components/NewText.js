import React from "react";
import { Text, StyleSheet } from "react-native";

const nStyle = StyleSheet.create({
  text_regular: {
    fontFamily: "Montserrat_400Regular",
  },
  text_bold: {
    fontFamily: "Montserrat_700Bold",
    color: "blue",
  },
});

export default function NewText({ children, style }) {
  let _style = nStyle.text_regular;
  if (style.fontWeight === "bold") {
    _style = nStyle.text_bold;
  }
  return <Text style={[_style, style]}>{children}</Text>;
}
