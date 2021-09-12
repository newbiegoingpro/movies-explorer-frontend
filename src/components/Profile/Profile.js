
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import React from "react";
import { CurrentUserContext } from '../../contexts/currentUserContext';
function Profile(props) {
    const user = React.useContext(CurrentUserContext)
    const [email, emailInput] = React.useState('');
    const [name, nameInput] = React.useState('');
    function handleEmailInput(e) {
        emailInput(e.target.value)
    }
    function handleNameInput(e) {
        nameInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdate({ email, name });
    }
    return (
        
            <>
                <Header />
                <section className='profile'>
                    <form className='profile__form' onSubmit={handleSubmit}>
                        <h1 className='profile__head'>
                            Привет, {user.name} !
                        </h1>

                        <div className='profile__input-container'>
                            <div className='profile__name-input-container'>
                                <span className='profile__span'>
                                    Имя
                                </span>
                                <input required onChange={handleNameInput} className='profile__input' placeholder={user.name} />
                            </div>
                            <div className='profile__email-input-container'>
                                <span className='profile__span'>
                                    Почта
                                </span>
                                <input required onChange={handleEmailInput} className='profile__input' placeholder={user.email} />
                            </div>
                        </div>
                        <div className='profile__bottom-container'>
                            <button disabled={name.length === 0 || email.length === 0} className='profile__update-btn'>
                                Редактировать
                            </button>

                            <Link className='profile__signout' onClick={props.onSignOut} to='/'>
                                Выйти из аккаунта
                            </Link>
                        </div>
                    </form>
                </section>
            </>
            
                )
}

                export default Profile;