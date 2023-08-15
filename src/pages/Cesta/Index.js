import React from "react";
import { ScrollView, FlatList } from "react-native";

//Page Components
import CestaBanner from "./components/CestaBanner.js";
import Details from "./components/Details.js";
import Item from "./components/Item.js";
import NewText from "../../components/NewText.js";

export default function Cesta({ data: { banner, details, items } }) {
  return (
    <>
      <FlatList
        data={items.list}
        renderItem={Item}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={
          <>
            <CestaBanner bannerText={banner.text} />
            <Details
              logo={details.logo}
              title={details.title}
              name={details.name}
              description={details.description}
              price={details.price}
              buttonText={details.buttonText}
            />
            <NewText
              style={{
                color: "#464646",
                fontWeight: "bold",
                marginTop: 32,
                marginBottom: 8,
                fontSize: 20,
                lineHeight: 32,
                paddingHorizontal: 16,
              }}
            >
              {items.title}
            </NewText>
          </>
        }
      />
    </>
  );
}
