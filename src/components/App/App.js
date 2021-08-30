import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import React from 'react';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import { CurrentUserContext } from '../../contexts/currentUserContext';
import MainApi from '../../utils/authApi';
import MoviesApi from '../../utils/moviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import NotFoundPage from '../404/404';
function App() {
    const history = useHistory();
    const [currentUser, setCurrentUserInfo] = React.useState({});
    const [moviesBase, setMoviesBase] = React.useState([]);
    const [email, emailInput] = React.useState('');
    const [name, nameInput] = React.useState('');
    const [loggedIn, isLoggedIn] = React.useState(false);
    const [searchResult, setSearchResult] = React.useState([]);
    const [searchSavedResult, setSearchSavedResult] = React.useState([]);
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    React.useEffect(() => {

        MainApi.getUserInfo()
            .then(data => {
                setCurrentUserInfo(data)
            })
            .catch(err => alert(err));
        MoviesApi.getAllMovies()
            .then((data) => {
                setMoviesBase(data)
                console.log(moviesBase)
            })
        MainApi.getSavedMovies()
            .then((data) => {
                console.log(data)
                setSavedMovies(data)
            })
        tokenCheck();
    }, []);

    const handleSearch = (arr, input) => {
        setSearchResult(() => {
            return moviesBase.filter(movie => Object.values(movie).some(value => typeof value === 'string' && value.toLowerCase().includes(input.toLowerCase())));
        })
        console.log(searchResult)
    }

    const handleSavedSearch = (arr, input) => {
        setSavedMovies(() => {
            return savedMovies.filter(movie => Object.values(movie).some(value => typeof value === 'string' && value.toLowerCase().includes(input.toLowerCase())));
        })
        console.log(savedMovies)
    }

    const handleShortFilmsSearch = (arr) => {
        setSearchResult(() => {
            return arr.filter(i => !(i.duration > 50));
        }
        )

    }
    const handleSavedShortFilmsSearch = (arr) => {
        setSavedMovies(() => {
            return arr.filter(i => !(i.duration > 50));
        }
        )

    }
    function onRegister({ email, password, name }) {
        MainApi.onRegister({ email, password, name })
            .then((data) => {

                history.push('/signin')
            }).catch((err) => {
                alert(err)
            })
    }

    function onLogin({ email, password }) {
        MainApi.onLogin({ email, password })
            .then((data) => {
                localStorage.setItem('token', data.token)

                handleLogin();
                history.push('/movies');
            }).catch(err => alert(err))
    }
    function handleLogin() {
        isLoggedIn(true);
    };

    function tokenCheck() {
        const token = localStorage.getItem('token');
        if (token) {
            MainApi.tokenCheck(token)
                .then((data) => {
                    if (data) {
                        console.log(data.email);
                        console.log(loggedIn);
                        handleLogin();
                        history.push('/movies')
                    }
                }).catch(err => alert(111))
        }
    }

    function onProfileUpdate(data) {
        MainApi.updateUserInfo(JSON.stringify(data))
            .then((data) => {
                emailInput(data.email);
                nameInput(data.name);
            })
    }

    function onSaveClick(data) {
        MainApi.changeMovieStatus(JSON.stringify(data))
            .then(data => {

                savedMovies.push(data)
            }

            )
    }
    function onDelClick(_id) {
        MainApi.removeLike(_id)


    }
    function onSignOut() {
        localStorage.removeItem('token');
        history.push('/signin');
    }

    const onLoad = () => {
        setIsLoading(isLoading)
    }

    const onLoadSetTimeout = () => {
        setIsLoading(!isLoading)
        setTimeout(onLoad, 2000)
    }
    const onSearchSubmit = () => {
        setIsSubmitted(true)
    }
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='app'>
                <Switch>
                    <ProtectedRoute submSt={isSubmitted} subm={onSearchSubmit} preloaderState={onLoadSetTimeout} loadState={isLoading} user={currentUser}
                    movies={moviesBase} onSaveClick={onSaveClick} saved={savedMovies} onDelClick={onDelClick}
                    shortFilms={handleShortFilmsSearch} loggedIn={loggedIn} onSearch={handleSearch} view={searchResult} component={Movies} path='/movies' >

                    </ProtectedRoute>
                    <ProtectedRoute submSt={isSubmitted} subm={onSearchSubmit} user={currentUser} onSearch={handleSavedSearch} preloaderState={onLoadSetTimeout} loadState={isLoading} loggedIn={loggedIn} shortFilms={handleSavedShortFilmsSearch}
                    onDelClick={onDelClick} view={savedMovies} movies={savedMovies} component={SavedMovies} path='/saved_movies'>

                    </ProtectedRoute>
                    <ProtectedRoute onSignOut={onSignOut} loggedIn={loggedIn} user={currentUser} onUpdate={onProfileUpdate} component={Profile} path='/profile'>

                    </ProtectedRoute>
                    <Route exact path='/'>
                        <Main />
                    </Route>
                    <Route path='/signin'>
                        <Login onLogin={onLogin} />
                    </Route>
                    <Route path='/signup'>
                        <Register onRegister={onRegister} />
                    </Route>
                    <Route path='*'>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </div>
        </CurrentUserContext.Provider>
    )
}
export default App;