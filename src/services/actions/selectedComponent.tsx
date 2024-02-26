import { createAction } from '@reduxjs/toolkit'

export const updateCurrentComponentId = createAction<string>(
    'selectedComponent/updateCurrentComponentId'
)
