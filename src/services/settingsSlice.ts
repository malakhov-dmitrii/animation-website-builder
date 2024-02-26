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
            } else {
                state.push({
                    componentId: id,
                    settings: {
                        x: settings.x !== undefined ? settings.x : 0,
                        y: settings.y !== undefined ? settings.y : 0,
                        opacity: settings.opacity !== undefined ? settings.opacity : -100,
                        scale: settings.scale !== undefined ? settings.scale : 0,
                        blur: settings.blur !== undefined ? settings.blur : -100,
                        speed: settings.speed !== undefined ? settings.speed : -100,
                        delay: settings.delay !== undefined ? settings.delay : -100,
                        easing: settings.easing !== undefined ? settings.easing : '',
                        replay: settings.replay !== undefined ? settings.replay : false,
                    },
                })
            }
        },
        toggleReplay: (state, action: PayloadAction<{ id: string; isChecked: boolean }>) => {
            const { id, isChecked } = action.payload
            const index = state.findIndex(item => item.componentId === id)
            if (index !== -1) {
                state[index].settings.replay = isChecked
            } else {
                state.push({
                    componentId: id,
                    settings: {
                        x: 0,
                        y: 0,
                        opacity: -100,
                        scale: 0,
                        blur: -100,
                        speed: -100,
                        delay: -100,
                        easing: '',
                        replay: isChecked,
                    },
                })
            }
        },
        updateEasing: (state, action: PayloadAction<{ id: string; newValue: string }>) => {
            const { id, newValue } = action.payload
            const index = state.findIndex(item => item.componentId === id)
            if (index !== -1) {
                state[index].settings.easing = newValue
            } else {
                state.push({
                    componentId: id,
                    settings: {
                        x: 0,
                        y: 0,
                        opacity: -100,
                        scale: 0,
                        blur: -100,
                        speed: -100,
                        delay: -100,
                        easing: newValue,
                        replay: false,
                    },
                })
            }
        },
    },
})

export const { updateSettings, toggleReplay, updateEasing } = settingsSlice.actions
export default settingsSlice.reducer
