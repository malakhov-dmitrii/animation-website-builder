import { ReactElement, useEffect, useState } from 'react'
import { useDispatch, useSelector } from '../../hooks/hooks'
import { updateCurrentComponentId } from '../../services/actions/selectedComponent'

type TSelectComponentProps = {
    children: ReactElement<{ id: string }>
    style: { [key: string]: string }
}

function SelectComponent({ children, style }: TSelectComponentProps) {
    const id = `${children?.props.id}-userId`
    const [isActive, setIsActive] = useState(false)
    const dispatch = useDispatch()

    const cId = useSelector(store => store.selectedComponent.cId)

    const handleActiveClick = () => {
        dispatch(updateCurrentComponentId(id))
    }

    useEffect(() => {
        if (id === cId) return setIsActive(true)
        return setIsActive(false)
    }, [cId])

    return (
        <div id={id} className='select-component' style={style} onClick={handleActiveClick}>
            <div
                className={`select-component__container ${
                    isActive
                        ? 'select-component__left_type_active'
                        : 'select-component__left_type_inactive'
                }`}
            >
                <div
                    className={`select-component__container ${
                        isActive ? 'select-component__right_type_active' : ''
                    }`}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SelectComponent
