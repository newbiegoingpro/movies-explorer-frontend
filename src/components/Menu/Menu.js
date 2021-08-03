import { Link } from 'react-router-dom';

function Menu(props) {

    return (
        <div className={`overlay ${props.isOpen ? 'overlay_opened' : ''}`}>

            <div className={` header__menu  ${props.isOpen ? 'header__menu_active' : ' '}`} >
                <div className='menu__list'>
                    <Link className="header__link" to='/'>Главная</Link>
                    <Link className="header__link" to='/movies'>Фильмы</Link>
                    <Link className="header__link" to='/saved_movies'>Сохранённые фильмы</Link>
                </div>
                <Link className="header__link header__link_account" to='/profile'>Аккаунт</Link>
            </div>

        </div>
    )
}
export default Menu;