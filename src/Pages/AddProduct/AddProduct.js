import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useApiRequest from '../../hooks/useApiRequest';
import Loader from '../Shared/Loader/Loader';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_Key;
    const { register, handleSubmit, reset} = useForm();
    const { loading, error, sendRequest } = useApiRequest();
    if(loading) return <Loader></Loader>
    if(error) console.log(error);
    
    const handleAddProduct = data => {
        let image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        // post an image to imgbb server and get the imgUrl from big imgData
        fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(imgData => {
                const photoUrl = imgData?.data?.url;
                let {image, ...myProduct} = data;
                const product = {...myProduct, photoUrl};
                sendRequest('https://mobile-bazar-server-jet.vercel.app/product', 'POST', product)
                .then(data => {
                   toast.success('Your product added successfully')
                   reset();
                   navigate('/dashboard/my-products')
                })
                .catch(err => {
                    console.log(err)
                })
        })
        .catch(err => {
            console.log(err)
        })


 
    }

    return (
        <div className='my-10'>
            <h2 className="text-2xl text-center mb-4 text-primary font-bold">Add Your Product</h2>
            <div className='lg-flex shadow-2xl p-5'>
                <form onSubmit={handleSubmit(handleAddProduct)} className='grid lg:grid-cols-2 gap-5'>
                    {/* product photo input field */}
                    <input {...register("email")} value={user?.email} type="text" className="input input-bordered" readOnly />

                    {/* product photo input field */}
                    <input {...register("image", { required: "image is required" })} placeholder='upload-photo' type="file" className="input input-bordered" required />

                    {/* seller name input field */}
                    <input {...register("sellerName", { required: "sellerName is required" })} placeholder='Your Name' value={user?.displayName} type="text" className="input input-bordered" readOnly/>

                    {/* product name input field */}
                    <input {...register("productName", { required: "productName is required" })} placeholder='Product Name' type="text" className="input input-bordered" required />

                    {/* original price input field */}
                    <input {...register("originalPrice", { required: "originalPrice is required" })} placeholder='Original Price' type="number" className="input input-bordered" required />

                    {/* resale price input field */}
                    <input {...register("resalePrice", { required: "resalePrice is required" })} placeholder='Resale Price' type="number" className="input input-bordered" required />

                    {/* product condition selector field */}
                    <select {...register("condition", { required: "condition is required" })} className="select select-bordered w-full">
                        <option>Good</option>
                        <option>Excellent</option>
                        <option>Fair</option>
                    </select>

                    {/* product category input field */}
                    <select {...register("category", { required: "category is required" })} className="select select-bordered w-full">
                        <option>iphone</option>
                        <option>Samsung</option>
                        <option>Readmi</option>
                    </select>

                    {/* product using duration input field */}
                    <input {...register("using", { required: "using is required" })} placeholder='using' type="text" className="input input-bordered" required />

                    {/* product using duration input field */}
                    <input {...register("location", { required: "location is required" })} placeholder='location' type="text" className="input input-bordered" required />

                    {/* product posted date input field */}
                    <input {...register("date", { required: "date is required" })} placeholder='todays date' type="date" className="input input-bordered" required />

                    {/* description about product input field */}
                    <textarea {...register("description", { required: "description is required" })} className="textarea textarea-bordered" placeholder="write about your product..."></textarea>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>

        </div>
    );
};

export default AddProduct;