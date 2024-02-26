import { useDispatch } from '../../hooks/hooks'
import { toggleReplay } from '../../services/actions/settingsActions'

type TCheckboxProps = {
    checked: boolean
}

function Checkbox({ checked }: TCheckboxProps) {
    const dispatch = useDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked
        dispatch(toggleReplay(isChecked))
    }

    return (
        <div className='checkbox'>
            <span className='checkbox__name'>Replay</span>
            <div className='checkbox__container'>
                <label className='switch'>
                    <input type='checkbox' defaultChecked={checked} onChange={handleChange} />
                    <span className='checkbox-slider'></span>
                </label>
            </div>
        </div>
    )
}

export default Checkbox
