import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  onStartSurvey: () => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onStartSurvey }) => {
  const testimonials = [
    {
      name: "David Thompson",
      role: "CEO, MarketBoost Agency",
      company: "Marketing Agency - Toronto",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      rating: 5,
      quote: "EmpriumAutomations transformed our client reporting process completely. What used to take our team 20 hours a week now happens automatically. Our Canadian clients are happier, and we're more profitable.",
      metrics: {
        timeSaved: "75%",
        efficiency: "3x faster",
        roi: "400% ROI"
      }
    },
    {
      name: "Michael Chen",
      role: "Founder, TalentMatch Pro",
      company: "Recruitment - Calgary",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
      rating: 5,
      quote: "Our candidate screening process is now lightning fast. We're placing 3x more candidates across Canada with better matches. The AI really understands what we're looking for.",
      metrics: {
        timeSaved: "70%",
        efficiency: "3x placements",
        roi: "300% ROI"
      }
    },
    {
      name: "Amanda Foster",
      role: "VP Operations, PropertyPro",
      company: "Real Estate - Halifax",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      rating: 5,
      quote: "Lead qualification and follow-up automation has doubled our conversion rate in the Canadian market. Our agents can focus on closing deals instead of administrative tasks.",
      metrics: {
        timeSaved: "60%",
        efficiency: "2x conversions",
        roi: "350% ROI"
      }
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            What Our Canadian Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the Canadian companies that have transformed their operations with our AI automation solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                  <p className="text-xs text-slate-600">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <div className="relative mb-6">
                <Quote className="h-8 w-8 text-slate-200 absolute -top-2 -left-2" />
                <p className="text-slate-700 italic pl-6">"{testimonial.quote}"</p>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-lg font-bold text-slate-700">{testimonial.metrics.timeSaved}</div>
                    <div className="text-xs text-slate-500">Time Saved</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">{testimonial.metrics.efficiency}</div>
                    <div className="text-xs text-slate-500">Efficiency</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-700">{testimonial.metrics.roi}</div>
                    <div className="text-xs text-slate-500">ROI</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Proven Results Across Canadian Industries</h3>
            <p className="text-slate-600">Average improvements our Canadian clients experience within 90 days</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-700 mb-2">68%</div>
              <div className="text-slate-600">Average Time Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">2.7x</div>
              <div className="text-slate-600">Efficiency Improvement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-700 mb-2">350%</div>
              <div className="text-slate-600">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">96%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">Ready to Join Them?</h3>
          <p className="text-xl text-slate-600 mb-8">
            See why dozens of Canadian companies trust EmpriumAutomations to transform their operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onStartSurvey}
              className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;