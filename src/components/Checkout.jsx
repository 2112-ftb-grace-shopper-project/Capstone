import React from 'react'

const Checkout = () => {
  return (
    <div className="Misc">
      <h3>You've Successfully Checked Out!</h3>
    </div>
    //setup stripe
    //after successful checkout:
      //change order status to "processed" on db/myorders
      //clear locally stored cart+ create new empty cart for user
      //display order #
    //Link to OrderConfirm.jsx
  )
}

export default Checkout