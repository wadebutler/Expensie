import React, { useState } from "react";
import "../Login/Login.scss";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AccountCreation from "../../Util/AccountCreation";
import { collection, addDoc } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { userIdAtom } from "../../Util/Atoms";
import { useFirestore } from "reactfire";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useRecoilState(userIdAtom);
  const auth = getAuth();
  const navigate = useNavigate();
  const firestore = useFirestore();

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password).then(async (user) => {
      setUserId(user.user.uid);
      await addDoc(collection(firestore, user.user.uid), AccountCreation());
      navigate("/home");
    });
  };

  const handleNav = () => {
    navigate("/");
  };

  return (
    <div className="create-container">
      <h1>Create Account</h1>

      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={() => handleCreateAccount()}>Create Account</button>

      <p>
        already have an account? <span onClick={() => handleNav()}>login</span>
      </p>
    </div>
  );
};

export default CreateAccount;
