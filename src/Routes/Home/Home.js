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
import ExpenseInput from "../../Components/ExpenseInput/ExpenseInput";
import BreakDown from "../../Components/Breakdown/Breakdown";

const Home = () => {
  const [info, setInfo] = useState(null);
  const [userId, setUserId] = useRecoilState(userIdAtom);
  const firestore = useFirestore();
  const signInCheck = useSigninCheck();
  const navigate = useNavigate();
  const userCollection = userId ? collection(firestore, userId) : null;
  const userQuery = query(userCollection);
  const { status, data: userData } = useFirestoreCollectionData(userQuery);

  useEffect(() => {
    if (!userId) {
      const { data } = signInCheck;

      if (data) {
        if (data.signedIn === false) {
          navigate("/");
        }
      } else {
        navigate("/");
      }
    }
  }, [userId, info]);

  useEffect(() => {
    setInfo(userData ? userData[0] : null);
  }, [status]);

  const handleLogout = () => {
    setUserId(null);
    navigate("/");
  };

  return status === "loading" || info === null ? (
    <div>Loading...</div>
  ) : (
    <div>
      <button onClick={() => handleLogout()}>Logout</button>
      <h1>Expensie</h1>
      <p>total $ spent: {info.total}</p>

      <ExpenseInput
        categories={info.categories}
        userId={userId}
        docId={info["NO_ID_FIELD"]}
        info={info}
      />

      <BreakDown info={info} />
    </div>
  );
};

export default Home;
