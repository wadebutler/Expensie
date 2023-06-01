import React from "react";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userIdAtom = atom({
  key: "userIdState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
