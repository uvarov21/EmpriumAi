import React, { useState } from 'react';
import { Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send email to dresden@empriumai.com
    try {
      const emailData = {
        to: 'dresden@empriumai.com',
        subject: `New Contact Form Submission from ${formData.name}`,
        body: `
          Name: ${formData.name}
          Email: ${formData.email}
          Company: ${formData.company}
          Phone: ${formData.phone}
          Industry: ${formData.industry}
          Budget: ${formData.budget}
          Timeline: ${formData.timeline}
          Message: ${formData.message}
        `
      };
      
      // In a real application, you would send this to your backend
      console.log('Email data:', emailData);
      
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          industry: '',
          message: '',
          budget: '',
          timeline: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: ["dresden@empriumai.com", "dmitry@empriumai.com", "support@empriumai.com"],
      action: "Send Email"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: ["(740) 224-1931"],
      action: "Call Now"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Always Open"],
      action: "Schedule Call"
    }
  ];

  const industries = [
    "Marketing Agency",
    "SaaS Company", 
    "Financial Services",
    "Recruitment",
    "Legal Services",
    "Real Estate",
    "Healthcare",
    "E-commerce",
    "Manufacturing",
    "Other"
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+"
  ];

  const timelines = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Ready to Transform Your Canadian Business?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get in touch with our Canadian AI automation experts. We'll analyze your processes and show you exactly 
            how much time and money you can save.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Get Your Free Consultation</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-slate-800 mb-2">Thank You!</h4>
                <p className="text-slate-600">
                  We've received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      placeholder="john@company.ca"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                      placeholder="(740) 224-1931"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-2">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  >
                    <option value="">Select your industry</option>
                    {industries.map((industry, index) => (
                      <option key={index} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                      Project Budget (CAD)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Tell us about your automation needs *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent resize-none"
                    placeholder="Describe the manual processes you'd like to automate..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Get In Touch</h3>
              <p className="text-slate-600 mb-8">
                Have questions about AI automation? Want to discuss your specific needs? 
                Our team of Canadian experts is here to help you transform your business operations.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-slate-100 text-slate-600 p-3 rounded-lg">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-slate-600 text-sm">{detail}</p>
                      ))}
                      <button className="text-slate-600 hover:text-slate-700 text-sm font-medium mt-2 transition-colors duration-200">
                        {info.action} →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Preview */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h4 className="font-semibold text-slate-800 mb-4">Frequently Asked Questions</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-slate-800">How long does implementation take?</p>
                  <p className="text-slate-600">Most projects are completed within 2-8 weeks.</p>
                </div>
                <div>
                  <p className="font-medium text-slate-800">Do you provide ongoing support?</p>
                  <p className="text-slate-600">Yes, we offer 24/7 support and continuous optimization.</p>
                </div>
                <div>
                  <p className="font-medium text-slate-800">What's the typical ROI?</p>
                  <p className="text-slate-600">Our Canadian clients typically see 3-7x ROI within the first year.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;