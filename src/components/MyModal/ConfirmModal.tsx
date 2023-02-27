import React from "react";
import "./ConfirmModal.css";

type ConfirmModal = {
  setIsModalConfirm: (value: boolean) => void;
  isModalConfirm: boolean;
  removeUsers: () => void;
};

const ConfirmModal = ({ isModalConfirm, setIsModalConfirm, removeUsers }: ConfirmModal) => {
  return (
    <div className="modalWrapper" onClick={() => setIsModalConfirm(false)}>
      <div className="modalContent" onClick={(e: any) => e.stopPropagation()}>
        <span>Удалить запись?</span>
        <div className="modalButton">
          <button onClick={() => removeUsers()}>Да</button>
          <button onClick={() => setIsModalConfirm(false)}>Нет</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
