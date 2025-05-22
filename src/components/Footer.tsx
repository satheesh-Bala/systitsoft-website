
import { Github, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <a href="#" className="flex items-center">
                <img
                  src="https://systitsoftwebsite.blob.core.windows.net/websitecontainer/companylogo/full-logo-white.png"
                  alt="SYST IT SOFT"
                  className="h-10"
                />
              </a>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming businesses through cutting-edge AI, cloud infrastructure, and intelligent automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">AI Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">Cloud Infrastructure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">Custom Software</a></li>
              <li><a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">Data Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-electric-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">Press</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-electric-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} SYST IT SOFT. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-500 hover:text-electric-blue text-sm">Privacy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-electric-blue text-sm">Terms</a></li>
                <li><a href="#" className="text-gray-500 hover:text-electric-blue text-sm">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
