import * as React from "react";
import { render } from "react-dom";
import * as TT from "./timetable";
import * as ExampleData from "./example/apiData";
import * as Api from "./interface/data";

import "./styles.css";

function App() {
  let exData: Api.IData = ExampleData.GetSampleData();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TT.TimeTable d={exData} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
