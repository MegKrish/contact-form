import React from "react";
import ReactDOM from "react-dom";
import { Grid, Cell } from "react-mdl";
import Form from "./Form.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Grid>
        <Cell col={12}>
          <h3>
            Not ready to sign up? <a href="/">Set a reminder -></a>
          </h3>
          <Form />
        </Cell>
      </Grid>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
