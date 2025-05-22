
import { motion } from 'framer-motion';

const LinkedInBanner = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src="https://systitsoftwebsite.blob.core.windows.net/websitecontainer/companylogo/linked-in-banner.png"
            alt="SYST IT SOFT LinkedIn Banner"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LinkedInBanner;
