import { createAction } from '@reduxjs/toolkit'
import { IUpdateSettingsAction } from '../settingsSlice'

export const updateSettings = createAction<IUpdateSettingsAction>('settings/updateSettings')

export const toggleReplay = createAction<boolean>('settings/toggleReplay')

export const updateEasing = createAction<string>('settings/updateEasing')
