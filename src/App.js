import React from "react";
import "./App.scss";
import { AuthProvider, FirestoreProvider, useFirebaseApp } from "reactfire";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Login from "./Routes/Login/Login";
import CreateAccount from "./Routes/CreateAccount/CreateAccount";

const App = () => {
  const app = useFirebaseApp();
  const firestore = getFirestore(app);
  const auth = getAuth(app);

  const router = createBrowserRouter([
    {
      path: "/home",
      exact: true,
      element: <Home />,
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
