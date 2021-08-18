import MoviesCard from "../MoviesCard/MoviesCard";
import { Route } from "react-router";
function MoviesCardList(props) {
    const baseUrl = 'https://api.nomoreparties.co';
    return (
        <section className='movies'>
            <Route path='/movies'>
                {props.view.map((movie) => (
                    <MoviesCard user={props.user} onSaveClick={props.onSaveClick} movie={movie} key={movie.id}
                        name={movie.nameRU} duration={movie.duration} trailerLink={movie.trailerLink}
                        link={`${baseUrl + movie.image.url}`} />))}
            </Route>
            <Route path='/saved_movies'>
                {props.view.map((movie) => (
                    <MoviesCard user={props.user} view={props.view} onDelClick={props.onDelClick} movie={movie} key={movie._id}
                        name={movie.nameRU} duration={movie.duration} trailerLink={movie.trailer}
                        link={movie.image} />))}
            </Route>
        </section>
    )
}

export default MoviesCardList;