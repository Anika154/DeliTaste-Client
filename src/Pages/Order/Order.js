import React from 'react';

const Order = ({key,order}) => {
    
    const{email,status,userData,offerDetail}=order;

    console.log(order);

    const handleDelete=()=>{
        const deleted=window.confirm('Do you want to delete?');
        if(deleted){
            fetch('http://localhost:5000/order')
            .then(res=>res.json())
            .then(data=>{
                if(data.deleteCount>0){
                alert('Deleted Successfully');
                window.location.reload();

            }
            })
        }
    }
        const handleUpdate=()=>{
            fetch()
            .then(res=>res.json())
            .then(data=>{
                if(data.modifiedCount > 0){
                    alert('Approved Successfully');
                    window.location.reload();
                }
            })
        }

    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className='shadow-xl'>
                <h2 className='text-2xl text-center text-pink-500 font-bold'>{userData.name}</h2>
                <h4 className='text-xl text-rose-900'>{userData.email}</h4>
                <h4 className='text-xl text-rose-900'>{offerDetail.name}</h4>
                <h4 className='text-xl text-rose-900'>{status}</h4>
                <h4 className='text-xl text-rose-900'>{userData.phone}</h4>
                <button className='bg-green-500 rounded-full text-white'>Approve</button>
                <button className='bg-red-400 rounded-full text-white'>Delete</button>
            </div>
            
        </div>
    );
};

export default Order;