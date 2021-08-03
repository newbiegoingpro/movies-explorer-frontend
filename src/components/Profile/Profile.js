
import { Link } from "react-router-dom";
import Header from "../Header/Header";

function Profile() {
    return (
        <>
            <Header />
            <section className='profile'>
                <h1 className='profile__head'>
                    Привет!
                </h1>
                <div className='profile__input-container'>
                    <div className='profile__name-input-container'>
                        <span className='profile__span'>
                            Имя
                        </span>
                        <input className='profile__input' placeholder='Имя'/>
                    </div>
                    <div className='profile__email-input-container'>
                        <span className='profile__span'>
                            Почта
                        </span>
                        <input className='profile__input' placeholder='E-mail'/>
                    </div>
                </div>
                <div className='profile__bottom-container'>
                    <button className='profile__update-btn'>
                        Редактировать
                    </button>
                    <Link className='profile__signout' to='/'>
                        Выйти из аккаунта
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Profile;