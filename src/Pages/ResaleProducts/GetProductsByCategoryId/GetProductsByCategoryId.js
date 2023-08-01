
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetRequest from '../../../hooks/useGetRequest';
import Loader from '../../Shared/Loader/Loader';
import BookingModal from '../BookingModal/BookingModal';
import ResaleProducts from '../ResaleProducts/ResaleProducts';

const GetProductsByCategoryId = () => {
    const {name} = useParams();
    const {data: products, loading, refetch} = useGetRequest(`https://mobile-bazar-server-jet.vercel.app/product/category?category=${name}`)
    const [resaleProduct, setResaleProduct] = useState(null);
   
       // if loading show the Loader component
       if(loading){
           return <Loader></Loader>
       }

       // return jsx
    return (
        <div>

            <div className=' grid md:grid-cols-3 gap-10'>
                {
                    products.map(product => <ResaleProducts
                        key={product._id}
                        product={product}
                        setResaleProduct={setResaleProduct}
                    ></ResaleProducts>)
                }
            </div>

            {/* when user will click the book now button product will set to the resaleProduct state thats why we set a condition if resaleProduct include value BookingModal will show*/}
            {
                resaleProduct && <>
                    <BookingModal
                        product={resaleProduct}
                        setResaleProduct={setResaleProduct}
                        refetch={refetch}
                    ></BookingModal>
                </>
            }
        </div>
    );
};

export default GetProductsByCategoryId;