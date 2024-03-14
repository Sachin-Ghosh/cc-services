// components/ServiceCard.js
import React from 'react';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="p-4 bg-white shadow rounded-md mb-4">
      <h2 className="font-semibold  text-gray-900 text-lg mb-2">{title}</h2>
      <p className='text-gray-700'>{description}</p>
    </div>
  );
};

export default ServiceCard;
