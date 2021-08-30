import MoviesCard from "../MoviesCard/MoviesCard";
import { Route } from "react-router";
function MoviesCardList(props) {




    
    const baseUrl = 'https://api.nomoreparties.co';
    const renderFilms = () => {
        
        return ((props.isSubmitted && props.view.length === 0) ? <p className='movies__empty'>Ничего не найдено...</p> : props.view.map((movie) => (<MoviesCard saved={props.saved} user={props.user} onDelClick={props.onDelClick} onSaveClick={props.onSaveClick} movie={movie} key={movie.id}name={movie.nameRU} duration={movie.duration} trailerLink={movie.trailerLink} link={`${baseUrl + movie.image.url}`} />))) 
        
    }
    const renderSavedFilms = () => {
        
        return ((props.isSubmitted && props.view.length === 0) ? <p className='movies__empty'>Ничего не найдено...</p> : props.view.map((movie) => (<MoviesCard user={props.user} saved={props.view} view={props.view} onDelClick={props.onDelClick} movie={movie} key={movie._id}name={movie.nameRU} duration={movie.duration} trailerLink={movie.trailer} link={movie.image} />))
        )
    }

    return (
        <section className='movies'>
            <Route path='/movies'>
                {renderFilms()}
            </Route>
            <Route path='/saved_movies'>
                {renderSavedFilms()}
            </Route>
        </section>
    )
}

export default MoviesCardList;