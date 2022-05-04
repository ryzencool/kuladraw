import { createSlice } from "@reduxjs/toolkit";

export const shapeTypeSlice = createSlice({
    name: 'shapeType',
    initialState: {
        currentShapeType: 'pointer'
    },
    reducers: {
        setShapeType: (state, action) => {
            state.currentShapeType = action.payload;
        }
    }
})

export const { setShapeType } = shapeTypeSlice.actions;

export default shapeTypeSlice.reducer;