function Techs() {
    return (
        <section className='techs' id='techs'>
            <div className='techs__container'>
                <h2 className='techs__heading'>Технологии</h2>
                <h3 className='techs__heading_big'>7 технологий
                <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                </h3>     
                <ul className="techs__list">
                    <li className='techs__list-item'>
                        HTML
                    </li>
                    <li className='techs__list-item'>
                        CSS
                    </li>
                    <li className='techs__list-item'>
                        JS
                    </li>
                    <li className='techs__list-item'>
                        React
                    </li>
                    <li className='techs__list-item'>
                        Git
                    </li>
                    <li className='techs__list-item'>
                        Express.js
                    </li>
                    <li className='techs__list-item'>
                        mongoDB
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Techs;