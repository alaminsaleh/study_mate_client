import React from 'react';
// import TopStudyPartners from '../HighRatingPartners/TopStudyPartners';
import Loading from '../Loading/Loading';
import TopStudyPartners from '../HighRatingPartners/TopStudyPartners';
import HeroSlider from '../pages/HeroSlider';

const topStudyPartnersPromise = fetch('http://localhost:3000/top-study-partners')
    .then(res => res.json());

const Home = () => {
    return (
        <div>
            <HeroSlider />
            <TopStudyPartners topStudyPartnersPromise={topStudyPartnersPromise}></TopStudyPartners>
        </div>
    );
};

export default Home;

