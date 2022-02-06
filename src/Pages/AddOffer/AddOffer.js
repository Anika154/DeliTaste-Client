import React from 'react';

const AddOffer = () => {
    // const { register, handleSubmit, reset } = useForm();
    // const onSubmit = data => {
    //     console.log(data);
    //     axios.post('', data)
    //         .then(res => {
    //             // console.log(res);
    //             if (res.data.insertedId) {
    //                 alert('added successfully')
    //                 reset();
    //             }
    //         })
    // }
    return (
        <div>
            <h2 className='font-bold text-2xl text-green-400 mt-5'>Add Offers</h2>
            <form>
                <input>Your Name</input>
                <textarea placeholder="Description"/>
                <input placeholder="Price" />
                <input placeholder="Image URL" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddOffer;