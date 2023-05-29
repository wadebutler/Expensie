import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSigninCheck } from "reactfire";

const Home = () => {
  const signInCheck = useSigninCheck();
  const navigate = useNavigate();

  useEffect(() => {
    const { data } = signInCheck;

    if (data) {
      if (data.signedIn === false) {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, []);

  return <div>Home</div>;
};

export default Home;
