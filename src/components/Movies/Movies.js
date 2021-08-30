import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import More from "../More/More";
import Preloader from "../Preloader/Preloader";
function Movies(props) {
    
    
    return (
        <>
            <Header />
            <SearchForm subm={props.subm} preloaderState={props.preloaderState} view={props.view} shortFilms={props.shortFilms} onSearch={props.onSearch} movies={props.movies}/>
             
            {props.loadState ? <MoviesCardList isSubmitted={props.submSt} saved={props.saved} user={props.user} onDelClick={props.onDelClick} onSaveClick={props.onSaveClick} view={props.view}/> : <Preloader/>}
            
            <More/>
            <Footer />
        </>
    )
}

export default Movies;