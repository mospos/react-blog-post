import { useNavigate } from 'react-router-dom';
import css from './Modal.module.css';
function Modal ({children}) {
    const navigate = useNavigate();
    function closeHandler() {
        navigate('..');
    }
   return <>
    <div className={css.backdrop} onClick={closeHandler} />
    <dialog open className={css.modal}>{children}</dialog>
    </>
};

export default Modal;