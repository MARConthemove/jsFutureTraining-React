import React from 'react'

import CartContext from './cart-context'

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {}

  const removeItemFromCartHandler = (id) => {}

  // Object with Item props
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }

  // JSX:
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
