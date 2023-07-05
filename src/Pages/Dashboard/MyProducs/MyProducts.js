import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useGetRequest from '../../../hooks/useGetRequest';
import { deleteProduct } from '../../../utils/handleProductApi';
import Loader from '../../Shared/Loader/Loader';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const {data: products, loading} = useGetRequest(`https://mobile-bazar-server-jet.vercel.app/product/my?email=${user?.email}`);
    if(loading){
    return <Loader></Loader>
    }

    return (
        <div className='m-4'>
            <h2 className="text-2xl text-center mb-4 text-blue-500 font-bold">My Products</h2>
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
                            products.length &&

                            products.map((product, idx) => <tr
                                key={product._id}
                            >
                                <th>{idx + 1}</th>
                                <td>{product?.productName}</td>
                                <td>{product?.resalePrice}</td>
                                <td><button onClick={() => deleteProduct(product._id)} className='btn btn-error btn-sm'>Delete</button></td>
                            </tr>)

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;