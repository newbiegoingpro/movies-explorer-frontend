import MoviesCard from "../MoviesCard/MoviesCard";
import { Route } from "react-router";
import { useEffect, useState } from "react";

function MoviesCardList(props) {


    const [chunk, setChunkSize] = useState([]);
    const [rows, setRows] = useState(0);
    const [columns, setColumns] = useState(0);
    const [isVisible, setVisibility] = useState(false)
    const [width, measureWidth] = useState({ width: window.innerWidth });
    useEffect(() => {
        if (props.view.length !== 0) {
            setVisibility(true)
        }

        if (width.width > 1280) {
            setRows(1);
            setColumns(4);
            setChunkSize(props.view.slice(props.counter, props.counter + 4));
        }
        if (width.width <= 1280) {
            setRows(2);
            setColumns(3);
            setChunkSize(props.view.slice(props.counter, props.counter + 3));
        }
        if (width.width <= 768) {
            setRows(4);
            setColumns(2);
            setChunkSize(props.view.slice(props.counter, props.counter + 2));
        }
        if (width.width < 635) {
            setRows(5);
            setColumns(1);
            setChunkSize(props.view.slice(props.counter, props.counter + 5));
        }

        window.addEventListener('resize', checkWindowsWidth)
        return () => {
            window.removeEventListener('resize', checkWindowsWidth)
        }
    }, [props, props.counter, props.view, width]
    )

    function checkWindowsWidth() {
        measureWidth({ width: window.innerWidth })
    }
    const handleClick = () => {
        console.log(props.view)
        if (width.width > 1280) {
            if (rows * columns < props.view.length) {
                setChunkSize(chunk.concat(props.view.slice(rows * columns, (rows * columns + 4))));
                setRows(rows + 1)
            } else {
                setVisibility(false)
                setChunkSize(props.view)
            }
        } else if (width.width <= 1280 && width.width > 768) {
            if (rows * columns < props.view.length) {
                setChunkSize(chunk.concat(props.view.slice(rows * columns, (rows * columns + 3))));
                setRows(rows + 1)
            } else {
                setVisibility(false)
                setChunkSize(props.view)
            }
        } else if (width.width <= 768 && width.width > 425) {
            if (rows * columns < props.view.length) {
                setChunkSize(chunk.concat(props.view.slice(rows * columns, (rows * columns + 2))));
                setRows(rows + 1)
            } else {
                setVisibility(false)
                setChunkSize(props.view)
            }
        } else if (width.width <= 425) {
            if (rows * columns < props.view.length) {
                setChunkSize(chunk.concat(props.view.slice(rows * columns, (rows * columns + 1))));
                setRows(rows + 1)
            } else {
                setVisibility(false)
                setChunkSize(props.view)
            }

        }
    }


    const baseUrl = 'https://api.nomoreparties.co';
    const renderFilms = () => {

        return ((props.isSubmitted && props.view.length === 0) ? <p className='movies__empty'>Ничего не найдено...</p>
            : chunk.map((movie) => (<MoviesCard saved={props.saved} user={props.user} onDelClick={props.onDelClick} onSaveClick={props.onSaveClick}
                movie={movie} key={movie.id} name={movie.nameRU} duration={movie.duration} trailerLink={movie.trailerLink} link={`${baseUrl + movie.image.url}`} />)))

    }
    const renderSavedFilms = () => {

        return ((props.isSubmitted && props.view.length === 0) ? <p className='movies__empty'>Ничего не найдено...</p> :
            props.view.map((movie) => (<MoviesCard user={props.user} saved={props.view} view={props.view} onDelClick={props.onDelClick}
                movie={movie} key={movie._id} name={movie.nameRU} duration={movie.duration} trailerLink={movie.trailer} link={movie.image} />))
        )
    }

    return (
        <>
            <Route exact path='/movies'>
                <section className='movies'>
                    {renderFilms()}
                </section>
                <div className={`${isVisible ? 'more__box' : 'more__box_null'}`}>
                    <button onClick={handleClick} className='more__btn'>Ещё</button>
                </div>
            </Route>
            <Route path='/saved_movies'>
                <section className='movies'>
                    {renderSavedFilms()}
                </section>
            </Route>

        </>

    )
}

export default MoviesCardList;