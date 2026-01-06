
import React from 'react';
import { CASE_STUDIES } from '../constants';

const CaseStudies: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-8">Success Stories</h1>
          <p className="text-xl text-slate-600">
            Real impact for world-class companies. See how we've solved complex challenges through technology.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-20">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="group relative flex flex-col md:flex-row bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all">
              <div className="md:w-1/2 relative overflow-hidden h-80 md:h-auto">
                <img 
                  src={study.imageUrl} 
                  alt={study.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-sm font-semibold text-slate-500">{study.client}</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors">
                  {study.title}
                </h2>
                <div className="space-y-6 mb-10">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">The Challenge</h4>
                    <p className="text-slate-600 leading-relaxed line-clamp-2">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Impact</h4>
                    <p className="text-slate-900 font-semibold leading-relaxed">{study.result}</p>
                  </div>
                </div>
                <button className="inline-flex items-center text-indigo-600 font-bold">
                  View full case study
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
