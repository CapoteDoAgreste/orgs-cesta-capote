import React from "react";
import { StyleSheet, View, Image } from "react-native";

//General Components
import NewText from "../../../components/NewText";
import NewButton from "../../../components/newButton";

const style = StyleSheet.create({
  cesta_view: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  farm_view: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  title: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});

export default function Details({
  title,
  name,
  description,
  price,
  logo,
  buttonText,
}) {
  return (
    <>
      <View style={style.cesta_view}>
        <NewText style={style.title}>{title}</NewText>
        <View style={style.farm_view}>
          <Image source={logo} style={style.logo} />
          <NewText style={style.subtitle}>{name}</NewText>
        </View>
        <NewText style={style.description}>{description}</NewText>
        <NewText style={style.price}>{price}</NewText>
        <NewButton text={buttonText} />
      </View>
    </>
  );
}
