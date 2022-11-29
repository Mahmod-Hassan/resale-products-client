import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [myProducts, setMyProducts] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/my-products?email=${user?.email}`)
            .then(data => {
                console.log(data);
                setMyProducts(data.data)
            })
            .catch(error => console.log(error))
    }, [user?.email])
    const handleDeleteProduct = id => {
        fetch(`http://localhost:5000/delete-product/${id}`, {
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
                            myProducts.length > 0
                                ?
                                myProducts.map((product, idx) => <tr
                                    key={product._id}
                                >
                                    <th>{idx + 1}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.resalePrice}</td>
                                    <td><button onClick={() => handleDeleteProduct(product._id)} className='btn btn-error btn-sm'>Delete</button></td>
                                </tr>)
                                :
                                <tr className='text-center text-xl text-primary'>please order something</tr>

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;