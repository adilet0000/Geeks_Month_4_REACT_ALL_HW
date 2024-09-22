
const Modal = ({ message, onClose }) => {
   return (
      <div className="modal">
         <div className="modal-content">
            <p>{message}</p>
            <button onClick={onClose}>Закрыть</button>
         </div>
      </div>
   );
};

export default Modal;
