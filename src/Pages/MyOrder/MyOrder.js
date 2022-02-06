import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';
import Order from '../Order/Order';

const MyOrder = () => {
    const[orders,setOrders]=useState([]);
    const {user} = useFirebase();
    useEffect(()=>{
        fetch(`http://localhost:5000/order?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    return (
        <div className='grid grid-cols-3 gap-4 shadow-lg'>
            {
                orders.map(order=> <Order
                key={order._id}
                order={order}
                ></Order>)
            }
            
        </div>
    );
};

export default MyOrder;