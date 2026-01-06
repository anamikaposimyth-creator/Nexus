
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="max-w-3xl mb-24">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-8">Our Expertise</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We provide specialized consulting and engineering services designed to help enterprises thrive in the digital age.
          </p>
        </header>

        <div className="space-y-32">
          {SERVICES.map((service, index) => (
            <div key={service.id} id={service.id} className={`flex flex-col lg:flex-row gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-200">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.fullDescription}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map(feature => (
                    <div key={feature} className="flex items-center space-x-3 text-slate-700 font-medium">
                      <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden relative">
                  <img 
                    src={`https://picsum.photos/seed/${service.id}/800/800`} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-indigo-600/10 mix-blend-multiply"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
