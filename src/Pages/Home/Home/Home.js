import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import CustomerReview from '../CustomerReview/CustomerReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;