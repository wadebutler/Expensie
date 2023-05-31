import React, { useState } from "react";
import Select from "react-select";
import "./ExpenseInput.scss";
import { useFirestore } from "reactfire";
import { setDoc, doc } from "firebase/firestore";

const ExpenseInput = ({ categories, userId, docId, info }) => {
  const [dollarValue, setDollarValue] = useState("");
  const [category, setCategory] = useState("");
  const firestore = useFirestore();

  const handleAddExpense = async () => {
    await info.expenses[category.value].push(dollarValue);
    info.total = parseFloat(info.total) + parseFloat(dollarValue);
    await setDoc(doc(firestore, userId, docId), info);
    setDollarValue("");
  };

  return (
    <div className="expense-container">
      <div className="expense-form-container">
        <>
          <label htmlFor="dollar">add dollar value:</label>
          <input
            type="number"
            id="dollar"
            min={0}
            value={dollarValue}
            placeholder="100"
            onChange={(e) => setDollarValue(e.target.value)}
          />
        </>

        <Select options={categories} onChange={(value) => setCategory(value)} />
      </div>

      <button
        disabled={dollarValue === null || category === null ? true : false}
        onClick={() => handleAddExpense()}
      >
        Add
      </button>
    </div>
  );
};

export default ExpenseInput;
