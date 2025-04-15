import React from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Rating = () => {

const rating =[
  {
    "id": 1,
    "name": "Football",
    "score": 9.7,
    "reviewsCount": 245
  },
  {
    "id": 2,
    "name": "Cricket",
    "score": 9,
    "reviewsCount": 310
  },
  {
    "id": 3,
    "name": "Tennis",
    "score": 6.6,
    "reviewsCount": 178
  },
  {
    "id": 4,
    "name": "Basketball",
    "score": 8.5,
    "reviewsCount": 540
  },
  {
    "id": 5,
    "name": "Yoga",
    "score": 5,
    "reviewsCount": 132
  }
]


  return (
    <div className='w-11/12 mx-auto text-center'>
      <hr />
      <h1 className='xl:text-6xl text-xl md:text-4xl lg:text-5xl my-10'>Rating and reviewsCount BarChart</h1>
      <BarChart width={400} height={400} data={rating}>
        <XAxis dataKey="name" stroke='#284af0'></XAxis>
        <YAxis stroke='#284af0'></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey="score" fill='blue' barSize={30}></Bar>
        <Bar dataKey="reviewsCount" fill='lightblue' barSize={30}></Bar>
      </BarChart>
    </div>
  );
};

export default Rating;