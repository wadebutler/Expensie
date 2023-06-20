import { atom } from "recoil";

export const userIdAtom = atom({
  key: "userIdState",
  default: "",
});

export const displayModalAtom = atom({
  key: "displayModalState",
  default: false,
});
