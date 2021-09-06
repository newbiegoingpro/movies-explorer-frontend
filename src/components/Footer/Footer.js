function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__top'>Учебный проект Яндекс.Практикум х BeatFilm.</div>
            <div className='footer__bottom'>
                <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
                <div className='footer__social'>
                    <a target='_blank' href={`https://practicum.yandex.ru/`} className='footer__contact' rel="noreferrer">Яндекс.Практикум</a>
                    <a target='_blank' href={`https://github.com/yandex-praktikum`} className='footer__contact' rel="noreferrer">Github</a>
                    <a target='_blank' href={`https://www.facebook.com/yandex.practicum`} className='footer__contact' rel="noreferrer">Facebook</a>
                </div>
            </div>

        </footer>
    )
}
export default Footer;