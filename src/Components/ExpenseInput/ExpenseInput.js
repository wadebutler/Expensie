import React, { useState } from "react";
import Select from "react-select";
import "./ExpenseInput.scss";
import { useFirestore } from "reactfire";
import { setDoc, doc } from "firebase/firestore";
import { displayModalAtom } from "../../Util/Atoms";
import { useRecoilState } from "recoil";

const ExpenseInput = ({ categories, userId, docId, info }) => {
  const [displayModal, setDisplayModal] = useRecoilState(displayModalAtom);
  const [dollarValue, setDollarValue] = useState("");
  const [category, setCategory] = useState("");
  const firestore = useFirestore();

  const selectStyle = {
    control: (styles) => ({ ...styles, borderRadius: 22 }),
  };

  const handleAddExpense = async () => {
    await info.expenses[category.value].push(dollarValue);
    info.total = parseFloat(info.total) + parseFloat(dollarValue);
    await setDoc(doc(firestore, userId, docId), info);
    setDollarValue("");
  };

  return (
    <div className="expense-container">
      <div className="expense-form-container">
        <div className="expense-input-container">
          <label htmlFor="dollar">Add dollar value:</label>
          <input
            type="number"
            id="dollar"
            min={0}
            value={dollarValue}
            placeholder="100"
            onChange={(e) => setDollarValue(e.target.value)}
          />
        </div>

        <div className="category-input-container">
          <Select
            styles={selectStyle}
            className="category-select"
            placeholder={"Select Category"}
            options={categories}
            onChange={(value) => setCategory(value)}
          />

          <button
            className="category-button"
            onClick={() => setDisplayModal(true)}
          >
            +
          </button>
        </div>
      </div>

      <button
        className="add-button"
        disabled={dollarValue === "" || category === "" ? true : false}
        aria-disabled={dollarValue === "" || category === "" ? true : false}
        onClick={() => handleAddExpense()}
      >
        Add
      </button>
    </div>
  );
};

export default ExpenseInput;
