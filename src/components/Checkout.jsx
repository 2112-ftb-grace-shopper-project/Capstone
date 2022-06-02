import React from 'react'

const Checkout = () => {
  return (
    <div>Checkout</div>
    //setup stripe
    //after success:
      //change order status to "processed" on db
      //clear locally stored cart+ create new empty cart for user
      //display order #
    //Link to OrderConfirm.jsx
  )
}

export default Checkout