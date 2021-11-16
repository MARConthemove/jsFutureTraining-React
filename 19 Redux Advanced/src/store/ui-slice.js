import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      }
    },
  },
})

// Also possible:
// export const { toggle } = uiSlice.actions

// Exporting the uiSlice Actions
export const uiActions = uiSlice.actions

// Exporting the created Slice
export default uiSlice
