const Modal = ({ onCancel, onConfirm }) => {
  const handleCancel = () => onCancel();
  const handleConfirm = () => onConfirm();

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button type="button" className="btn btn--alt" onClick={handleCancel}>
        Cancel
      </button>
      <button type="button" className="btn" onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
