import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// mount function to startup app

function mount(el) {
  return ReactDOM.render(<App />, el);
}

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_container-dev-root");
  el && mount(el);
}

export { mount };
