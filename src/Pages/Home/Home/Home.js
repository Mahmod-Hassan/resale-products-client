import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import SendMessageToMail from '../SendMessageToMail/SendMessageToMail';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <SendMessageToMail></SendMessageToMail>
        </div>
    );
};

export default Home;