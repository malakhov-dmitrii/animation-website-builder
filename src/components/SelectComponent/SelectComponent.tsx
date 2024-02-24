import { ReactNode } from 'react'

type TSelectComponentProps = {
    children: ReactNode
    style: { [key: string]: string }
}

function SelectComponent({ children, style }: TSelectComponentProps) {
    return (
        <div className='select-component' style={style}>
            <div className='select-component__container select-component__left_type_active'>
                <div className='select-component__container select-component__right_type_active'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SelectComponent
