import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ISettingsState {
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

export interface IUpdateSettingsAction {
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
        opacity: -100,
        scale: 0,
        blur: -100,
        speed: -100,
        delay: -100,
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
        toggleReplay: (state, action: PayloadAction<boolean>) => {
            state.settings.replay = action.payload
        },
        updateEasing: (state, action: PayloadAction<string>) => {
            state.settings.easing = action.payload
        },
    },
})

export default settingsSlice.reducer
