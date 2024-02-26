import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ISelectedComponentState {
    cId: string
}

type TUpdateSelectedComponentAction = PayloadAction<string>

const initialState: ISelectedComponentState = {
    cId: '',
}

const selectedComponentSlice = createSlice({
    name: 'selectedComponent',
    initialState,
    reducers: {
        updateCurrentComponentId: (state, action: TUpdateSelectedComponentAction) => {
            state.cId = action.payload
        },
    },
})

export default selectedComponentSlice.reducer
