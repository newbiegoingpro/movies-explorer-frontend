import Header from "../Header/Header";
import { Link } from 'react-router-dom';
function Register() {
    return (
        <>
            
            <div className="register">
            <Header />
                <form className="form">
                    <p className="form__heading">Добро пожаловать!</p>
                    <input className="register__input" required id="name"
                        name="name" placeholder="Имя"
                        type="text" />
                    <input className="register__input" required id="E-mail"
                        name="E-mail" placeholder="Email"
                        type="email" />
                    <input className="register__input" required id="password"
                        name="password" placeholder="Пароль" type="password" />
                    <div className="register__button-container">
                        <button type="submit" className="form__button">Зарегистрироваться</button>
                    </div>
                </form>
                <div className="form__link-container">
                    <p>Уже зарегистрированы?</p>
                    <Link to="/signin" className="form__link">Войти
                    </Link>
                </div>

            </div>
        </>
    )
}
export default Register;