import React from "react";
import { mount as marketingMount } from "marketing/MarketingApp";
import MarketingApp from "./components/MarketingApp";

console.log(marketingMount);

export default () => {
  return (
    <div>
      <h1>Container</h1>
      <MarketingApp />
    </div>
  );
};
