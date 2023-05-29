import React, { useState } from "react";
import "./Login.scss";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then((user) => {
      navigate("/");
    });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>

      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={() => handleLogin()}>Login</button>
    </div>
  );
};

export default Login;
