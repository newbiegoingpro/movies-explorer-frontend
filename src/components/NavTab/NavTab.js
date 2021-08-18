function NavTab(){
    return(
        <nav className='navtab'>
            
            <button className='navtab__btn'><a className='navtab__link' href='#project'>О проекте</a></button>
            <button className='navtab__btn'><a className='navtab__link' href='#techs'>Технологии</a></button>
            <button className='navtab__btn'><a className='navtab__link' href='#student'>Студент</a></button>
            
        </nav>
    )
}
export default NavTab;