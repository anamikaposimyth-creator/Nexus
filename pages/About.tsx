
import React from 'react';
import { TEAM } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Bridging the gap between <span className="text-indigo-600">vision</span> and technology.
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Founded in 2018, Nexus was born out of a simple observation: most consulting firms provide strategy without execution, and most agencies provide execution without strategy.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-indigo-600 pl-6 py-2">
              "We believe that every modern company must be a technology company at its core. Our mission is to provide the engineering excellence and strategic foresight required to win."
            </p>
          </div>
          <div className="lg:w-1/2">
             <div className="grid grid-cols-2 gap-4">
               <img src="https://picsum.photos/seed/about1/400/500" className="rounded-2xl shadow-lg mt-8" alt="Office 1" />
               <img src="https://picsum.photos/seed/about2/400/500" className="rounded-2xl shadow-lg" alt="Office 2" />
             </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide our work and our culture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-indigo-600 mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Relentless Innovation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We never settle for the status quo. We are constantly exploring new technologies to find the best solutions for our clients.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-indigo-600 mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Radical Integrity</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Transparency is everything. We are honest about what works, what doesn't, and where the real value lies.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-indigo-600 mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Human-Centric</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Technology serves people, not the other way around. We build products that enhance lives and solve real human problems.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Meet the Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TEAM.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-indigo-600 rounded-full translate-x-3 translate-y-3 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
                  <img src={member.imageUrl} className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg" alt={member.name} />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                <p className="text-indigo-600 font-semibold mb-4">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
