import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import React from 'react';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import { CurrentUserContext } from '../../contexts/currentUserContext';
import Auth from '../../utils/authApi';
import MoviesApi from '../../utils/moviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import NotFoundPage from '../404/404';
import Popup from '../Popup/Popup';
function App() {
    const history = useHistory();
    const [currentUser, setCurrentUserInfo] = React.useState({});
    const [moviesBase, setMoviesBase] = React.useState([]);
    const [loggedIn, isLoggedIn] = React.useState(false);
    const [searchResult, setSearchResult] = React.useState([]);
    const [searchSavedResult, setSearchSavedResult] = React.useState([]);
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [timesPressed, setTimesPressed] = React.useState(0);
    const [isSuccessful, setIsSuccessful] = React.useState(null);
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();
    const MainApi = new Auth({
        baseUrl: 'https://api.diplomashvayka.nomoredomains.club',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    });
    const tokenCheck = React.useCallback(
        () => {
            const token = localStorage.getItem('token');
            if (token) {
                MainApi.tokenCheck(token)
                    .then((data) => {
                        if (data) {
                            console.log(data.email);          
                            handleLogin();          
                            history.push(location.pathname);
                        }
                    }).catch(err => alert(err))
            }
        }, []
    )
    React.useEffect(() => {
        const movies = localStorage.getItem('movies');
        const searchRes = localStorage.getItem('searchRes');
        const token = localStorage.getItem('token');
        if (token) {
            console.log('check')
            tokenCheck() 

            MainApi.getUserInfo()
                .then(data => {
                    setCurrentUserInfo(data)
                })
                .catch(err => alert(err));
            
            MainApi.getSavedMovies()
                .then((data) => {
                    console.log(data)
                    setSavedMovies(data)
                }).catch(err => alert(err))
        }
        if (!movies) {
            MoviesApi.getAllMovies()
                .then((data) => {
                    setMoviesBase(data)
                    localStorage.setItem('movies', JSON.stringify(data))
                })
        } else {
            setMoviesBase(JSON.parse(movies))
        }
        if (searchRes) {
            setSearchResult(JSON.parse(searchRes))
        }
    }, [tokenCheck]);

    const handleSearch = (arr, input) => {
        setSearchResult(() => {
            let searchRes
            searchRes = moviesBase.filter(movie => Object.values(movie).some(value => typeof value === 'string' && value.toLowerCase().includes(input.toLowerCase())));
            localStorage.setItem('searchRes', JSON.stringify(searchRes))
            return searchRes
        })
        console.log(searchResult)
        setTimesPressed(0)
    }

    const handleSavedSearch = (arr, input) => {
        setSavedMovies(() => {
            return savedMovies.filter(movie => Object.values(movie).some(value => typeof value === 'string' && value.toLowerCase().includes(input.toLowerCase())));
        })
        console.log(savedMovies)
    }

    const handleShortFilmsSearch = (arr) => {
        setSearchResult(() => {
            let searchRes
            searchRes = moviesBase.filter(i => !(i.duration > 50));
            localStorage.setItem('searchRes', JSON.stringify(searchRes))
            return searchRes
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
                setCurrentUserInfo(data)
                onLogin({ email, password })
                history.push('/movies');
            }).catch((err) => {
                alert(err)
            })
    }

    function onLogin({ email, password }) {
        MainApi.onLogin({ email, password })
            .then((data) => {
                const movies = localStorage.getItem('movies');
                if (!movies) {
                    MoviesApi.getAllMovies()
                        .then((data) => {
                            setMoviesBase(data)
                            localStorage.setItem('movies', JSON.stringify(data))
                        })
                } else {
                    setMoviesBase(JSON.parse(movies))
                }
                localStorage.setItem('token', data.token)
                setCurrentUserInfo(data.user)
                handleLogin();
                history.push('/movies');
            }).catch(err => alert(err))
    }
    function handleLogin() {
        isLoggedIn(true);
    };



    function onProfileUpdate(data) {
        MainApi.updateUserInfo(JSON.stringify(data))
            .then((data) => {
                setCurrentUserInfo(data)
                setIsSuccessful(true)
                setIsOpen(true)
            }).catch(err => {
                setIsOpen(true)
                setIsSuccessful(false)
                alert(err)
            })

    }
    const setPopupVisibility = () => {
        setIsOpen(false);
    }
    function onSaveClick(data) {
        MainApi.changeMovieStatus(JSON.stringify(data))
            .then(data => {

                savedMovies.push(data)
            }

            ).catch(err => alert(err))
    }
    function onDelClick(_id) {
        MainApi.removeLike(_id)
            .then(d =>
                setSavedMovies(savedMovies.filter((el) => Object.values(el).every((elem) => elem !== _id)))
            )
            .catch(err => alert(err))

    }
    function onSignOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('checkbxSt');
        localStorage.removeItem('searchRes');
        localStorage.removeItem('movies');



        history.push('/signin');
        isLoggedIn(false);
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
        <CurrentUserContext.Provider value={currentUser} >
            <div className='app'>
                <Switch history={history}>
                    <ProtectedRoute setCounter={setTimesPressed} counter={timesPressed} submSt={isSubmitted} subm={onSearchSubmit} preloaderState={onLoadSetTimeout}
                        loadState={isLoading} user={currentUser} movies={moviesBase} onSaveClick={onSaveClick} saved={savedMovies} onDelClick={onDelClick}
                        shortFilms={handleShortFilmsSearch} loggedIn={loggedIn} onSearch={handleSearch} view={searchResult} component={Movies} path='/movies' >

                    </ProtectedRoute>
                    <ProtectedRoute submSt={isSubmitted} subm={onSearchSubmit} user={currentUser}
                        onSearch={handleSavedSearch} preloaderState={onLoadSetTimeout} loadState={isLoading} loggedIn={loggedIn} shortFilms={handleSavedShortFilmsSearch}
                        onDelClick={onDelClick} view={savedMovies} movies={savedMovies} component={SavedMovies} path='/saved_movies'>

                    </ProtectedRoute>
                    <ProtectedRoute isSuccessful={isSuccessful} onSignOut={onSignOut} loggedIn={loggedIn}
                        user={currentUser} onUpdate={onProfileUpdate} component={Profile} path='/profile'>

                    </ProtectedRoute>
                    <Route exact path='/'>
                        <Main isLoggedIn={loggedIn} />
                    </Route>
                    <Route path='/signin'>
                        <Login onLogin={onLogin} />
                    </Route>
                    <Route path='/signup'>
                        <Register onRegister={onRegister} />
                    </Route>
                    <Route path='*'>
                        <NotFoundPage isLoggedIn={loggedIn} />
                    </Route>

                </Switch>
                <Popup isSuccessful={isSuccessful} isOpen={isOpen} setIsOpen={setPopupVisibility} />
            </div>
        </CurrentUserContext.Provider>
    )
}
export default App;