import Checkbox from '../Checkbox/Checkbox'
import Slider from '../Slider/Slider'

function LayoutSettings() {
    return (
        <section className='layout-settings'>
            <Slider sliderName={'X'} fromCenter={true} />
            <Slider sliderName={'Y'} fromCenter={true} />
            <Slider sliderName={'Opacity'} fromCenter={false} />
            <Slider sliderName={'Scale'} fromCenter={true} />
            <Slider sliderName={'Blur'} fromCenter={false} />
            <Slider sliderName={'Speed'} fromCenter={false} />
            <Slider sliderName={'Delay'} fromCenter={false} />
            <Checkbox />
        </section>
    )
}

export default LayoutSettings
