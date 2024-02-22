import { useState } from 'react'

const Dropdown = () => {
    const [selectedValue, setSelectedValue] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(e.target.value)
    }

    return (
        <div className='dropdown'>
            <label className='dropdown__name' htmlFor='timingFunction'>
                Easing
            </label>
            <select
                className='dropdown__select'
                id='timingFunction'
                value={selectedValue}
                onChange={handleChange}
            >
                <option className='dropdown__option' value='Ease'>
                    Ease
                </option>
                <option className='dropdown__option' value='linear'>
                    Linear
                </option>
                <option className='dropdown__option' value='ease-in'>
                    Ease In
                </option>
                <option className='dropdown__option' value='ease-out'>
                    Ease Out
                </option>
                <option className='dropdown__option' value='ease-in-out'>
                    Ease In Out
                </option>
                <option className='dropdown__option' value='steps(6, end)'>
                    Steps(6, end)
                </option>
                <option className='dropdown__option' value='cubic-bezier(.29, 1.01, 1, -0.68)'>
                    Cubic Bezier (0.29, 1.01, 1, -0.68)
                </option>
            </select>
        </div>
    )
}

export default Dropdown
