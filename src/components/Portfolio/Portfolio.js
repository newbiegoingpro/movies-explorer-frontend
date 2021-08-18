function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__heading'>Портфолио</h2>
            <ul className='portfolio__list'>
               <li className='portfolio__list-item'> <a href='https://github.com/newbiegoingpro/how-to-learn' className='portfolio__link'>Статичный сайт </a><span className='portfolio__arrow'>&rarr;</span></li> 
               <li className='portfolio__list-item'> <a href='https://newbiegoingpro.github.io/russian-travel/' className='portfolio__link'>Адаптивный сайт </a><span className='portfolio__arrow'>&rarr;</span></li> 
              <li className='portfolio__list-item'>  <a href='https://newbiegoingpro.github.io/react-mesto-auth/#/' className='portfolio__link'>Одностраничное приложение </a><span className='portfolio__arrow'>&rarr;</span></li> 
            </ul>
        </section>
    )
}
export default Portfolio;