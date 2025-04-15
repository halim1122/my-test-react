import React, { use } from 'react';
import SinglePricing from './SinglePricing';

const PricingOptions = ({pricingPromise}) => {

  const pricingData = use(pricingPromise);
  return (
    <div className='w-11/12 mx-auto'>
      <h2 className='xl:text-6xl text-xl md:text-4xl lg:text-5xl mb-12'>Pricing Data</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center'>
      {
        pricingData.map(singlePricing => <SinglePricing key={singlePricing.id} singlePricing={singlePricing}></SinglePricing>)
      }
      </div>
      
    </div>
  );
};

export default PricingOptions;