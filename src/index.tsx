import * as React from "react";
import { render } from "react-dom";

import { MuiPickersUtilsProvider } from "material-ui-pickers";

import MaterialUIPickers from "./MaterialUIPickers";

import LuxonUtils from "@date-io/luxon";

import "./styles.css";

function App() {
  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <MaterialUIPickers />
    </MuiPickersUtilsProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
