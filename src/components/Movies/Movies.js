import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import More from "../More/More";
function Movies() {
    return (
        <>
            <Header />
            <SearchForm />
            <MoviesCardList />
            <More/>
            <Footer />
        </>
    )
}

export default Movies;