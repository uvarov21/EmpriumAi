import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface HeroProps {
  onStartSurvey: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartSurvey }) => {
  const benefits = [
    "Increase efficiency by up to 80%",
    "Reduce operational costs significantly",
    "Free up time for strategic growth"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-slate-100 text-slate-800 px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle className="h-4 w-4 mr-2" />
                Proudly Canadian • Trusted by 50+ Companies
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Transform Your Business with 
                <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent"> AI Automation</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Replace manual tasks with intelligent workflows. EmpriumAutomations helps Canadian agencies, SaaS companies, and firms achieve unprecedented efficiency and growth through cutting-edge AI automation.
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onStartSurvey}
                className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105"
              >
                <span>Start Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-600 rounded-3xl transform rotate-6"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg" 
                alt="AI Automation Dashboard" 
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Automation Status</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Active</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Tasks Automated</span>
                    <span className="font-semibold">32</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;