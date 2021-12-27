import React, { useEffect, useRef } from "react";
import { mount as marketingMount } from "marketing/MarketingApp";

console.log(marketingMount);

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      marketingMount(ref.current);
    }
  });

  return <div ref={ref}></div>;
};
