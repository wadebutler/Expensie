import React from "react";
import "./App.scss";
import { AuthProvider, FirestoreProvider, useFirebaseApp } from "reactfire";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Login from "./Routes/Login/Login";
import CreateAccount from "./Routes/CreateAccount/CreateAccount";
import { useRecoilState } from "recoil";
import { userIdAtom } from "./Util/Atoms";

const App = () => {
  const app = useFirebaseApp();
  const firestore = getFirestore(app);
  const auth = getAuth(app);
  const [userId, setUserId] = useRecoilState(userIdAtom);

  const router = createBrowserRouter([
    {
      path: "/home",
      exact: true,
      element: userId ? <Home /> : <Login />,
    },
    {
      path: "/",
      exact: true,
      element: <Login />,
    },
    {
      path: "/create",
      exact: true,
      element: <CreateAccount />,
    },
  ]);

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>
        <RouterProvider
          router={router}
          fallbackElement={<div>Loading...</div>}
        />
      </FirestoreProvider>
    </AuthProvider>
  );
};

export default App;
