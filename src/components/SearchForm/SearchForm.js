import {useState} from 'react';
function SearchForm(props) {
    const [search, searchInput] = useState('');
    
    const handleChange = (e) => {
        searchInput(e.target.value);
    }
    const handleSubmit = (e) => {
        console.log(props.movies)
        e.preventDefault();
        //const filtered = props.movies.filter(function(v) {
       //    return Object.values(v).some(function(i) {
        //       console.log(i)
        //      return i.toLowerCase().indexOf(search) > -1;
        //    })
       //   })
        props.onSearch(search);
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
                <button className='searchform__button' ></button>
            </form>


            <input className='searchform__checkbox' id='shortFilm' type='checkbox' onClick={shortFilmsFilter} />
            <label className='searchform__label' htmlFor="shortFilm">Короткометражки</label>
        </div>
    )
}

export default SearchForm;