import MoviesCard from "../MoviesCard/MoviesCard";
function MoviesCardList(){
    let cards = [
        {
            name: '33СЛОВАОДИЗАЙНЕ',
            duration: '1ч34м',
            imgSrc: '',
        },

        {
            name: '34СЛОВАОДИЗАЙНЕ',
            duration: '1ч34м',
            imgSrc: '',
        },

        {
            name: '35СЛОВОДИЗАЙНЕ',
            duration: '1ч34м',
            imgSrc: '',
        },
    ]
    return(
        <section className='movies'>
            {cards.map((card, i) => (
                        <MoviesCard key={i} name={card.name} duration={card.duration}  />))}
        </section>
    )
}

export default MoviesCardList;