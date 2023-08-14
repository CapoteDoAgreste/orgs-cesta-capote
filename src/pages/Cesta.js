import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";
import { useFonts } from "expo-font";

import NewText from "../components/NewText";

import banner from "../../assets/topo.png";
import logo from "../../assets/logo.png";

const width = Dimensions.get("screen").width;

const style = StyleSheet.create({
  banner: {
    width: width,
    height: (576 / 769) * width,
  },
  banner_title: {
    position: "absolute",
    textAlign: "center",
    width: width,
    color: "#FFFFFF",
    padding: 16,
    lineHeight: 26,
    fontSize: 16,
    fontWeight: "bold",
  },
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

export default function Cesta() {
  const [loadedFont] = useFonts({
    Montserrat_400Regular: require("../../assets/fonts/Montserrat-Regular.ttf"),
    Montserrat_700Bold: require("../../assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!loadedFont) {
    return (
      <>
        <NewText>Font Not Found</NewText>
      </>
    );
  } else {
    return (
      <View style={style.global}>
        <Image source={banner} style={style.banner} />
        <NewText style={style.banner_title}>Detalhes da Cesta</NewText>

        <View style={style.cesta_view}>
          <NewText style={style.title}>Cesta de Verduras</NewText>
          <View style={style.farm_view}>
            <Image source={logo} style={style.logo} />
            <NewText style={style.subtitle}>Jenny Jack Farm</NewText>
          </View>
          <NewText style={style.description}>
            Uma cesta com produtos selecionados cuidadosamente da fazenda direto
            para sua cozinha.
          </NewText>
          <NewText style={style.price}>R$: 40,00</NewText>
        </View>
      </View>
    );
  }
}
