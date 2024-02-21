import { useState } from 'react'

type TSliderProps = {
    sliderName: string
    fromCenter: boolean
}

function Slider({ sliderName, fromCenter }: TSliderProps) {
    const minValue = -100
    const maxValue = 100
    const [value, setValue] = useState(fromCenter ? 0 : minValue)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(e.target.value))
    }

    const roundValue = (
        value: number,
        minValue: number,
        maxValue: number,
        outputMin: number,
        outputMax: number
    ) => {
        return ((value - minValue) * (outputMax - outputMin)) / (maxValue - minValue) + outputMin
    }

    const renderValue = (value: number, sliderName: string) => {
        switch (sliderName) {
            case 'Opacity':
                return `${roundValue(value, minValue, maxValue, 0, 100).toFixed(0.1)}%`
            case 'Scale':
                return roundValue(value, minValue, maxValue, 0.1, 2.0).toFixed(1)
            case 'Blur':
                return roundValue(value, minValue, maxValue, 0, 10).toFixed(0.1)
            case 'Speed':
                return `${roundValue(value, minValue, maxValue, 0, 5)
                    .toFixed(1)
                    .replace(/^0+/, '')}s`
            case 'Delay':
                return `${roundValue(value, minValue, maxValue, 0, 10)
                    .toFixed(1)
                    .replace(/^0+/, '')}s`
            default:
                return value
        }
    }

    return (
        <div className='slider'>
            <span className='slider__name'>{sliderName}</span>
            <div className='slider__conatiner'>
                <input
                    className='slider__input'
                    type='range'
                    min={minValue}
                    max={maxValue}
                    value={value}
                    onChange={handleChange}
                />
                <div className='slider__track'></div>
                {fromCenter ? (
                    <>
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
                    </>
                ) : (
                    <>
                        <div
                            className='slider__track-progress slider__track-progress_type_left'
                            style={{
                                width: `${
                                    (Math.max(0, value - minValue) / (maxValue - minValue)) * 100
                                }%`,
                            }}
                        />
                        <div
                            className='slider__thumb'
                            style={{
                                left: `${((value + 100) / 220) * 100}%`,
                            }}
                        />
                    </>
                )}
            </div>
            <output className='slider__output'>{renderValue(value, sliderName)}</output>
        </div>
    )
}

export default Slider
