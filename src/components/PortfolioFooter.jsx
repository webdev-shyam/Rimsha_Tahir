import { motion } from 'framer-motion';

const PortfolioFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base border-t border-accent/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center gap-8 mb-8">
            <a
              href="#home"
              className="text-gray-400 hover:text-accentTeal transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-accentTeal transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-400 hover:text-accentTeal transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-accentTeal transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="border-t border-accent/20 pt-6">
            <p className="text-gray-400 mb-2">
              © {currentYear} Rimsha Tahir. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Developed by <span className="text-accentTeal font-semibold">Web Wise Agency</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
