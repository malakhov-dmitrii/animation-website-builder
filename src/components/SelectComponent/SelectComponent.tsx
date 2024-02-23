import { ReactNode } from 'react'

type TSelectComponentProps = {
    children: ReactNode
}

function SelectComponent({ children }: TSelectComponentProps) {
    return (
        <div className='select-component select-component__left_type_active'>
            <div className='select-component select-component__right_type_active'>{children}</div>
        </div>
    )
}

export default SelectComponent
