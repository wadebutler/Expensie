import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { collection, query } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { userIdAtom } from "../../Util/Atoms";
import ExpenseInput from "../../Components/ExpenseInput/ExpenseInput";
import BreakDown from "../../Components/Breakdown/Breakdown";
import "./Home.scss";

const Home = () => {
  const [userId, setUserId] = useRecoilState(userIdAtom);
  const [info, setInfo] = useState(null);
  const firestore = useFirestore();
  const navigate = useNavigate();
  const userCollection = collection(firestore, userId ? userId : null);
  const userQuery = query(userCollection);
  const { status, data: userData } = useFirestoreCollectionData(userQuery);

  useEffect(() => {
    setInfo(userData ? userData[0] : null);
  }, [userId, info, status]);

  const handleLogout = () => {
    setUserId(null);
    navigate("/");
  };

  return status === "loading" || info === null ? (
    <div className="loading-text">Loading...</div>
  ) : (
    <div className="app-container">
      <button className="logout-button" onClick={() => handleLogout()}>
        Logout
      </button>
      <h1>Expensie</h1>

      <ExpenseInput
        categories={info.categories}
        userId={userId}
        docId={info["NO_ID_FIELD"]}
        info={info}
      />

      <h2 className="total-text">
        Total $ spent: <span>${info.total.toFixed(2)}</span>
      </h2>

      <BreakDown info={info} />
    </div>
  );
};

export default Home;
