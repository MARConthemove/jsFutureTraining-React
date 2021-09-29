import React from 'react'

// For Autocompletion -> Initial State:
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: (id) => {}
})

export default CartContext
