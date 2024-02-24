import Picture from '../../../images/Rectangle_53-min.jpg'
import SelectComponent from '../../SelectComponent/SelectComponent'

function Image() {
    return (
        <SelectComponent style={{ top: '73px', left: '504px' }}>
            <img
                className='ui-image'
                src={Picture}
                alt='Изображение. Монитор с интерфейсом программы по работе с изображениями'
            />
        </SelectComponent>
    )
}

export default Image
