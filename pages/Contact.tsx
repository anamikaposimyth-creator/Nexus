
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Digital Strategy',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({ name: '', email: '', company: '', service: 'Digital Strategy', message: '' });
    }, 1000);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-2/5">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-8">Let's build something <span className="text-indigo-600">great</span> together.</h1>
            <p className="text-xl text-slate-600 mb-12">
              Have a project in mind? We'd love to hear about it. Tell us a bit about your business and your goals.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                   <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Visit Us</h4>
                  <p className="text-slate-600">123 Tech Plaza, Suite 400<br />San Francisco, CA 94105</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                   <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-600">hello@nexus.digital<br />partnerships@nexus.digital</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-50">
              {isSubmitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-slate-600 mb-8">Thanks for reaching out. Our team will get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-indigo-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" 
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" 
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Company Name</label>
                      <input 
                        type="text" 
                        value={formState.company}
                        onChange={(e) => setFormState({...formState, company: e.target.value})}
                        className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" 
                        placeholder="Your Company Inc."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Interested Service</label>
                      <select 
                        value={formState.service}
                        onChange={(e) => setFormState({...formState, service: e.target.value})}
                        className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all appearance-none"
                      >
                        <option>Digital Strategy</option>
                        <option>Product Engineering</option>
                        <option>AI & Data Science</option>
                        <option>Cloud Infrastructure</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">How can we help?</label>
                    <textarea 
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" 
                      placeholder="Tell us about your project goals and timeline..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-5 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center space-x-3"
                  >
                    <span>Send Message</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
