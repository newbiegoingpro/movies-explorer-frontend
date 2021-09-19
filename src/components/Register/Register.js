/* eslint-disable default-case */
import Header from "../Header/Header";
import { Link } from 'react-router-dom';
import React, { } from "react";
import useInput from "../../utils/customHooks/useInput";



function Register(props) {
    const email = useInput('', { isEmpty: true, isEmail: true });
    const password = useInput('', { isEmpty: true, minLength: 2, maxLength: 24 });
    const name = useInput('', { isEmpty: true, minLength: 2, maxLength: 30 });

    function handleSubmit(e) {
        e.preventDefault();
        props.onRegister({ email: email.value, password: password.value, name: name.value })
    }
    return (
            <div className="register">
                <Header />
                <form className="form" onSubmit={handleSubmit}>
                    <p className="form__heading">Добро пожаловать!</p>
                    <input value={name.value} onBlur={e => name.onBlur(e)} onChange={e => name.onChange(e)} className="form__input" required id="name"
                        name="name" placeholder="Имя"
                        type="text" />
                    {(name.isDirty && name.isEmpty) && <span style={{ color: 'red' }}>Обязательное поле</span>}
                    {(name.isDirty && name.minLengthError) && <span style={{ color: 'red' }}>Мало букав</span>}
                    {(name.isDirty && name.maxLengthError) && <span style={{ color: 'red' }}>Многа букав</span>}
                    <input value={email.value} onBlur={e => email.onBlur(e)} onChange={e => email.onChange(e)} className="form__input" required id="E-mail"
                        name="E-mail" placeholder="Email"
                        type="email" />
                    {(email.isDirty && email.isEmpty) && <span style={{ color: 'red' }}>Обязательное поле</span>}
                    {(email.isDirty && email.isEmail) && <span style={{ color: 'red' }}>Введен некорректный email</span>}
                    <input value={password.value} onBlur={e => password.onBlur(e)} onChange={e => password.onChange(e)} className="form__input" required id="password"
                        name="password" placeholder="Пароль" type="password" />
                    {(password.isDirty && password.isEmpty) && <span style={{ color: 'red' }}>Обязательное поле</span>}
                    {(password.isDirty && password.minLengthError) && <span style={{ color: 'red' }}>Мало букав</span>}
                    {(password.isDirty && password.maxLengthError) && <span style={{ color: 'red' }}>Многа букав</span>}
                    <div className="register__button-container">
                        <button disabled={!email.isFormValid || !password.isFormValid || !name.isFormValid} type="submit"
                            className={`${(!email.isFormValid || !password.isFormValid || !name.isFormValid)
                                ? 'form__button_disabled' : 'form__button'}`}>Зарегистрироваться</button>
                    </div>
                </form>
                <div className="form__link-container">
                    <p>Уже зарегистрированы?</p>
                    <Link to="/signin" className="form__link">Войти
                    </Link>
                </div>
            </div>
    )
}
export default Register;