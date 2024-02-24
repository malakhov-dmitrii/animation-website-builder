import { ReactElement, useState } from 'react'

type TSelectComponentProps = {
    children: ReactElement<{ id: string }>
    style: { [key: string]: string }
}

function SelectComponent({ children, style }: TSelectComponentProps) {
    const [isActive, setIsActive] = useState(false)

    const handleActiveClick = () => {
        setIsActive(!isActive)
    }

    return (
        <div
            id={`${children?.props.id}-userId`}
            className='select-component'
            style={style}
            onClick={handleActiveClick}
        >
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
