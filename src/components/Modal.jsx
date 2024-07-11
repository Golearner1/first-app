//Linking & Navigating: Activate 'New Post'-button, Cancel button a…
import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

function Modal({ children}) {
  const navigate =useNavigate();
  function close(){
    navigate('/');//or we can use ..
  }
  return (
    <>
      <div className={classes.backdrop} onClick={close} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;