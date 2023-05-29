import React, { useState } from "react";
import "./CreateAccount.scss";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password).then((user) => {
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
