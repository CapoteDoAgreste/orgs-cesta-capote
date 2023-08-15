import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import NewText from "../../../components/NewText";
import banner from "../../../../assets/topo.png";

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
});

export default function CestaBanner({ bannerText }) {
  return (
    <>
      <Image source={banner} style={style.banner} />
      <NewText style={style.banner_title}>{bannerText}</NewText>
    </>
  );
}
