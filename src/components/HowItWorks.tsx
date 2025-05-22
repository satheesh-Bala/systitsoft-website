
import { Check, ArrowDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We analyze your business needs and challenges to determine the best technological solution.'
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Our experts develop a tailored roadmap with clear milestones and deliverables.'
  },
  {
    number: '03',
    title: 'Development',
    description: 'Our team implements the solution using agile methodologies and cutting-edge tech.'
  },
  {
    number: '04',
    title: 'Deployment',
    description: 'We seamlessly integrate the solution into your existing infrastructure and workflows.'
  },
  {
    number: '05',
    title: 'Support',
    description: 'Ongoing maintenance, updates, and support to ensure optimal performance.'
  }
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            const timelineItems = document.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('active');
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 bg-white dark:bg-navy">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our streamlined process ensures efficient delivery of cutting-edge solutions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Timeline items */}
          {steps.map((step, index) => (
            <div 
              key={index}
              className="timeline-item reveal opacity-0 mb-16 last:mb-0 relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* Circle indicator */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-electric-blue flex items-center justify-center z-10">
                <Check className="w-5 h-5 text-white" />
              </div>
              
              {/* Content */}
              <div className={`md:text-right ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-electric-blue font-bold text-xl mb-2">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </div>
              
              <div className={`hidden md:block ${index % 2 === 1 ? 'md:order-1' : ''}`}></div>
              
              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-6">
                  <ArrowDown className="w-6 h-6 text-electric-blue" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
