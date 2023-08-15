import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import NewText from "./NewText";

const style = StyleSheet.create({
  button: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 8,
  },
  button_text: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSiza: 16,
    lineHeight: 16,
    fontWeight: "bold",
  },
});

export default function NewButton({ text }) {
  return (
    <>
      <TouchableOpacity style={style.button}>
        <NewText style={style.button_text}>{text}</NewText>
      </TouchableOpacity>
    </>
  );
}
