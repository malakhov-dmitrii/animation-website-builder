import { useState } from 'react'

function Checkbox() {
    const [isChecked, setIsChecked] = useState(false)

    const handleChangeCheckboxStatus = () => {
        setIsChecked(prevState => !prevState)
    }

    return (
        <div className='checkbox'>
            <span className='checkbox__name'>Replay</span>
            <div className='checkbox__container'>
                <label className='switch'>
                    <input
                        type='checkbox'
                        onChange={handleChangeCheckboxStatus}
                        defaultChecked={false}
                    />
                    <span className='checkbox-slider'></span>
                </label>
            </div>
        </div>
    )
}

export default Checkbox
