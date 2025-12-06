import React from 'react';
import { useLoaderData } from 'react-router';
import PartnerCard from '../Partner/PartnerCard';


const FindPartners = () => {
    const partner = useLoaderData();
    return (
        <div className='grid grid-cols-3 gap-5 mx-auto max-w-4/5'>
            {
                partner.map(partner => <PartnerCard key={partner._id} partner={partner}></PartnerCard>)
            }
        </div>
    );
};


export default FindPartners;
