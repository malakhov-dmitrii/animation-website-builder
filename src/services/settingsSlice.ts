import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ISettingsState {
    componentId: string
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

const initialState: ISettingsState[] = [
    {
        componentId: '1-userId',
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
    },
]

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        updateSettings: (
            state,
            action: PayloadAction<{ id: string; settings: IUpdateSettingsAction }>
        ) => {
            const { id, settings } = action.payload
            const index = state.findIndex(item => item.componentId === id)
            if (index !== -1) {
                state[index].settings = { ...state[index].settings, ...settings }
            }
        },
        toggleReplay: (state, action: PayloadAction<{ id: string; isChecked: boolean }>) => {
            const { id, isChecked } = action.payload
            const index = state.findIndex(item => item.componentId === id)
            if (index !== -1) {
                state[index].settings.replay = isChecked
            }
        },
        updateEasing: (state, action: PayloadAction<{ id: string; newValue: string }>) => {
            const { id, newValue } = action.payload
            const index = state.findIndex(item => item.componentId === id)
            if (index !== -1) {
                state[index].settings.easing = newValue
            }
        },
    },
})

export const { updateSettings, toggleReplay, updateEasing } = settingsSlice.actions
export default settingsSlice.reducer
