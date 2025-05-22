import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-navy">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions or want to discuss your project? Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
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

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
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
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div className="flex flex-col gap-6">
            <div className="aspect-video w-full h-64 rounded-lg mb-6 overflow-hidden">
              {/* Google Maps iframe with pinned location */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.664392392685!2d76.97168!3d10.92826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU1JzQyLjEiTiA3NsKwNTgnMTguMSJF!5e0!3m2!1sen!2sin!4v1698765432109!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Rathinam Techzone Pinned Location"
              ></iframe>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="bg-white dark:bg-gray-800">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-electric-blue" />
                  </div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:info@systitsoft.com" className="text-electric-blue hover:underline">
                    contact@systitsoft.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-electric-blue" />
                  </div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:+11234567890" className="text-electric-blue hover:underline">
                    +91 7639321123
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 shadow-md rounded-2xl w-full max-w-md mx-auto">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-electric-blue/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-electric-blue" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Address</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-[10px] leading-relaxed">
                    SF. No. 653/1A3B, AIC Raise Business Incubator,<br />
                    Rathinam Techzone, Eachanari,<br />
                    Coimbatore, Tamil Nadu, India – 641021
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;