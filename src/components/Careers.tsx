import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Cpu, Network, Bot, Brain, Cloud, Wrench } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface JobOpening {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  resume: File | null;
  coverLetter: string;
}

const jobOpenings: JobOpening[] = [
  {
    icon: Code,
    title: 'Software Engineer',
    description: 'Develop cutting-edge software solutions using modern frameworks to drive innovation in industrial applications.',
    color: 'from-indigo-500 to-blue-400'
  },
  {
    icon: Brain,
    title: 'AI Research Scientist',
    description: 'Design and implement small language models and AI solutions for industrial efficiency and automation.',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    icon: Cloud,
    title: 'Cloud Architect',
    description: 'Build scalable and secure cloud infrastructure using Azure, AWS, and GCP for enterprise clients.',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    icon: Network,
    title: 'IIoT Engineer',
    description: 'Develop IoT solutions for industrial processes, integrating sensors and cloud platforms like AWS IoT.',
    color: 'from-green-500 to-emerald-400'
  },
  {
    icon: Bot,
    title: 'Robotics Engineer',
    description: 'Create robotics and automation systems to streamline operations and enhance productivity.',
    color: 'from-red-500 to-rose-400'
  },
  {
    icon: Wrench,
    title: 'R&D Engineer',
    description: 'Innovate hardware and electronics solutions for industrial challenges, from prototyping to production.',
    color: 'from-gray-500 to-gray-400'
  }
];

const Careers = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: ''
  });
  const [selectedJob, setSelectedJob] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { toast } = useToast();
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.size > 5 * 1024 * 1024) { // Limit to 5MB
      toast({
        title: "Error",
        description: "Resume file size must be less than 5MB.",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }
    if (file && !file.type.includes('pdf')) {
      toast({
        title: "Error",
        description: "Please upload a PDF file.",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) {
      toast({
        title: "Error",
        description: "Please select a job opening to apply for.",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    setIsSubmitting(true);
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('jobTitle', selectedJob);
    formDataToSend.append('coverLetter', formData.coverLetter);
    if (formData.resume) {
      formDataToSend.append('resume', formData.resume);
    }

    try {
      // Mock API call (replace with your actual endpoint)
      const response = await fetch('/api/careers/apply', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        toast({
          title: "Application Submitted!",
          description: "Thank you for applying. We'll review your application and get back to you soon.",
          duration: 5000,
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          resume: null,
          coverLetter: ''
        });
        setSelectedJob('');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="careers" ref={sectionRef} className="py-20 bg-white dark:bg-navy">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Join SYST IT SOFT</span>
          </h2>
          <p className="text-xl font-medium text-gray-600 dark:text-gray-300">
            Organize. Systemize. Succeed.
          </p>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Be part of our R&D-driven team, innovating in AI, cloud, IoT, and robotics to transform industries.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-navy dark:text-white">Open Positions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="reveal border-0 shadow-md hover:shadow-lg transition-shadow duration-500 hover:border-electric-blue dark:hover:border-electric-blue bg-white dark:bg-navy group overflow-hidden h-full flex flex-col">
                  <CardContent className="p-6 flex-grow">
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${job.color} flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}>
                      <job.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-vibrant-red mb-3 group-hover:text-electric-blue transition-colors duration-300">{job.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>
                    <Button
                      className="bg-electric-blue hover:bg-blue-600 text-white"
                      onClick={() => setSelectedJob(job.title)}
                    >
                      Apply Now
                    </Button>
                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-tr from-electric-blue/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-navy/60 p-8 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold mb-6 text-navy dark:text-white">Apply Now{selectedJob ? ` for ${selectedJob}` : ''}</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Resume (PDF, max 5MB)
                </label>
                <Input
                  id="resume"
                  name="resume"
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Cover Letter
              </label>
              <Textarea
                id="coverLetter"
                name="coverLetter"
                rows={5}
                value={formData.coverLetter}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-electric-blue hover:bg-blue-600 text-white py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Careers;