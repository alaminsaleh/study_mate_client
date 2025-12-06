import React, { use } from 'react';
import PartnerCard from '../Partner/PartnerCard';


const TopStudyPartners = ({ topStudyPartnersPromise }) => {
    const partners = use(topStudyPartnersPromise);
    console.log(partners);
    return (
        <div>
            <h2>Top Partners</h2>
            <div className='grid grid-cols-3 gap-5 mx-auto max-w-4/5'>
                {
                    partners.map(partner => <PartnerCard key={partner._id} partner={partner}></PartnerCard>)
                }
            </div>
        </div>
    );
};


export default TopStudyPartners;
