import Logo from '../../images/Logo.svg'

function Header() {
    return (
        <header className='header'>
            <img className='header__img' src={Logo} alt='Изображение. Логотип компании' />
            <button className='header__button'>Button</button>
        </header>
    )
}

export default Header
