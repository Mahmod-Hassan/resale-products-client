import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useApiRequest from '../../../hooks/useApiRequest';
import useGetRequest from '../../../hooks/useGetRequest';
import Loader from '../../Shared/Loader/Loader';

const MyProducts = () => {

    // useApiRequest is my custom hooks that returns sendRequest function
    // sendRequest function receive 3 parameter(url, method, data)
    // sendRequest function can handle all request like(get,post,put,delete)
    const {sendRequest} = useApiRequest();

    // get user from AuthContext
    const { user } = useContext(AuthContext);

    // fetching all products
    const {data: products, loading, refetch} = useGetRequest(`https://mobile-bazar-server-jet.vercel.app/product/my?email=${user?.email}`);
    
    // delete product
    const deleteProduct = async (id) => {
        const proceed = window.confirm('are u sure want to DELETE');
        if(proceed){
            const data = await sendRequest(`https://mobile-bazar-server-jet.vercel.app/product/${id}`, 'DELETE')
            if(data.acknowledged) refetch();
        }
    }

    // if loading Loader will displayed
    if(loading){
    return <Loader></Loader>
    }

    // My products component(function) return this jsx element(object)
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