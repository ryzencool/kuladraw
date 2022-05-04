import { configureStore } from '@reduxjs/toolkit'
import shapeTypeReducer from './shapeType'

export const store = configureStore({
    reducer: {
        shapeType: shapeTypeReducer
    },
  })