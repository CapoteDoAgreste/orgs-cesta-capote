import React from "react";

//Page Components
import CestaBanner from "./components/CestaBanner.js";
import Details from "./components/Details.js";
import NewText from "../../components/NewText";
import data from "../../mocks/data.js";

export default function Cesta() {
  return (
    <>
      <CestaBanner bannerText={data.banner.text} />
      <Details
        logo={data.details.logo}
        title={data.details.title}
        name={data.details.name}
        description={data.details.description}
        price={data.details.price}
      />
    </>
  );
}
