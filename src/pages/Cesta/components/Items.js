import React from "react";
import NewText from "../../../components/NewText";
import { Image } from "react-native";

export default function Items(props) {
  const { title, list } = props.items;
  return (
    <>
      <NewText>{title}</NewText>
      {list.map(({ name, image }) => {
        return (
          <>
            <NewText>{name}</NewText>
            <Image source={image} />
          </>
        );
      })}
    </>
  );
}
