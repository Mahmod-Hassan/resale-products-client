
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


const AllBuyers = () => {

    const [buyers, setBuyers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-buyers?type=buyer')
            .then(res => res.json())
            .then(data => {
                setBuyers(data)
            })
    }, [])

    const handleBuyerDelete = id => {
        const proceed = window.confirm('are u sure want to DELETE');
        if (proceed) {
            fetch(`http://localhost:5000/delete-user/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully');
                        const remainingBuyers = buyers.filter(buyer => buyer._id !== id);
                        setBuyers(remainingBuyers);
                    }
                })
        }

    }
    return (
        <div className='m-4'>
            <h2 className="text-2xl text-center text-error font-bold mb-4">All Buyers</h2>
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
                                    <td><button onClick={() => handleBuyerDelete(buyer?._id)} className='btn btn-error btn-sm'>Delete</button></td>
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