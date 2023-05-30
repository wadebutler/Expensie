import React from "react";
import { atom } from "recoil";

export const userIdAtom = atom({
  key: "userIdState",
  default: "",
});
