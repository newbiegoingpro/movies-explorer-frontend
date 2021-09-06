import close from '../../images/deleteBtn.svg';
function Popup(props) {
    return (
        <div className={`${props.isOpen ? 'popup' : 'popup_hidden'}`}>
            <div className='popup__container'>
            <button type="button" 
                className="popup__close-button register__close-button"
                onClick={props.setIsOpen} >
                    <img className="popup__close-button-image" src={close} alt="Крестик" />
                </button>
                <p className='popup__text'>{props.isSuccessful ? 'Данные профиля успешно изменены' : 'Попробуйте ещё раз..'}</p>
            </div>
        </div>
    )
}
export default Popup;