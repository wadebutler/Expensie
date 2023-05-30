import React, { useState } from "react";
import "./CreateAccount.scss";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AccountCreation from "../../Util/AccountCreation";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { userIdAtom } from "../../Util/Atoms";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useRecoilState(userIdAtom);
  const auth = getAuth();
  const navigate = useNavigate();
  const db = getFirestore();

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password).then(async (user) => {
      setUserId(user.user.uid);
      await addDoc(collection(db, user.user.uid), AccountCreation());
      navigate("/");
    });
  };

  return (
    <div className="create-container">
      <h1>Create Account</h1>

      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={() => handleCreateAccount()}>Create Account</button>
    </div>
  );
};

export default CreateAccount;
