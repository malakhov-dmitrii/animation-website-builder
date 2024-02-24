import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ISettingsState {
    settings: {
        x: number
        y: number
        opacity: number
        scale: number
        blur: number
        speed: number
        delay: number
        easing: string
        replay: boolean
    }
}

interface IUpdateSettingsAction {
    x?: number
    y?: number
    opacity?: number
    scale?: number
    blur?: number
    speed?: number
    delay?: number
    easing?: string
    replay?: boolean
}

const initialState: ISettingsState = {
    settings: {
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0,
        blur: 0,
        speed: 0,
        delay: 0,
        easing: '',
        replay: false,
    },
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        updateSettings: (state, action: PayloadAction<IUpdateSettingsAction>) => {
            state.settings = { ...state.settings, ...action.payload }
        },
    },
})

export default settingsSlice.reducer
