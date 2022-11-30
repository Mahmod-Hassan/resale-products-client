import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [myProducts, setMyProducts] = useState([]);
    useEffect(() => {
        axios.get(`https://y-livid-theta.vercel.app/my-products?email=${user?.email}`)
            .then(data => { setMyProducts(data?.data) })
            .catch(error => console.log(error))
    }, [user?.email])
    const handleDeleteProduct = id => {
        fetch(`https://y-livid-theta.vercel.app/delete-product/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('successfyll deleted')
                    const remainingProduct = myProducts.filter(product => product._id !== id);
                    setMyProducts(remainingProduct);
                }
            })
    }
    return (
        <div className='m-4'>
            <h2 className="text-2xl text-center mb-4 text-primary font-bold">My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts.length &&

                            myProducts.map((product, idx) => <tr
                                key={product._id}
                            >
                                <th>{idx + 1}</th>
                                <td>{product.productName}</td>
                                <td>{product.resalePrice}</td>
                                <td><button onClick={() => handleDeleteProduct(product._id)} className='btn btn-error btn-sm'>Delete</button></td>
                            </tr>)

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;