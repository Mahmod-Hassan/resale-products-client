import React from 'react';
import useGetRequest from '../../../hooks/useGetRequest';
import { deleteBuyerAndSeller } from '../../../utils/handleUserApi';
import Loader from '../../Shared/Loader/Loader';


const AllBuyers = () => {
    const {data: buyers, loading} = useGetRequest(`https://mobile-bazar-server-jet.vercel.app/user?type=buyer`)
    // if loading show the Loader component
    if(loading){
        return <Loader></Loader>
    }
    
    return (
        <div className='m-4'>
            <h2 className="text-2xl text-center text-blue-500  font-bold mb-4">All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.length > 0
                                ?
                                buyers.map((buyer, idx) => <tr
                                    key={buyer._id}
                                >
                                    <th>{idx + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td><button onClick={() => deleteBuyerAndSeller(buyer?._id)} className='btn btn-error btn-sm'>Delete</button></td>
                                </tr>)
                                :
                                <tr className='text-center text-xl text-primary'>No Buyer Found</tr>

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;