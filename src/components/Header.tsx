import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onStartSurvey: () => void;
}

const Header: React.FC<HeaderProps> = ({ onStartSurvey }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { 
      name: 'Home', 
      href: '#home',
      dropdownItems: []
    },
    { 
      name: 'Services', 
      href: '#services',
      dropdownItems: [
        { name: 'Process Automation', href: '#services' },
        { name: 'Data Integration', href: '#services' },
        { name: 'AI Customer Support', href: '#services' },
        { name: 'Voice Agent/AI Receptionist', href: '#services' },
        { name: 'Client Onboarding', href: '#services' },
        { name: 'Performance Monitoring', href: '#services' }
      ]
    },
    { 
      name: 'Use Cases', 
      href: '#use-cases',
      dropdownItems: [
        { name: 'Marketing Agencies', href: '#use-cases' },
        { name: 'Business Services', href: '#use-cases' },
        { name: 'Recruitment Firms', href: '#use-cases' }
      ]
    },
    { 
      name: 'About', 
      href: '#about',
      dropdownItems: []
    },
    { 
      name: 'Testimonials', 
      href: '#testimonials',
      dropdownItems: []
    },
    { 
      name: 'Contact', 
      href: '#contact',
      dropdownItems: []
    }
  ];

  const smoothScrollTo = (elementId: string) => {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleNavClick = (href: string) => {
    smoothScrollTo(href);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-2 rounded-lg">
              <span className="text-white font-bold text-sm">EA</span>
            </div>
            <span className="text-xl font-bold text-slate-800">EmpriumAutomations</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() => {
                    if (item.dropdownItems.length > 0) {
                      toggleDropdown(item.name);
                    } else {
                      handleNavClick(item.href);
                    }
                  }}
                  className="flex items-center space-x-1 text-slate-700 hover:text-slate-800 font-medium transition-colors duration-200"
                >
                  <span>{item.name}</span>
                  {item.dropdownItems.length > 0 && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>
                
                {item.dropdownItems.length > 0 && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50 animate-fadeIn">
                    {item.dropdownItems.map((dropdownItem, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavClick(dropdownItem.href)}
                        className="block w-full text-left px-4 py-2 text-slate-600 hover:text-slate-800 hover:bg-slate-50 transition-colors duration-200"
                      >
                        {dropdownItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button 
              onClick={onStartSurvey}
              className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-slate-800" />
            ) : (
              <Menu className="h-6 w-6 text-slate-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 animate-slideDown">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => {
                      if (item.dropdownItems.length > 0) {
                        toggleDropdown(item.name);
                      } else {
                        handleNavClick(item.href);
                      }
                    }}
                    className="flex items-center justify-between text-slate-700 hover:text-slate-800 font-medium transition-colors duration-200 px-2 w-full text-left"
                  >
                    <span>{item.name}</span>
                    {item.dropdownItems.length > 0 && (
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>
                  {item.dropdownItems.length > 0 && activeDropdown === item.name && (
                    <div className="ml-4 mt-2 space-y-2 animate-fadeIn">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <button
                          key={index}
                          onClick={() => handleNavClick(dropdownItem.href)}
                          className="block text-slate-600 hover:text-slate-800 text-sm transition-colors duration-200 px-2"
                        >
                          {dropdownItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button 
                onClick={onStartSurvey}
                className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 mx-2 mt-4"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;