import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies(props) {
    return (
        <>
            <Header setIsPressed={props.setIsPressed} subm={props.subm}/>
            <SearchForm setIsPressed={props.setIsPressed} subm={props.subm} preloaderState={props.preloaderState} view={props.view} shortFilms={props.shortFilms} onSearch={props.onSearch} movies={props.movies}/>
            <MoviesCardList isSubmitted={props.submSt} user={props.user} onDelClick={props.onDelClick} view={props.view} />
            <Footer />
        </>
    )
}

export default SavedMovies;