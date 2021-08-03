import Header from "../Header/Header";
import { Link } from 'react-router-dom';
function Login() {
    return (
        <>

            <div className="login">
                <Header />
                <form className="form">
                    <p className="form__heading">Рады видеть!</p>
                    <input className="login__input" required id="E-mail"
                        name="E-mail" placeholder="Email"
                        type="email" />
                    <input className="login__input" required id="password"
                        name="password" placeholder="Пароль" type="password"
                    />
                    <div className="login__button-container">
                        <button type="submit" className="form__button">Войти</button>
                    </div>
                </form>
                <div className="form__link-container">
                    <p>Ещё не зарегистрированы?</p>
                    <Link to="/signup" className="form__link">Регистрация
                    </Link>
                </div>

            </div>
        </>
    )
}
export default Login;