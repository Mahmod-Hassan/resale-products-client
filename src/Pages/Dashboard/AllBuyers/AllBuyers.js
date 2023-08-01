import React from 'react';
import useApiRequest from '../../../hooks/useApiRequest';
import useGetRequest from '../../../hooks/useGetRequest';
import Loader from '../../Shared/Loader/Loader';


const AllBuyers = () => {

    // useApiRequest is my custom hooks that returns sendRequest function
    // sendRequest function receive 3 parameter(url, method, data)
    // sendRequest function can handle all request like(get,post,put,delete)
    const {sendRequest} = useApiRequest();

    // fetching buyers using custom hook
    const {data: buyers, loading, refetch} = useGetRequest(`https://mobile-bazar-server-jet.vercel.app/user?type=buyer`)

    // delete buyer
    const deleteBuyer = async (id) => {
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
                                    <td><button onClick={() => deleteBuyer(buyer?._id)} className='btn btn-error btn-sm'>Delete</button></td>
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