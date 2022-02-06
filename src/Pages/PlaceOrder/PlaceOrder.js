import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';
import { useParams } from 'react-router-dom';
import {useForm} from 'react-hook-form';


function PlaceOrder() {
    const [item, setItem] = useState({});
    const {id}=useParams(); 
    console.log(id);
    const {register,handleSubmit} = useForm();
    

    const onSubmit = data =>{
        if(data.name === ''){
            data.name =user.displayName;
        }
        if(data.email === ''){
            data.email = user.email;
        }
        const orderDetail ={
            email: user.email,
            status: "pending",
            userData: data,
            offerDetail: item
        }
    }
    useEffect(() => {
        fetch(`http://localhost:5000/offer?id=${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    const { user } = useFirebase();
    return (
        <div className='grid grid-cols-2'>
            <div className='m-10 shadow-xl'>
                <img className="rounded mx-48 mt-5" src={item.img} alt="" />
                <h3 className='m-7 font-bold text-xl'>{item.name}</h3>
                <h4 className='font-bold text-xl m-5'>{item.price}</h4>
                <h4 className='text-lg text-gray-500 mb-5'>{item.description}</h4>
            </div>
            <div className='m-5'>
                <h2 className='text-4xl text-green-500 font-bold'>Place Your Order</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='w-3/12 mx-auto mt-7 border-red-700'>
                    <input defaultValue={user.displayName} {...register("name")} placeholder="Enter your name" />
                    <input defaultValue={user.email} {...register("email")} placeholder="Email" />
                    <input type="number" {...register("phone")} placeholder="Phone" />
                    <input className='bg-orange-300' type="submit" />
                </form>
            </div>

        </div>
    );
}

export default PlaceOrder;






    