import {useState} from 'react';
function SearchForm(props) {
    const [search, searchInput] = useState('');
    const [isChecked, setCheckbox] = useState(false);
    const handleChange = (e) => {
        searchInput(e.target.value);
    }
    const handleSubmit = (e) => {
        console.log(props.movies)
        e.preventDefault();
        props.onSearch(props.movies, search);
        props.subm();
        console.log(search);
        
    }
    
    const shortFilmsFilter = () => {
        props.shortFilms(props.view)
    }

    return (
        <div className='searchform__box'>
            <form onSubmit={handleSubmit} className='searchform'>
                <input onChange={handleChange} required placeholder='Фильм' type='search' className='searchform__input'>
                </input>
                <button className='searchform__button' onClick={props.preloaderState}></button>
            </form>


            <input className='searchform__checkbox' id='shortFilm' type='checkbox' onClick={shortFilmsFilter} />
            <label className='searchform__label' htmlFor="shortFilm">Короткометражки</label>
        </div>
    )
}

export default SearchForm;