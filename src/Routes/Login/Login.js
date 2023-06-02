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
    signInWithEmailAndPassword(auth, email, password).then(async (user) => {
      await setUserId(user.user.uid);
      navigate("/home");
    });
  };

  const handleNav = () => {
    navigate("/create");
  };

  return (
    <div className="login-container">
      <h1>Expensie</h1>
      <h2>Login</h2>

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        disabled={email === "" || password === "" ? true : false}
        aria-disabled={email === "" || password === "" ? true : false}
        onClick={() => handleLogin()}
      >
        Login
      </button>

      <p>
        Don't have an account?
        <span onClick={() => handleNav()}> Create Account</span>
      </p>
    </div>
  );
};

export default Login;
