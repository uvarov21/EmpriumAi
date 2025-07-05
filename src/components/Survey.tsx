import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

interface SurveyProps {
  onClose: () => void;
}

const Survey: React.FC<SurveyProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    budget: '',
    problem: '',
    customProblem: ''
  });

  const totalSteps = 4;

  const problems = [
    'Manual data entry and processing',
    'Customer service and support',
    'Lead generation and qualification',
    'Document processing and management',
    'Appointment scheduling and management',
    'Email marketing and follow-ups',
    'Inventory management',
    'Financial reporting and analysis',
    'Other'
  ];

  const budgetOptions = [
    'Under $1,000',
    '$1,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      // Send email to dresden@empriumai.com
      const emailData = {
        to: 'dresden@empriumai.com',
        subject: `New Survey Submission from ${formData.name}`,
        body: `
          Name: ${formData.name}
          Company: ${formData.company}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Budget: ${formData.budget}
          Problem: ${formData.problem}
          ${formData.problem === 'Other' ? `Custom Problem: ${formData.customProblem}` : ''}
        `
      };
      
      // In a real application, you would send this to your backend
      console.log('Survey data:', emailData);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting survey:', error);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name.trim() !== '' && formData.company.trim() !== '';
      case 2:
        return formData.email.trim() !== '' && formData.phone.trim() !== '';
      case 3:
        return formData.budget !== '';
      case 4:
        return formData.problem !== '' && (formData.problem !== 'Other' || formData.customProblem.trim() !== '');
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Let's get to know you</h2>
              <p className="text-slate-600">Tell us about yourself and your company</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Company Name *</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your Company"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">How can we reach you?</h2>
              <p className="text-slate-600">We'll use this information to send you your custom automation plan</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200"
                  placeholder="(740) 224-1931"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">What's your budget?</h2>
              <p className="text-slate-600">This helps us recommend the best solution for your needs</p>
            </div>
            <div className="space-y-3">
              {budgetOptions.map((option, index) => (
                <label key={index} className="flex items-center p-4 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50 transition-all duration-200">
                  <input
                    type="radio"
                    name="budget"
                    value={option}
                    checked={formData.budget === option}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="mr-3 text-slate-600"
                  />
                  <span className="text-slate-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">What challenges are you facing?</h2>
              <p className="text-slate-600">Select the main problem you'd like to solve with automation</p>
            </div>
            <div className="space-y-3">
              {problems.map((problem, index) => (
                <label key={index} className="flex items-center p-4 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50 transition-all duration-200">
                  <input
                    type="radio"
                    name="problem"
                    value={problem}
                    checked={formData.problem === problem}
                    onChange={(e) => handleInputChange('problem', e.target.value)}
                    className="mr-3 text-slate-600"
                  />
                  <span className="text-slate-700">{problem}</span>
                </label>
              ))}
            </div>
            {formData.problem === 'Other' && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">Please describe your specific challenge</label>
                <textarea
                  value={formData.customProblem}
                  onChange={(e) => handleInputChange('customProblem', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 resize-none"
                  rows={3}
                  placeholder="Describe your specific automation needs..."
                />
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const renderConfirmation = () => {
    return (
      <div className="text-center py-12">
        <div className="mb-8">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Thank You!</h2>
          <p className="text-xl text-slate-600 mb-6">
            We've received your information and will be in touch within 24 hours.
          </p>
        </div>
        
        <div className="bg-slate-50 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">What happens next?</h3>
          <div className="space-y-3 text-left">
            <div className="flex items-start space-x-3">
              <div className="bg-slate-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
              <div>
                <p className="font-medium text-slate-800">Initial Review</p>
                <p className="text-sm text-slate-600">Our team will review your requirements and prepare a custom automation plan.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-slate-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
              <div>
                <p className="font-medium text-slate-800">Consultation Call</p>
                <p className="text-sm text-slate-600">We'll schedule a 30-minute call to discuss your specific needs and answer questions.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-slate-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
              <div>
                <p className="font-medium text-slate-800">Custom Proposal</p>
                <p className="text-sm text-slate-600">Receive a detailed proposal with timeline, pricing, and expected ROI.</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-slate-700 hover:to-slate-800 transition-all duration-200"
        >
          Close
        </button>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform animate-slideUp">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-2 rounded-lg">
                <span className="text-white font-bold text-sm">EA</span>
              </div>
              <span className="text-xl font-bold text-slate-800">EmpriumAutomations</span>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {isSubmitted ? (
            renderConfirmation()
          ) : (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-slate-600 mb-2">
                  <span>Step {currentStep} of {totalSteps}</span>
                  <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-slate-600 to-slate-700 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Step Content */}
              <div className="min-h-[400px] flex flex-col justify-center">
                {renderStep()}
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    currentStep === 1
                      ? 'text-slate-400 cursor-not-allowed'
                      : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span>Previous</span>
                </button>

                {currentStep === totalSteps ? (
                  <button
                    onClick={handleSubmit}
                    disabled={!isStepValid()}
                    className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isStepValid()
                        ? 'bg-gradient-to-r from-slate-600 to-slate-700 text-white hover:from-slate-700 hover:to-slate-800 transform hover:scale-105'
                        : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    <span>Get My Custom Plan</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isStepValid()
                        ? 'bg-gradient-to-r from-slate-600 to-slate-700 text-white hover:from-slate-700 hover:to-slate-800 transform hover:scale-105'
                        : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    <span>Next</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Survey;