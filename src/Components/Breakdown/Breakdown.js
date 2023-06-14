import React from "react";
import "./Breakdown.scss";

const BreakDown = ({ info }) => {
  return (
    <ul className="breakdown-container">
      {info.map((value, index) => {
        return <li key={index}>${value}</li>;
      })}
    </ul>
  );
};

export default BreakDown;
