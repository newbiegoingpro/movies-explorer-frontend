import logo from '../../images/logo.svg';
import { Link, Route, } from 'react-router-dom';
import React from 'react';
import burgir from '../../images/burgir.svg';
import menuClose from '../../images/Group.svg';
import Menu from '../Menu/Menu';
function Header(props) {
    const [isMenuOpen, handleMenuVisibility] = React.useState(false);
    const [width, measureHeaderWidth] = React.useState({ width: window.innerWidth });
    React.useEffect(() => {
        window.addEventListener('resize', checkWindowsWidth)
        return () => {
            window.removeEventListener('resize', checkWindowsWidth)
        }
    }, [width]
    )
    function checkWindowsWidth() {
        measureHeaderWidth({ width: window.innerWidth })
    }
    function handleMenuClick() {
        handleMenuVisibility(!isMenuOpen);
        console.log('react is dumb')
    }
    function getLoggedHeaderLayout() {
        if (width.width > 768) {
            return (
                <>
                    <Link to='/'>
                        <img alt='Логотип' src={logo} className='header__logo' />
                    </Link>


                    <div className="header__container">
                        <Link className="header__link header__link_marg" to='/movies'>Фильмы</Link>
                        <Link className="header__link" to='/saved_movies'>Сохранённые фильмы</Link>
                    </div>
                    <Link className="header__link header__link_account" to='/profile'>Аккаунт</Link>
                </>
            )
        } else {
            return (
                <>
                    <Link to='/'>
                        <img alt='Логотип' src={logo} className='header__logo' />
                    </Link>

                    <Menu isOpen={isMenuOpen} />
                    <img
                        className={` ${isMenuOpen ? 'header__hamburger-btn_active' : 'header__hamburger-btn'}`}
                        src={isMenuOpen ? menuClose : burgir} alt='кнопка меню' onClick={handleMenuClick}
                    />
                </>
            )
        }
    }
    return (
        <header className="header">
            <Route path={["/signin", "/signup"]}>
                <Link to='/'>
                    <img alt='Логотип' src={logo} className='header__logo_form' />
                </Link>

            </Route>

            <Route exact path='/'>
                {props.isLoggedIn ?
                    getLoggedHeaderLayout()
                    :
                    <>
                        <Link to='/'>
                            <img alt='Логотип' src={logo} className='header__logo' />
                        </Link>

                        <div className="header__container">
                            <Link className='header__link' to='/signup'>Регистрация</Link>
                            <button className='header__login-btn'><Link className='header__link' to='/signin'>Войти</Link></button>
                        </div>
                    </>
                }

            </Route>
            <Route path={["/movies", "/saved_movies", "/profile"]}>
                {getLoggedHeaderLayout()}
            </Route>
        </header>
    )
}
export default Header;