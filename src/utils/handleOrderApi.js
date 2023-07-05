import axios from 'axios';
import { toast } from 'react-hot-toast';

const baseUrl = 'https://mobile-bazar-server-jet.vercel.app';

// const getMyOrders = (email, setOrders, setLoading) => {
//     setLoading(true);
//     axios
//         .get(`${baseUrl}/order?email=${email}`, {
//             headers: {
//                 authorization: `bearer ${localStorage.getItem('access_token')}`
//             }
//         })
//         .then(({data}) => {
//             setOrders(data)
//             setLoading(false);
//         })
//         .catch(err => console.log(err.message))
// }

const deleteOrder = (id, orders, setOrders) => {
    const proceed = window.confirm('are u sure want to DELETE');
    if (proceed) {
    axios
        .delete(`${baseUrl}/order/${id}`)
        .then(data => {
            console.log(data);
            if (data.data.deletedCount > 0) {
                const restOrder = orders.filter(order => order._id !== id);
                setOrders(restOrder);
                toast.success('order deleted successfully')
            }
        })
    }
}

export { deleteOrder };

