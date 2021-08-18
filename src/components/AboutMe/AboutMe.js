import me from '../../images/me.jpg'
function AboutMe() {
    return (
        <div className='aboutme' id='student'>
            <h2 className="aboutme__heading">Студент</h2>
            <div className='aboutme__container'>
            <div className='aboutme__text-elems-container'>
                
                <p className='aboutme__name'>Коля</p>
                <p className='aboutme__shortinfo'>Человек, 22 года</p>
                <article className='aboutme__article'>Родился и живу в Санкт-Петербурге.
                    Программировать начал почему? Это я еще не начал даже.
                    Люблю рисовать, петь(это секрет), танцевать(самый страшный секрет), играю в гляделки с солнцем.
                </article>
                <div className='aboutme__social'>
                    <a  href='https://vk.com/id340609519' className='aboutme__link'>VK</a>
                    <a href='https://github.com/newbiegoingpro' className='aboutme__link'>Github</a>
                </div>

            </div>
            
            <img className='aboutme__photo' src={me} alt='Фотография автора' />
            </div>
        </div>
    )
}
export default AboutMe;