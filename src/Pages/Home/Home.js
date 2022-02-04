import React from 'react';
import Banner from './Banner/Banner';
import Choose from './Choose/Choose';
import Off from './Off/Off';
import Offer from './Offers/Offer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <Choose></Choose>
            <Off></Off>
        </div>
    );
};

export default Home;