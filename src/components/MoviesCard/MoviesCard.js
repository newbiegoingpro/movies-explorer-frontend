import { Route, Link } from 'react-router-dom';
import img from '../../images/hooligani.png'
import Movies from '../Movies/Movies';
function MoviesCard(props) {
    const duration = Number(props.duration);
    const handleClick = () => {
        props.onSaveClick({
            country: props.movie.country,
            director: props.movie.director,
            duration: props.movie.duration,
            year: props.movie.year,
            description: props.movie.description,
            image: props.link,
            trailer: props.movie.trailerLink,
            thumbnail: props.link,
            movieId: props.movie.id,
            nameRU: props.movie.nameRU,
            nameEN: props.movie.nameEN,
            owner: props.user._id,
        })
    }
    const handleDel = () => {
        console.log(props.movie._id)
        props.onDelClick(props.movie._id)
        props.view.filter(i => i._id !== props.movie._id)
    }
    return (

        <div className='movie'>
            <Link target='_blank' to={props.trailerLink}>
                <img className="movie__pic" src={props.link} alt='постер фильма' />
            </Link>

            <div className='movie__container'>
                <div className="movie__text-container">

                    <p className="movie__text">{props.name}</p>
                    <p className='movie__duration'>{duration > 60 ? (Math.floor(duration / 60) + 'ч') + (duration % 60 + 'м') : duration + 'м'}</p>
                </div>
                <div className="movie__save-container">
                    <Route path='/movies'>
                        <button className='movie__save-button' type="button" onClick={handleClick}>
                        </button>
                    </Route>
                    <Route path='/saved_movies'>
                        <button className='movie__saved-button' type='button' onClick={handleDel} />
                    </Route>

                </div>
            </div>
        </div>


    )
}

export default MoviesCard;