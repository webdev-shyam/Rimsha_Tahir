import { motion } from 'framer-motion';

const PortfolioHero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6  lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accentTeal/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center mt-10">
          <motion.div {...fadeIn}>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <h2 className="block bg-gradient-to-r from-accentTeal to-accent bg-clip-text text-transparent">Rimsha Tahir,</h2>
              Meta Certified
              <span className="block bg-gradient-to-r from-accent to-accentTeal bg-clip-text text-transparent">
                Digital Marketing Expert
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              Helping brands grow through powerful digital strategies. Meta Ads specialist with expertise in E-commerce, WordPress, Shopify, and AI-powered content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-accent to-accentTeal text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-accent/50 transition-all inline-block text-center"
              >
                Hire Me
              </a>
              <a
                href="#experience"
                className="px-8 py-4 border-2 border-accentTeal text-accentTeal rounded-lg font-semibold hover:bg-accentTeal/10 transition-all text-center"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="assets/hero.jpg"
                alt="Rimsha Tahir - Digital Marketing Expert"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/80 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-accentTeal/20 rounded-full blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
