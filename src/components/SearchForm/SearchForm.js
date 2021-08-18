function SearchForm() {
    return (
        <div className='searchform__box'>
            <form className='searchform'>
                <input placeholder='Фильм' type='search' className='searchform__input'>
                </input>
                <button className='searchform__button' ></button>
            </form>


            <input className='searchform__checkbox' id='shortFilm' type='checkbox' />
            <label className='searchform__label' htmlFor="shortFilm">Короткометражки</label>
        </div>
    )
}

export default SearchForm;