import { motion } from 'framer-motion';

const PortfolioAbout = () => {
  const qualities = [
    { icon: '⚡', label: 'Self-Motivated' },
    { icon: '🎨', label: 'Creative' },
    { icon: '💡', label: 'Innovative' },
    { icon: '🔧', label: 'Problem-Solver' },
    { icon: '🎯', label: 'Decision-Maker' },
    { icon: '📊', label: 'Data-Driven' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-base">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <img
              src="assets/about.jpg"
              alt="Rimsha working on digital marketing strategy"
              className="rounded-2xl w-full h-auto object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/30 rounded-full blur-2xl -z-10"></div>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 text-gray-300 mb-8 leading-relaxed"
            >
              <p>
                I'm a Meta Certified Digital Marketing Expert with a Bachelor's degree in Information Technology from GCUF.
                With expertise spanning Meta Ads, E-commerce, WordPress, Shopify, and Canva AI content creation, I specialize
                in helping brands establish powerful digital presence.
              </p>
              <p>
                My approach combines strategic thinking with creative execution. I'm passionate about understanding market dynamics,
                consumer behavior, and leveraging cutting-edge digital tools to deliver measurable results for my clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-sm font-semibold text-accent uppercase mb-6 tracking-wide">
                Key Qualities
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {qualities.map((quality, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-accent/10 rounded-lg p-4 text-center hover:bg-accent/20 transition-colors"
                  >
                    <div className="text-3xl mb-2">{quality.icon}</div>
                    <p className="text-sm font-medium text-gray-200">{quality.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioAbout;
