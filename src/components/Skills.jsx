import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Digital Marketing',
      skills: ['Meta Ads', 'Facebook Ads', 'Instagram Ads', 'Campaign Management', 'Analytics'],
      icon: '📱'
    },
    {
      category: 'E-Commerce & Platforms',
      skills: ['Shopify', 'WordPress', 'WooCommerce', 'Store Optimization', 'Product Listing'],
      icon: '🛒'
    },
    {
      category: 'Content Creation',
      skills: ['Canva AI', 'Graphic Design', 'Video Editing', 'Social Media Content', 'AI Tools'],
      icon: '🎨'
    },
    {
      category: 'Technical Skills',
      skills: ['C++', 'Computer Science', 'Data Analysis', 'SEO', 'Google Analytics'],
      icon: '💻'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-base via-base to-accent/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive skill set across digital marketing, e-commerce, and content creation
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-accent/10 to-accentTeal/10 rounded-xl p-6 border border-accent/20 hover:border-accent/60 transition-all hover:shadow-xl hover:shadow-accent/20">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="flex items-center text-gray-300 group-hover:text-accentTeal transition-colors"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-accent/20 to-accentTeal/20 rounded-2xl p-8 border border-accent/30"
        >
          <div className="text-center">
            <p className="text-gray-400 mb-4">Certified by:</p>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <div className="px-6 py-3 bg-accent/30 rounded-lg">
                <p className="font-semibold text-accentTeal">Meta Certified Professional</p>
              </div>
              <div className="px-6 py-3 bg-accentTeal/30 rounded-lg">
                <p className="font-semibold text-accent">Digital Marketing Expert</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
