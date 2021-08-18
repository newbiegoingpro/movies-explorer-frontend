import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies(props) {
    return (
        <>
            <Header />
            <SearchForm view={props.view} shortFilms={props.shortFilms} onSearch={props.onSearch} movies={props.movies}/>
            <MoviesCardList user={props.user} onDelClick={props.onDelClick} view={props.view} />
            <Footer />
        </>
    )
}

export default SavedMovies;