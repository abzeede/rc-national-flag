import React from "react";
import { render } from "react-dom";
import Flag from "../../lib";
import "./styles.css";
import countries from './countries'

function Demo() {
  return (
    <div>
      <h1 className="title">rc-national-flag</h1>
      <div>
        {
          Object.keys(countries).map((code) => (
            <Flag className="flag" width={50} code={code} />
          ))
        }
      </div>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
