
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Zap, Code, Database, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Custom AI models and machine learning solutions tailored to your business needs.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg'
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable, secure, and optimized cloud architecture for maximum performance.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg'
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Streamline workflows and reduce operational costs with intelligent automation.',
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Bespoke software development with cutting-edge technologies and frameworks.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg'
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Turn your data into actionable insights with advanced analytics and visualizations.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg'
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Make data-driven decisions with comprehensive BI solutions and dashboards.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg'
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = document.querySelectorAll('.reveal');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 150);
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
    <section id="services" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Cutting-edge solutions powered by the latest technologies to transform your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="reveal border border-gray-200 dark:border-gray-800 hover:border-electric-blue dark:hover:border-electric-blue transition-all duration-300 hover:shadow-lg bg-white dark:bg-navy overflow-hidden h-full flex flex-col">
                <motion.div 
                  className="h-56 overflow-hidden" 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <CardHeader className="flex-grow">
                  <div className="w-12 h-12 rounded-lg bg-electric-blue/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-electric-blue" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
