
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, CASE_STUDIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-40">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl -z-10 opacity-60"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -z-10 opacity-60"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full">
              Leading the Digital Revolution
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              We engineer the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">future</span> of business.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
              Nexus helps visionary companies design, build, and scale world-class digital products. From AI strategy to cloud architecture, we deliver measurable impact.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all text-center">
                Start a Project
              </Link>
              <Link to="/case-studies" className="px-8 py-4 bg-white text-slate-900 font-bold border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-center">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">150+</div>
              <div className="text-sm text-slate-500 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">98%</div>
              <div className="text-sm text-slate-500 font-medium">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">40+</div>
              <div className="text-sm text-slate-500 font-medium">Global Specialists</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">$2B+</div>
              <div className="text-sm text-slate-500 font-medium">Value Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">End-to-end expertise.</h2>
              <p className="text-lg text-slate-600">
                We bridge the gap between business strategy and technological execution through four core disciplines.
              </p>
            </div>
            <Link to="/services" className="text-indigo-600 font-semibold hover:underline flex items-center">
              Explore all services
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to={`/services#${service.id}`} className="text-sm font-semibold text-indigo-600 group-hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 h-[300px] lg:h-auto overflow-hidden">
              <img 
                src={CASE_STUDIES[0].imageUrl} 
                alt="Case Study" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <span className="text-indigo-400 font-semibold mb-4 uppercase tracking-widest text-sm">Featured Success Story</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                How we helped {CASE_STUDIES[0].client} scale to 12M users.
              </h2>
              <div className="flex space-x-4 mb-10">
                {CASE_STUDIES[0].tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-slate-300 mb-10 text-lg leading-relaxed italic">
                "{CASE_STUDIES[0].result}"
              </p>
              <Link to={`/case-studies/${CASE_STUDIES[0].id}`} className="inline-flex items-center text-white font-bold group">
                Read the full case study
                <div className="ml-4 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white overflow-hidden relative">
         <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">Ready to modernize your business?</h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Schedule a strategy session with our experts and discover how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
               <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white text-lg font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-100">
                  Contact Us Today
               </Link>
               <span className="text-slate-400 font-medium">or</span>
               <a href="mailto:hello@nexus.digital" className="text-slate-900 font-bold hover:text-indigo-600 transition-colors">
                 hello@nexus.digital
               </a>
            </div>
         </div>
         {/* Subtle pattern background */}
         <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
      </section>
    </div>
  );
};

export default Home;
