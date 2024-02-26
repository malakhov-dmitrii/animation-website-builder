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
                    <Slider
                        sliderName={'X'}
                        fromCenter={true}
                        value={item.settings.x}
                        id={item.componentId}
                    />
                    <Slider
                        sliderName={'Y'}
                        fromCenter={true}
                        value={item.settings.y}
                        id={item.componentId}
                    />
                    <Slider
                        sliderName={'Opacity'}
                        fromCenter={false}
                        value={item.settings.opacity}
                        id={item.componentId}
                    />
                    <Slider
                        sliderName={'Scale'}
                        fromCenter={true}
                        value={item.settings.scale}
                        id={item.componentId}
                    />
                    <Slider
                        sliderName={'Blur'}
                        fromCenter={false}
                        value={item.settings.blur}
                        id={item.componentId}
                    />
                    <Slider
                        sliderName={'Speed'}
                        fromCenter={false}
                        value={item.settings.speed}
                        id={item.componentId}
                    />
                    <Slider
                        sliderName={'Delay'}
                        fromCenter={false}
                        value={item.settings.delay}
                        id={item.componentId}
                    />
                    <Dropdown />
                    <Checkbox checked={item.settings.replay} />
                </section>
            ))}
        </>
    )
}

export default LayoutSettings
