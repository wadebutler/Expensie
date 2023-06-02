import React from "react";
import "./Breakdown.scss";

const BreakDown = ({ info }) => {
  return (
    <div className="breakdown-container">
      <h2>BreakDown </h2>
      {Object.entries(info?.expenses).map((item) => {
        if (item[1].length > 0) {
          return (
            <div className="breakdown-list-container">
              <h3>{item[0]}</h3>

              <ul>
                {item[1].map((value) => {
                  return <li>${value}</li>;
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
