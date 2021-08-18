import Header from "../Header/Header";
import { Link } from 'react-router-dom';
import React from "react";
import useInput from "../../utils/customHooks/useInput";
import useValidation from "../../utils/customHooks/useValidation";
function Login(props) {
    const email = useInput('', { isEmpty: true, isEmail: true });
    const password = useInput('', { isEmpty: true, minLength: 2, maxLength: 24 });
    function handleSubmit(e) {
        e.preventDefault();
        props.onLogin({ email: email.value, password: password.value, })
    }
    return (
        <>

            <div className="login">
                <Header />
                <form className="form" onSubmit={handleSubmit}>
                    <p className="form__heading">Рады видеть!</p>
                    <input value={email.value} onBlur={e => email.onBlur(e)} onChange={e => email.onChange(e)}  className="form__input" required id="E-mail"
                        name="E-mail" placeholder="Email"
                        type="email" />
                    {(email.isDirty && email.isEmpty) && <span style={{ color: 'red' }}>Обязательное поле</span>}
                    {(email.isDirty && email.isEmail) && <span style={{ color: 'red' }}>Введен некорректный email</span>}
                    <input value={password.value} onBlur={e => password.onBlur(e)} onChange={e => password.onChange(e)} className="form__input" required id="password"
                        name="password" placeholder="Пароль" type="password"
                    />
                    {(password.isDirty && password.isEmpty) && <span style={{ color: 'red' }}>Обязательное поле</span>}
                    {(password.isDirty && password.minLengthError) && <span style={{ color: 'red' }}>Мало букав</span>}
                    {(password.isDirty && password.maxLengthError) && <span style={{ color: 'red' }}>Многа букав</span>}
                    <div className="login__button-container">
                        <button disabled={!email.isFormValid || !password.isFormValid} type="submit" className={`  ${(!email.isFormValid || !password.isFormValid)
                             ? 'form__button_disabled' : 'form__button'}`}>Войти</button>
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