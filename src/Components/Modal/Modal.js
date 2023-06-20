import React, { useState } from "react";
import "./Modal.scss";
import CloseIcon from "../../Assets/CloseIcon";
import { useRecoilState } from "recoil";
import { displayModalAtom } from "../../Util/Atoms";
import { useFirestore } from "reactfire";
import { setDoc, doc } from "firebase/firestore";

const Modal = ({ userId, docId, info }) => {
  const [displayModal, setDisplayModal] = useRecoilState(displayModalAtom);
  const [title, setTitle] = useState("");
  const firestore = useFirestore();

  const handleAddCategory = async () => {
    const tempInfo = info;
    tempInfo.categories.push({ label: title, value: title, color: "yellow" });
    tempInfo.expenses[title] = [];
    await setDoc(doc(firestore, userId, docId), tempInfo);
    setTitle("");
  };

  return (
    <div className="modal-backdrop" onClick={() => setDisplayModal(false)}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div
          className="modal-close-button-container"
          onClick={() => setDisplayModal(false)}
        >
          <CloseIcon />
        </div>

        <label htmlFor="title">Add a new expense category</label>

        <input
          type="text"
          id="title"
          value={title}
          placeholder="Food"
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          className="modal-add-button"
          // disabled={title === "" ? true : false}
          // aria-disabled={title === "" ? true : false}
          onClick={() => handleAddCategory()}
        >
          Add Category
        </button>
      </div>
    </div>
  );
};

export default Modal;
