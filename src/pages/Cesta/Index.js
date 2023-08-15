import React from "react";

import data from "../../mocks/data.js";

//Page Components
import CestaBanner from "./components/CestaBanner.js";
import Details from "./components/Details.js";
import Items from "./components/Items.js";

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
        buttonText={data.details.buttonText}
      />
      <Items items={data.items} />
    </>
  );
}
