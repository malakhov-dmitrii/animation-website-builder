import Checkbox from '../Checkbox/Checkbox'
import Dropdown from '../Dropdown/Dropdown'
import Slider from '../Slider/Slider'
import { useSelector } from '../../hooks/hooks'

function LayoutSettings() {
    const settings = useSelector(store => store.settings.settings)

    return (
        <section className='layout-settings'>
            <Slider sliderName={'X'} fromCenter={true} value={settings.x} />
            <Slider sliderName={'Y'} fromCenter={true} value={settings.y} />
            <Slider sliderName={'Opacity'} fromCenter={false} value={settings.opacity} />
            <Slider sliderName={'Scale'} fromCenter={true} value={settings.scale} />
            <Slider sliderName={'Blur'} fromCenter={false} value={settings.blur} />
            <Slider sliderName={'Speed'} fromCenter={false} value={settings.speed} />
            <Slider sliderName={'Delay'} fromCenter={false} value={settings.delay} />
            <Dropdown />
            <Checkbox checked={settings.replay} />
        </section>
    )
}

export default LayoutSettings
