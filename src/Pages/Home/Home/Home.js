import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Contact from '../Contact/Contact';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import Faq from '../FAQ/Faq';
import Features from '../Features/Features';
import Record from '../Record/Record';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Categories></Categories>
            <Contact></Contact>
            <Faq></Faq>
            <Record></Record>
            <CustomerFeedback></CustomerFeedback>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;