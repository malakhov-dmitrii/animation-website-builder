import Checkbox from '../Checkbox/Checkbox'
import Dropdown from '../Dropdown/Dropdown'
import Slider from '../Slider/Slider'
import { useSelector } from '../../hooks/hooks'

function LayoutSettings() {
    const settingsArray = useSelector(store => store.settings)

    return (
        <>
            {settingsArray.map((item, index) => (
                <section className='layout-settings' key={index}>
                    <Slider sliderName={'X'} fromCenter={true} value={item.settings.x} />
                    <Slider sliderName={'Y'} fromCenter={true} value={item.settings.y} />
                    <Slider
                        sliderName={'Opacity'}
                        fromCenter={false}
                        value={item.settings.opacity}
                    />
                    <Slider sliderName={'Scale'} fromCenter={true} value={item.settings.scale} />
                    <Slider sliderName={'Blur'} fromCenter={false} value={item.settings.blur} />
                    <Slider sliderName={'Speed'} fromCenter={false} value={item.settings.speed} />
                    <Slider sliderName={'Delay'} fromCenter={false} value={item.settings.delay} />
                    <Dropdown />
                    <Checkbox checked={item.settings.replay} />
                </section>
            ))}
        </>
    )
}

export default LayoutSettings
