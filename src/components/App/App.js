import {  Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import React from 'react';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
function App() {
    return(
        <div className='app'>
            <Switch>
                <Route exact path='/'>
                    <Main/>
                </Route>
                <Route path='/signin'>
                    <Login/>
                </Route>
                <Route path='/signup'>
                    <Register/>
                </Route>
                <Route path='/movies'>
                    <Movies/>
                </Route>
                <Route path='/saved_movies'>
                    <SavedMovies/>
                </Route>
                <Route path='/profile'>
                    <Profile/>
                </Route>
            </Switch>
           

        
        </div>
    )
}
export default App;