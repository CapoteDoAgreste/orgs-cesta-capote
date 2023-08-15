import React from "react";
import NewText from "../../../components/NewText";
import { Image, StyleSheet, View } from "react-native";

const style = StyleSheet.create({
  item: {
    paddingVertical: 16,
    marginHorizontal: 16,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    alignItems: "center",
  },
  item_image: {
    width: 46,
    height: 46,
  },
  item_name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
});

export default function Item({ item: { name, image } }) {
  return (
    <View style={style.item}>
      <Image source={image} style={style.item_image} />
      <NewText style={style.item_name}>{name}</NewText>
    </View>
  );
}
