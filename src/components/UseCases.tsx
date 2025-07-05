import React from 'react';
import { Building2, Phone, Users2, TrendingUp, Clock, DollarSign } from 'lucide-react';

interface UseCasesProps {
  onStartSurvey: () => void;
}

const UseCases: React.FC<UseCasesProps> = ({ onStartSurvey }) => {
  const useCases = [
    {
      icon: <Building2 className="h-12 w-12" />,
      industry: "Canadian Marketing Agencies",
      title: "Campaign Management Automation",
      description: "Automate client reporting, campaign optimization, and lead nurturing workflows to increase client satisfaction and reduce manual work by 75% for Canadian marketing agencies.",
      benefits: [
        "Automated campaign performance reports",
        "Lead scoring and nurturing sequences",
        "Client communication workflows"
      ],
      metrics: {
        timeSaved: "30 hours/week",
        efficiency: "75%",
        roi: "300%"
      },
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
    },
    {
      icon: <Phone className="h-12 w-12" />,
      industry: "Canadian Business Services",
      title: "Voice Agent & Call Automation",
      description: "Deploy intelligent voice agents that handle all incoming calls 24/7, schedule appointments, qualify leads, and provide customer support without human intervention.",
      benefits: [
        "24/7 automated call handling",
        "Intelligent appointment scheduling",
        "Lead qualification and routing"
      ],
      metrics: {
        timeSaved: "40 hours/week",
        efficiency: "90%",
        roi: "400%"
      },
      image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg"
    },
    {
      icon: <Users2 className="h-12 w-12" />,
      industry: "Canadian Recruitment Firms",
      title: "Candidate Screening & Matching",
      description: "Automate resume screening, candidate matching, and interview scheduling to place the right Canadian candidates faster while improving quality of hires across all provinces.",
      benefits: [
        "AI-powered resume screening",
        "Automated candidate matching",
        "Interview scheduling workflows"
      ],
      metrics: {
        timeSaved: "40 hours/week",
        efficiency: "70%",
        roi: "250%"
      },
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment",
      description: "We analyze your current business processes and identify automation opportunities"
    },
    {
      step: "02", 
      title: "Design",
      description: "Custom workflow design tailored to your specific business needs and regulations"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Seamless integration with your existing systems and Canadian compliance requirements"
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous monitoring and improvement of automated processes with support"
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Canadian Industry-Specific Use Cases
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how Canadian businesses like yours are leveraging AI automation to achieve remarkable results
          </p>
        </div>

        <div className="space-y-16">
          {useCases.map((useCase, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className="lg:w-1/2 relative">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-64 object-cover"
                  />
                  
                  {/* Mobile: Overlapping metrics cards */}
                  <div className="lg:hidden relative -mt-8 px-4 pb-6">
                    <div className="flex justify-center space-x-2">
                      <div className="bg-white rounded-xl shadow-lg p-4 text-center min-w-[90px] transform -rotate-2">
                        <div className="text-xl font-bold text-slate-700">{useCase.metrics.timeSaved}</div>
                        <div className="text-xs text-slate-500">Time Saved</div>
                      </div>
                      <div className="bg-white rounded-xl shadow-lg p-4 text-center min-w-[90px] transform rotate-1 z-10">
                        <div className="text-xl font-bold text-green-600">{useCase.metrics.efficiency}</div>
                        <div className="text-xs text-slate-500">More Efficient</div>
                      </div>
                      <div className="bg-white rounded-xl shadow-lg p-4 text-center min-w-[90px] transform -rotate-1">
                        <div className="text-xl font-bold text-slate-700">{useCase.metrics.roi}</div>
                        <div className="text-xs text-slate-500">ROI</div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop: Regular metrics layout */}
                  <div className="hidden lg:block p-6">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-slate-700">{useCase.metrics.timeSaved}</div>
                        <div className="text-sm text-slate-500">Time Saved</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">{useCase.metrics.efficiency}</div>
                        <div className="text-sm text-slate-500">More Efficient</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-700">{useCase.metrics.roi}</div>
                        <div className="text-sm text-slate-500">ROI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-slate-100 text-slate-600 p-3 rounded-xl">
                    {useCase.icon}
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 font-medium">{useCase.industry}</div>
                    <h3 className="text-2xl font-bold text-slate-800">{useCase.title}</h3>
                  </div>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed">
                  {useCase.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-800">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                        <span className="text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={onStartSurvey}
                  className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Explore This Solution
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Our Proven Canadian Process
            </h3>
            <p className="text-xl text-slate-600">
              From initial assessment to ongoing optimization, we ensure your Canadian business success every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-slate-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-2">{step.title}</h4>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Move Start Your Transformation here */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Start Your Transformation</h3>
            <p className="text-slate-600 mb-6">
              Join dozens of companies that have transformed their operations with our AI automation solutions.
            </p>
            <button 
              onClick={onStartSurvey}
              className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;