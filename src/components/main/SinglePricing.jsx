import { Check } from 'lucide-react';
import React from 'react';

const SinglePricing = ({ singlePricing }) => {
  const { name, category, price, features } = singlePricing;

  return (
    <>
  <div className="bg-base-100 shadow-2xl mb-5">
    <div className="card-body">
      <span className="badge badge-xs badge-warning">{category}</span>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">{name}</h2>
        <span className="text-xl">$ {price}</span>
      </div>
      <ul className="mt-6 flex flex-col gap-2 text-xs">
        {
          features.map((feature,index) => <li key={index}><span className='flex gap-1 items-center text-lg'><Check color="#284af0"></Check> {feature}</span></li>)
        }
      </ul>
      <div className="mt-6">
        <button className="btn btn-primary btn-block">Subscribe</button>
      </div>
    </div>
  </div>
  </>
  );
};
export default SinglePricing;