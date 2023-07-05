
import React from 'react';
import useGetRequest from '../../../hooks/useGetRequest';
import { deleteBuyerAndSeller, makeAdmin, verifiedSeller } from '../../../utils/handleUserApi';
import Loader from '../../Shared/Loader/Loader';

const AllSellers = () => {
    const {data: sellers, loading} = useGetRequest(`https://mobile-bazar-server-jet.vercel.app/user?type=seller`);
   
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
                                    <td><button onClick={() => deleteBuyerAndSeller(seller?._id)} className='btn btn-error btn-sm'>Delete</button></td>
                                    {
                                        seller?.verified === true ?
                                            <td><button className='btn btn-disabled btn-sm'>Verified</button></td>
                                            :
                                            <td><button onClick={() => verifiedSeller(seller?._id)} className='btn btn-accent btn-sm'>Unverify</button></td>
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