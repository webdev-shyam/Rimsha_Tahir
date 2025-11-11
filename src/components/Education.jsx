import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'BS in Information Technology',
      institution: 'GCUF (Government College University Faisalabad)',
      cgpa: 'CGPA: 3.36/4.0',
      year: '2023',
      icon: '🎓'
    },
    {
      degree: 'FSC (Pre-Engineering)',
      institution: 'Faisalabad Board',
      cgpa: 'Distinction',
      year: '2020',
      icon: '📚'
    },
    {
      degree: 'Matric (Science)',
      institution: 'Faisalabad Board',
      cgpa: 'Distinction',
      year: '2018',
      icon: '✨'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-base">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-gray-400 text-lg">
            Strong academic foundation in IT and technical subjects
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-r from-accent/20 to-accentTeal/20 rounded-xl p-8 border border-accent/20 hover:border-accent/60 transition-all hover:shadow-lg hover:shadow-accent/20">
                <div className="flex items-start gap-6">
                  <div className="text-4xl flex-shrink-0">{edu.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-accent/30 text-accent text-sm font-medium rounded-full w-fit">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-accentTeal font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-gray-300">
                      {edu.cgpa}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-accentTeal/10 to-accent/10 rounded-xl p-8 border border-accentTeal/30"
        >
          <p className="text-center text-gray-300">
            Continuous learning and professional development through online certifications and industry-recognized courses in digital marketing and e-commerce.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
