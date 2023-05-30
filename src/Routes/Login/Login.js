import React, { useState } from "react";
import "./Login.scss";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userIdAtom } from "../../Util/Atoms";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useRecoilState(userIdAtom);
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then((user) => {
      setUserId(user.user.uid);
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
