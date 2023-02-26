import React from "react";
import "./ConfirmModal.css";

type ConfirmModal = {
  setIsModalConfirm: (value: boolean) => void;
  isModalConfirm: boolean;
};

const ConfirmModal = ({ isModalConfirm, setIsModalConfirm }: ConfirmModal) => {
  return (
    <div className="modalWrapper" onClick={() => setIsModalConfirm(false)}>
      <div className="modalContent" onClick={(e: any) => e.stopPropagation()}>
        <span>Удалить запись?</span>
        <div className="modalButton">
          <button>Да</button>
          <button onClick={() => setIsModalConfirm(false)}>Нет</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
