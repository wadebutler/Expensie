import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useFirestore,
  useFirestoreCollectionData,
  useSigninCheck,
} from "reactfire";
import { collection, query } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { userIdAtom } from "../../Util/Atoms";
import Select from "react-select";

const Home = () => {
  const [userId, setUserId] = useRecoilState(userIdAtom);
  const [dollarValue, setDollarValue] = useState(0);
  const firestore = useFirestore();
  const signInCheck = useSigninCheck();
  const navigate = useNavigate();
  const userCollection = collection(firestore, userId);
  const userQuery = query(userCollection);
  const { status, data: userData } = useFirestoreCollectionData(userQuery);
  const info = userData ? userData[0] : null;

  useEffect(() => {
    if (!userId) {
      const { data } = signInCheck;

      if (data) {
        if (data.signedIn === false) {
          navigate("/login");
        }
      } else {
        navigate("/login");
      }
    }
  }, []);

  const handleAddExpense = () => {};

  return status === "loading" ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1>Expensie</h1>
      <p>total $ spent: {info.total}</p>

      <div>
        <input
          value={dollarValue}
          onChange={(e) => setDollarValue(e.target.value)}
        />

        <Select options={info.categories} />

        <button onClick={() => handleAddExpense()}>Add</button>
      </div>

      <h2>BreakDown</h2>
      {info.expenses.map((expense) => {
        if (expense.length < 0) {
          return (
            <div>
              <h3>{Object.keys(expense)[0]}</h3>
              {expense?.map((item) => {
                return <p>item</p>;
              })}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Home;
