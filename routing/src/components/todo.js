import { useState } from "react";

import Backdrop from "./backdrop";
import Modal from "./modal";

const Todo = ({ title }) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const handleDelete = () => setmodalIsOpen(true);
  const closeModal = () => setmodalIsOpen(false);

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button type="button" className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>

      {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal} />}
      {modalIsOpen && <Backdrop handleClick={closeModal} />}
    </div>
  );
};

export default Todo;
