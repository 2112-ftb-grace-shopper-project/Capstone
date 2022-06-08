import React, { useEffect } from 'react'
import { getMyOrders } from '../axios-services';


const MyOrders = ({ setMyOrderList, myOrderList }) => {

  useEffect(() => {
    const fetchMyOrders = () => {
      const id = localStorage.getItem('id')
      getMyOrders(id)
      .then((result) => {
        setMyOrderList(result)
      })
      .catch(console.error)
    }
    fetchMyOrders()
  }, [setMyOrderList]);

  return (
    <div>
        <label>My Orders</label>
        {myOrderList ? 
        myOrderList.map((order)=> {
          return (
            <div>
              <p>Order #</p>{order.id}
              <p>Order Status: {order.status}</p> 
              <p># of items ordered: {order.cart}</p>    
            </div>
          )

        })
        : 
        <p>You have not placed any orders yet.</p>}
    </div>
  )
};

export default MyOrders;