import Picture from '../../../images/Rectangle_53-min.jpg'

function Image() {
    return (
        <img
            className='ui-image'
            src={Picture}
            alt='Изображение. Монитор с интерфейсом программы по работе с изображениями'
        />
    )
}

export default Image
