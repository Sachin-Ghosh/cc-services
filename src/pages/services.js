// pages/services.js
import React from 'react';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';

const ServicesPage = () => {
  const services = [
    { title: 'Website Development', description: 'We design and develop stunning websites tailored to your business.' },
    { title: 'Mobile App Development', description: 'Crafting intuitive and engaging mobile applications for iOS and Android.' },
    // Add more services here
  ];

  return (
    <Layout>
      <div className="  h-screen">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </Layout>
  );
};

export default ServicesPage;
