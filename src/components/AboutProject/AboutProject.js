function AboutProject() {
    return (
        <section className='aboutProject' id='project'>
            <h2 className='aboutProject__heading'>О проекте</h2>
            <div className='aboutProject__grid'>
                <h3 className='aboutProject__grid__heading aboutProject__grid__heading_order-0'>Дипломный проект включал 5 этапов</h3>
                <h3 className='aboutProject__grid__heading aboutProject__grid__heading_order-2'>На выполнение диплома ушло 5 недель</h3>
                <p className='aboutProject__grid__text aboutProject__grid__text_order-1'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <p className='aboutProject__grid__text aboutProject__grid__text_order-3'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className='aboutProject__grid_bottom'>
                <div className='aboutProject_green'><span className='aboutProject__grid__text_span'>1 неделя</span></div>
                <div className='aboutProject_grey'><span className='aboutProject__grid__text_span'>4 недели</span></div>
                <p className='aboutProject__text-under'>Back-end</p>
                <p className='aboutProject__text-under'>Front-end</p>
            </div>
        </section>
    )
}
export default AboutProject;