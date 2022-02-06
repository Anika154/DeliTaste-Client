import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';

const AllOrder = () => {
    const[orders,setOrders]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/order')
        .then(res=>res.json())
        .then(data=>setOrders(data))
        
    },[])
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                orders.map(order=><Order
                key={order._id}
                order={order}
                
                ></Order>)

            }
            
        </div>
    );
};

export default AllOrder;