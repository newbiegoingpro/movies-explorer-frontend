import { Route } from 'react-router-dom';
import img from '../../images/hooligani.png'
function MoviesCard(props) {
    return (
        <>
            <div className='movie'>
                <img className="movie__pic" src={img} alt='постер фильма' />
                <div className='movie__container'>
                    <div className="movie__text-container">

                        <p className="movie__text">{props.name}</p>
                        <p className='movie__duration'>{props.duration}</p>
                    </div>
                    <div className="movie__save-container">
                        <Route path='/movies'>
                            <button className='movie__save-button' type="button">
                            </button>
                        </Route>
                        <Route path='/saved_movies'>
                            <button className='movie__saved-button' type='button' />
                        </Route>

                    </div>
                </div>
            </div>
            <div className='movie'>
                <img className="movie__pic" src={img} alt='постер фильма' />
                <div className='movie__container'>
                    <div className="movie__text-container">

                        <p className="movie__text">{props.name}</p>
                        <p className='movie__duration'>{props.duration}</p>
                    </div>
                    <div className="movie__save-container">
                        <Route path='/movies'>
                            <button className='movie__save-button_active' type="button">
                            </button>
                        </Route>
                        <Route path='/saved_movies'>
                            <button className='movie__saved-button' type='button' />
                        </Route>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MoviesCard;