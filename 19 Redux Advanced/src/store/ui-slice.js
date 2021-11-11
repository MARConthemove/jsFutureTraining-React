import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible
    }
  }
})

// Also possible:
// export const { toggle } = uiSlice.actions

// Exporting the uiSlice Actions
export const uiActions = uiSlice.actions

// Exporting the created Slice
export default uiSlice
