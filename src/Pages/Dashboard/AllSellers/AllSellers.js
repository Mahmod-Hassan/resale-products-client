
import React from 'react';
import useApiRequest from '../../../hooks/useApiRequest';
import useGetRequest from '../../../hooks/useGetRequest';
import Loader from '../../Shared/Loader/Loader';

const AllSellers = () => {
    
    // useApiRequest is my custom hooks that returns sendRequest function
    // sendRequest function receive 3 parameter(url, method, data)
    // sendRequest function can handle all request like(get,post,put,delete)
    const { sendRequest } = useApiRequest();
    
    // fetching sellers using custom hook
    const {data: sellers, loading, refetch} = useGetRequest(`https://mobile-bazar-server-jet.vercel.app/user?type=seller`);
    
    // verify seller
    const verifyTheSeller = async (id) => {
        const data = await sendRequest(`https://mobile-bazar-server-jet.vercel.app/user/verify-seller/${id}`,'PUT', {verified: true});
        if(data.acknowledged) refetch();
    }

    // make admin
    const makeAdmin = async (id) => {
        const data = await sendRequest(`https://mobile-bazar-server-jet.vercel.app/user/make-admin/${id}`, 'PUT', { role: 'admin'});
        if(data.acknowledged) refetch();
    }

    // delete a seller
    const deleteSeller = async (id) => {
        const proceed = window.confirm('are u sure want to DELETE');
        if(proceed){
            const data = await sendRequest(`https://mobile-bazar-server-jet.vercel.app/user/${id}`, 'DELETE');
            if(data.acknowledged) refetch();
        }
    }
    // if loading show the Loader component
    if(loading){
        return <Loader></Loader>
    }
    
    
    return (
        <div className='m-4'>
            <h2 className="text-2xl text-center font-bold mb-4 text-blue-500 ">All sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete</th>
                            <th>Verify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.length > 0
                                ?
                                sellers.map((seller, idx) => <tr
                                    key={seller._id}
                                >
                                    <th>{idx + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>{
                                        seller?.role === 'admin'
                                            ?
                                            <button className='btn btn-sm btn-primary'>Admin</button>
                                            :
                                            <button onClick={() => makeAdmin(seller._id)} className='btn btn-sm'>Make Admin</button>
                                    }</td>
                                    <td><button onClick={() => deleteSeller(seller?._id)} className='btn btn-error btn-sm'>Delete</button></td>
                                    {
                                        seller?.verified === true ?
                                            <td><button className='btn btn-disabled btn-sm'>Verified</button></td>
                                            :
                                            <td><button onClick={() => verifyTheSeller(seller?._id)} className='btn btn-accent btn-sm'>Unverify</button></td>
                                    }
                                </tr>)
                                :
                                <tr className='text-center text-xl text-primary'>No Seller Found</tr>

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;