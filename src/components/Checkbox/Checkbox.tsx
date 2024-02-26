type TCheckboxProps = {
    checked: boolean
}

function Checkbox({ checked }: TCheckboxProps) {
    return (
        <div className='checkbox'>
            <span className='checkbox__name'>Replay</span>
            <div className='checkbox__container'>
                <label className='switch'>
                    <input type='checkbox' defaultChecked={checked} />
                    <span className='checkbox-slider'></span>
                </label>
            </div>
        </div>
    )
}

export default Checkbox
