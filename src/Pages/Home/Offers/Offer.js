import React, { useEffect,useState} from 'react';
import image1 from "../../../images/steak.jpg";
import image2 from "../../../images/Sirloin.jpg";
import image3 from "../../../images/bone.jpg";
import image4 from "../../../images/strips.jpg";
import image5 from "../../../images/pizza.jpg";
import image6 from "../../../images/sushi.jpg";
import image7 from "../../../images/fastfood.jpg";
import image8 from "../../../images/all.jpg";
import { useNavigate } from 'react-router-dom';


const Offer = () => {
    const navigate=useNavigate();
    const[offer, setOffer]= useState([]);
    useEffect(()=>{
        fetch('/offer.json')
        .then(res=>res.json())
        .then(data=>{
        setOffer([...data]);
        })
    },[])



    return (
        <div>
            <h4 className='text-2xl text-yellow-500 mt-16 text-bold'>Amazing Taste</h4>
            <h2 className='text-5xl font-bold mt-8  '>Popular Dishes</h2>
            <div className='flex flex-row justify-center gap-8  mt-16 px-12'>
                <div>
                    <button className='w-full px-5 text-justify h-10 rounded-full text-bold bg-gray-300 hover:bg-yellow-500'>Meal</button>
                </div>
                <div>
                <button className='w-full px-5 text-justify h-10 rounded-full text-bold bg-gray-300 hover:bg-yellow-500'>Pizza</button>
                </div>
                <div>
                <button className='w-full px-5 text-justify h-10 rounded-full text-bold bg-gray-300 hover:bg-yellow-500'>Fastfood</button>
                </div>
                <div>
                <button className='w-full px-5 text-justify h-10 rounded-full text-bold bg-gray-300 hover:bg-yellow-500'>Sushi</button>
                </div>

            </div>
            <div className='grid grid-cols-4 gap-8  mt-16 px-12'>
                {
                    offer.map(element=>(<div>
                        <img className='rounded' src={element.img} alt="img-1"></img>
                        <h3 className='m-7 font-bold text-xl'>{element.name}</h3>
                        <h4 className='text-lg text-gray-500'>{element.description}</h4>
                        <h4 className='font-bold text-xl m-5'>{element.price}</h4>
                        <button onClick={()=>{navigate(`/item/1`)}} className='w-6/12 mb-5 bg-yellow-600 rounded-full text-white text-lg text-bold h-12  '>Add To Cart</button>
                    </div>))
                }
                
                

            
        </div>
        </div>
        
        
    );
};

export default Offer;