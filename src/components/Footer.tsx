import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Process Automation',
    'Data Integration',
    'AI Customer Support',
    'Voice Agent/AI Receptionist',
    'Client Onboarding',
    'Performance Monitoring'
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // In a real application, you would send this to your backend
      console.log('Newsletter subscription:', email);
      
      setIsSubscribed(true);
      setEmail('');
      
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
    }
  };

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-slate-600 to-slate-700 p-2 rounded-lg">
                <span className="text-white font-bold text-sm">EA</span>
              </div>
              <span className="text-xl font-bold">EmpriumAutomations</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Transforming Canadian businesses through intelligent automation. We help agencies, SaaS companies, 
              and firms achieve unprecedented efficiency with our AI-powered solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">dresden@empriumai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">(740) 224-1931</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">Barrie, Canada</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-300 hover:text-slate-100 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-slate-300 hover:text-slate-100 transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-slate-300">
                Get the latest insights on AI automation and Canadian business trends delivered to your inbox.
              </p>
            </div>
            <div>
              {isSubscribed ? (
                <div className="text-green-400 font-medium">
                  Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex space-x-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  />
                  <button 
                    type="submit"
                    className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-300 text-sm mb-4 md:mb-0">
            © 2025 EmpriumAutomations. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;