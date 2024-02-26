import Checkbox from '../Checkbox/Checkbox'
import Dropdown from '../Dropdown/Dropdown'
import Slider from '../Slider/Slider'
import { useSelector } from '../../hooks/hooks'

function LayoutSettings() {
    const settings = useSelector(store => store.settings)

    return (
        <section className='layout-settings'>
            <Slider sliderName={'X'} fromCenter={true} settings={settings} />
            <Slider sliderName={'Y'} fromCenter={true} settings={settings} />
            <Slider sliderName={'Opacity'} fromCenter={false} settings={settings} />
            <Slider sliderName={'Scale'} fromCenter={true} settings={settings} />
            <Slider sliderName={'Blur'} fromCenter={false} settings={settings} />
            <Slider sliderName={'Speed'} fromCenter={false} settings={settings} />
            <Slider sliderName={'Delay'} fromCenter={false} settings={settings} />
            <Dropdown />
            <Checkbox />
        </section>
    )
}

export default LayoutSettings
