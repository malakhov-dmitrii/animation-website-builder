import { useState } from 'react'

type TSliderProps = {
    sliderName: string
}

function Slider({ sliderName }: TSliderProps) {
    const [value, setValue] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(e.target.value))
    }

    return (
        <div className='slider'>
            <span className='slider__name'>{sliderName}</span>
            <div className='slider__conatiner'>
                <input
                    className='slider__input'
                    type='range'
                    min={-100}
                    max={100}
                    value={value}
                    onChange={handleChange}
                />
                <div className='slider__track'></div>
                <div
                    className='slider__track-progress'
                    style={{
                        width: `${value > 0 ? value / 2.5 : (value / 2.5) * -1}%`,
                        transformOrigin: `${value < 0 ? 'left center' : 'none'}`,
                        transform: `${value < 0 ? 'rotate(180deg)' : 'none'}`,
                    }}
                />
                <div
                    className='slider__thumb'
                    style={{
                        left: `${((value + 100) / 220) * 100}%`,
                    }}
                />
            </div>
            <output className='slider__output'>{value}</output>
        </div>
    )
}

export default Slider
