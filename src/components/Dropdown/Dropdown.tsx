import { useState } from 'react'
import { useDispatch, useSelector } from '../../hooks/hooks'
import { updateEasing } from '../../services/settingsSlice'

const Dropdown = () => {
    const [selectedValue, setSelectedValue] = useState('')
    const dispatch = useDispatch()
    const id = useSelector(store => store.selectedComponent.cId)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value
        setSelectedValue(newValue)
        dispatch(updateEasing({ id, newValue }))
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
                <option className='dropdown__option' value='ease'>
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
