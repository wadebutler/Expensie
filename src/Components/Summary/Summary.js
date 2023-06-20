import React from "react";
import "./Summary.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import BreakDown from "../Breakdown/Breakdown";
import AccordianArrow from "../../Assets/AccordianArrow";

const Summary = ({ total, expenses }) => {
  return (
    <div>
      <div className="total-container">
        <h2 className="total-text">Total $ spent:</h2>
        <p>${total.toFixed(2)}</p>
      </div>
      <Accordion allowZeroExpanded allowMultipleExpanded>
        {Object.entries(expenses).map((item, index) => {
          return (
            <AccordionItem key={index}>
              <AccordionItemHeading className="hover-header">
                <AccordionItemButton className="total-container">
                  <h3 className="category-text">
                    Total $ spent for {item[0]}:
                  </h3>
                  <p>
                    $
                    {item[1]
                      .reduce((a, b) => parseInt(a) + parseInt(b), 0)
                      .toFixed(2)}
                    <span>
                      <AccordionItemState>
                        {(state) => {
                          return (
                            <AccordianArrow
                              flip={state.expanded ? "true" : "false"}
                            />
                          );
                        }}
                      </AccordionItemState>
                    </span>
                  </p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <BreakDown info={item[1]} />
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Summary;
