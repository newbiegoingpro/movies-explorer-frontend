import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import More from "../More/More";
function Movies(props) {
    return (
        <>
            <Header />
            <SearchForm view={props.view} shortFilms={props.shortFilms} onSearch={props.onSearch} movies={props.movies}/>
            <MoviesCardList user={props.user} onSaveClick={props.onSaveClick} view={props.view}/>
            <More/>
            <Footer />
        </>
    )
}

export default Movies;