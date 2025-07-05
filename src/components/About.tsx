import React from 'react';
import { Award, Users, Target, Lightbulb, Shield, Zap } from 'lucide-react';

interface AboutProps {
  onStartSurvey: () => void;
}

const About: React.FC<AboutProps> = ({ onStartSurvey }) => {
  const stats = [
    { number: "50+", label: "Successful Projects", icon: <Award className="h-6 w-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <Users className="h-6 w-6" /> },
    { number: "80%", label: "Average Time Savings", icon: <Target className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="h-6 w-6" /> }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation First",
      description: "We stay ahead of the curve, implementing cutting-edge AI technologies to give your business a competitive advantage in the Canadian market."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Centric",
      description: "Your success is our success. We work closely with you to understand your unique challenges and deliver tailored solutions that fit your business needs."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security and full compliance with Canadian privacy laws (PIPEDA) ensure your data and processes are always protected."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Rapid Implementation",
      description: "Our streamlined process gets you up and running quickly, with minimal disruption to your existing operations across Canada."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Leading Canada's Future of Business Automation
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Founded by Canadian AI experts with tons of combined experience, EmpriumAutomations is dedicated to transforming 
            how Canadian businesses operate through intelligent automation solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-slate-50 rounded-2xl p-6">
              <div className="bg-slate-100 text-slate-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">Our Canadian Story</h3>
            <div className="space-y-4 text-slate-600">
              <p>
                EmpriumAutomations was born from a simple observation: Canadian businesses spend too much time on repetitive tasks 
                that could be automated, preventing them from focusing on what truly matters - growth and innovation.
              </p>
              <p>
                Our founders recognized that many businesses were struggling with manual processes that hindered productivity 
                and limited potential. They set out to create a company that would democratize access to enterprise-level 
                AI automation for Canadian businesses of all sizes.
              </p>
              <p>
                Today, we're proud to have helped over 50 Canadian companies across various industries achieve unprecedented 
                levels of efficiency and growth through our tailored automation solutions, from coast to coast.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg" 
              alt="Our Canadian team at work"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-slate-600 opacity-10 rounded-2xl"></div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-slate-100 text-slate-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">{value.title}</h4>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Canadian Business?</h3>
          <p className="text-xl opacity-90 mb-6">
            Join the dozens of Canadian companies that trust EmpriumAutomations to power their automation journey.
          </p>
          <button 
            onClick={onStartSurvey}
            className="bg-white text-slate-800 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;