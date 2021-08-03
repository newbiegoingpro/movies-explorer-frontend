function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__top'>Учебный проект Яндекс.Практикум х BeatFilm.</div>
            <div className='footer__bottom'>
                <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
                <div className='footer__social'>
                    <p className='footer__contact'>Яндекс.Практикум</p>
                    <p className='footer__contact'>Github</p>
                    <p className='footer__contact'>Facebook</p>
                </div>
            </div>

        </footer>
    )
}
export default Footer;