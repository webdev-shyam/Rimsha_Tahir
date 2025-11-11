import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Freelancer',
      duration: '1 Year',
      company: 'Self-Employed',
      description: 'WordPress & Shopify expert, specializing in Meta Ads, social media management, and store optimization. Worked with multiple clients across e-commerce and service-based businesses.',
      skills: ['WordPress', 'Shopify', 'Meta Ads', 'Social Media']
    },
    {
      title: 'Store Manager',
      duration: '6 Months',
      company: 'Zeenat Online Store',
      description: 'Managed daily operations, customer relationships, and digital marketing initiatives. Increased online visibility and sales through targeted campaigns.',
      skills: ['E-commerce', 'Digital Marketing', 'Customer Relations']
    },
    {
      title: 'E-Commerce Intern',
      duration: '6 Months',
      company: 'Google Biz',
      description: 'Gained hands-on experience in e-commerce strategy, product listing optimization, and digital marketing best practices from industry leaders.',
      skills: ['E-commerce', 'Digital Strategy', 'Analytics']
    },
    {
      title: 'Tutor',
      duration: '2 Years',
      company: 'Private & Home Tuition',
      description: 'Taught computer science and IT subjects to students. Developed strong communication and mentoring skills while staying updated with technology trends.',
      skills: ['Teaching', 'Communication', 'Problem-Solving']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-base">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            5+ years of combined experience in digital marketing, e-commerce, and technology
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className="bg-gradient-to-br from-accent/20 to-accentTeal/20 rounded-2xl p-8 border border-accent/30 hover:border-accent/60 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-accentTeal font-semibold">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 bg-accent/30 text-accent rounded-full text-sm font-medium">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-accent/40 text-accent text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block relative h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-accentTeal/20 to-accent/20 rounded-2xl"></div>
                  <img
                    src={[
                      'assets/freelance.jpg',
                      'assets/manager.jpg',
                      'assets/internship.jpg',
                      'assets/tutor.jpg'
                    ][index]}
                    alt={exp.title}
                    className="w-full h-full object-bottom rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
