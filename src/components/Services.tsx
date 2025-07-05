import React from 'react';
import { Bot, Database, Workflow, BarChart3, MessageSquare, Phone, Users, Clock } from 'lucide-react';

interface ServicesProps {
  onStartSurvey: () => void;
}

const Services: React.FC<ServicesProps> = ({ onStartSurvey }) => {
  const services = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Intelligent Process Automation",
      description: "Transform repetitive tasks into smart, self-learning workflows that adapt and improve over time.",
      features: ["Smart document processing", "Automated data entry", "Intelligent routing"],
      color: "slate"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Integration & Analytics",
      description: "Connect disparate systems and generate actionable insights through automated data processing.",
      features: ["Multi-platform integration", "Real-time analytics", "Custom reporting"],
      color: "slate"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "AI-Powered Customer Support",
      description: "Deploy intelligent chatbots and support systems that handle queries 24/7 with human-like understanding.",
      features: ["Natural language processing", "Multi-channel support", "Escalation management"],
      color: "slate"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Voice Agent/AI Receptionist",
      description: "Automate all incoming phone calls with an intelligent voice agent that works 24/7 to handle customer inquiries and appointments.",
      features: ["24/7 call handling", "Appointment scheduling", "Call routing and screening"],
      color: "slate"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client Onboarding Automation",
      description: "Streamline client acquisition with automated workflows that ensure consistent, professional experiences.",
      features: ["Automated welcome sequences", "Document collection", "Progress tracking"],
      color: "slate"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Performance Monitoring",
      description: "Track, analyze, and optimize your automated processes with comprehensive monitoring and reporting.",
      features: ["Real-time dashboards", "Performance metrics", "Optimization suggestions"],
      color: "slate"
    }
  ];

  const getColorClasses = (color: string) => {
    return "bg-slate-100 text-slate-600 group-hover:bg-slate-600 group-hover:text-white";
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Comprehensive AI Automation Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From simple task automation to complex workflow orchestration, we provide end-to-end solutions 
            that transform how your business operates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className={`inline-flex p-3 rounded-xl mb-6 transition-all duration-300 ${getColorClasses(service.color)}`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-500">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Custom Solutions Section */}
        <div className="mt-16 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Have Something Custom in Mind?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Every business is unique. If you have specific automation needs that don't fit our standard services, 
            we'd love to create a custom solution just for you.
          </p>
          <button 
            onClick={onStartSurvey}
            className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            Discuss Custom Solution
          </button>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8">
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-700">80%</div>
                <div className="text-sm text-slate-600">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-700">50+</div>
                <div className="text-sm text-slate-600">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">95%</div>
                <div className="text-sm text-slate-600">Success Rate</div>
              </div>
            </div>
            <p className="text-slate-700 mb-6">
              Join dozens of companies that have transformed their operations with our AI automation solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;