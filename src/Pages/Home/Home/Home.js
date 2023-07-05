
import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Buy from '../Buy/Buy';
import Categories from '../Categories/Categories';
import Contact from '../Contact/Contact';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import Faq from '../FAQ/Faq';
import Features from '../Features/Features';
import Subscribe from '../Subscribe/Subscribe';
import TotalDelivered from '../TotalDelivered/TotalDelivered';

const Home = () => {
   
    return (
        <div>

            <Banner></Banner>
            <Features></Features>
            <Categories></Categories>
            <Contact></Contact>
            <Faq></Faq>
            <Buy></Buy>
            <TotalDelivered></TotalDelivered>
            <CustomerFeedback></CustomerFeedback>
            <AboutUs></AboutUs>
            <Subscribe></Subscribe>

        </div>
    );
};

export default Home;