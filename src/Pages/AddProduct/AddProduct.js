import React from 'react';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const sellerName = form.seller_name.value;
        const productName = form.product_name.value;
        const price = form.price.value;
        const condition = form.condition.value;
        const category = form.category.value;
        const description = form.description.value;
        const using = form.using.value;
        const location = form.location.value;

        const productInfo = {
            image,
            sellerName,
            productName,
            price,
            condition,
            category,
            description,
            using,
            location
        }

        fetch('http://localhost:5000/add-product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('your product added successfully')
                    form.reset();
                }
            })
    }
    return (
        <div className='my-10'>
            <h2 className="text-2xl text-center mb-4 text-primary font-bold">Add Your Product</h2>
            <div className='sm:w-4/5 md:w-3/5 lg:w-1/2 mx-auto border shadow-2xl p-5'>
                <form onSubmit={handleAddProduct} className='grid lg:grid-cols-2 gap-5'>
                    {/* product photo input field */}
                    <input name="image" placeholder='photo-url' type="text" className="input input-bordered" required />

                    {/* seller name input field */}
                    <input name="seller_name" placeholder='Your Name' type="text" className="input input-bordered" required />

                    {/* product name input field */}
                    <input name="product_name" placeholder='Product Name' type="text" className="input input-bordered" required />

                    {/* price input field */}
                    <input name="price" placeholder='Price' type="number" className="input input-bordered" required />

                    {/* product condition selector field */}
                    <select name='condition' className="select select-bordered w-full">
                        <option>Good</option>
                        <option>Excellent</option>
                        <option>Fair</option>
                    </select>

                    {/* product category input field */}
                    <select name='category' className="select select-bordered w-full">
                        <option>iphone</option>
                        <option>Samsung</option>
                        <option>Readmi</option>
                    </select>

                    {/* product using duration input field */}
                    <input name="using" placeholder='using' type="text" className="input input-bordered" required />

                    {/* product using duration input field */}
                    <input name="location" placeholder='location' type="text" className="input input-bordered" required />

                    {/* description about product input field */}
                    <textarea name="description" className="textarea textarea-bordered" placeholder="write about your product..."></textarea>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>

        </div>
    );
};

export default AddProduct;