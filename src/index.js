import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyDD6m4OtCvhhnVazFjMB15ZX5J8hFX94PM",
  authDomain: "expensie.firebaseapp.com",
  projectId: "expensie",
  storageBucket: "expensie.appspot.com",
  messagingSenderId: "1084770797566",
  appId: "1:1084770797566:web:61cc2fc10f09227b9722af",
  measurementId: "G-5TV3MCG637",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <App />
      </FirebaseAppProvider>
    </RecoilRoot>
  </React.StrictMode>
);
