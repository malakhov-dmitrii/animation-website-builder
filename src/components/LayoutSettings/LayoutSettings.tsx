import Slider from '../Slider/Slider'

function LayoutSettings() {
    return (
        <section className='layout-settings'>
            <Slider sliderName={'X'} />
            <Slider sliderName={'Y'} />
            <Slider sliderName={'Opacity'} />
            <Slider sliderName={'Scale'} />
            <Slider sliderName={'Blur'} />
            <Slider sliderName={'Speed'} />
            <Slider sliderName={'Delay'} />
        </section>
    )
}

export default LayoutSettings
