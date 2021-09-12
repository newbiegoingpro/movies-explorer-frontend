import {useEffect, useState} from 'react';
function SearchForm(props) {
    const [search, searchInput] = useState('');
    const [isChecked, setCheckbox] = useState(false);
    useEffect(() => {
        const state = localStorage.getItem('checkbxSt');
        if(state){
            setCheckbox(JSON.parse(state))
        }
    }, [])
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
        setCheckbox(!isChecked)
        if(isChecked){
            localStorage.setItem('checkbxSt', JSON.stringify(false))
            props.onSearch(props.movies, search);
        } else{
            localStorage.setItem('checkbxSt', JSON.stringify(true))
            props.shortFilms(props.view)
        }   
    }

    return (
        <div className='searchform__box'>
            <form onSubmit={handleSubmit} className='searchform'>
                <input onChange={handleChange} required placeholder='Фильм' type='search' className='searchform__input'>
                </input>
                <button disabled={search.length === 0} className={`${search.length === 0 ? 'searchform__button_disabled' : 'searchform__button'}`} onClick={props.preloaderState}></button>
            </form>


            <input className='searchform__checkbox' id='shortFilm' checked={isChecked} type='checkbox' onClick={shortFilmsFilter} />
            <label className='searchform__label' htmlFor="shortFilm">Короткометражки</label>
        </div>
    )
}

export default SearchForm;