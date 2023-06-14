import React, { useEffect, useState } from "react";
import "./Summary.scss";

const Summary = ({ total, expenses }) => {
  return (
    <div>
      <div className="total-container">
        <h2 className="total-text">Total $ spent:</h2>
        <p>${total.toFixed(2)}</p>
      </div>
      {Object.entries(expenses).map((item) => {
        return (
          <div className="total-container">
            <h3 className="category-text">Total $ spent for {item[0]}: </h3>
            <p>
              $
              {item[1]
                .reduce((a, b) => parseInt(a) + parseInt(b), 0)
                .toFixed(2)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Summary;
