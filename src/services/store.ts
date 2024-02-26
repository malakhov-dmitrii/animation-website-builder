import { configureStore } from '@reduxjs/toolkit'
import settingsSlice from './settingsSlice'
import selectedComponentSlice from './selectedComponentSlice'

export const store = configureStore({
    reducer: { settings: settingsSlice, selectedComponent: selectedComponentSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
