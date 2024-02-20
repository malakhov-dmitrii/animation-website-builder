import Image from '../../images/Rectangle_53-min.jpg'

function Layout() {
    return (
        <section className='layout'>
            <h1 className='layout__title'>Animation Settings</h1>
            <p className='layout__description'>
                The user should have the option to select any element on the page and set up its
                animation using the controls in the right panel. A dotted line will show the
                element's position and state before the animation begins, giving the user a clear
                idea of how the animation will appear. The preview button on the top panel will open
                the result in a new tab.
            </p>
            <button className='layout__button'>Button</button>
            <img
                className='layout__img'
                src={Image}
                alt='Изображение. Монитор с интерфейсом программы по работе с изображениями'
            />
        </section>
    )
}

export default Layout
