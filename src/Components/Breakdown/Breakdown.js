import React from "react";
import "./Breakdown.scss";

const BreakDown = ({ info }) => {
  return (
    <div className="breakdown-container">
      <h2>BreakDown </h2>
      {Object.entries(info?.expenses).map((item, index) => {
        if (item[1].length > 0) {
          return (
            <div key={index} className="breakdown-list-container">
              <h3>{item[0]}</h3>

              <ul>
                {item[1].map((value, index) => {
                  return <li key={index}>${value}</li>;
                })}
              </ul>
            </div>
          );
        }
      })}
    </div>
  );
};

export default BreakDown;
