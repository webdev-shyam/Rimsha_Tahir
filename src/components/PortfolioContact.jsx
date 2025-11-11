import { FaFacebook, FaInbox, FaInstagram, FaLinkedin, FaLocationPin, FaMobile } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { useState } from 'react';

const PortfolioContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:tahirramshatahir@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'tahirramshatahir@gmail.com',
      href: 'mailto:tahirramshatahir@gmail.com',
      icon:   <FaInbox/>
    },
    {
      label: 'Phone',
      value: '+92 307 1969455',
      href: 'tel:+923071969455',
      icon: <FaMobile />
    },
    {
      label: 'Location',
      value: 'Zahid Town, Shani Road, Faisalabad',
      href: '#',
      icon:  <FaLocationPin />
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      url: 'https://facebook.com'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://instagram.com'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-base via-accent/5 to-base">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your next project or need digital marketing consultation? Get in touch!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-accent/20 to-accentTeal/20 rounded-xl p-6 border border-accent/20 hover:border-accent/60 transition-all h-full">
                <div className="text-4xl mb-4">{info.icon}</div>
                <p className="text-sm text-gray-400 mb-2">{info.label}</p>
                <p className="text-white font-semibold group-hover:text-accentTeal transition-colors">
                  {info.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-accent/10 border border-accent/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-accent/10 border border-accent/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-accent/10 border border-accent/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-accent/10 border border-accent/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-accent to-accentTeal text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-accent/50 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-accent/20 to-accentTeal/20 rounded-xl p-8 border border-accent/20">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Response</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I typically respond to inquiries within 24 hours. Whether you need help with social media strategy, e-commerce setup, or Meta Ads optimization, I'm here to help!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-accentTeal">✓</div>
                  <p className="text-gray-300">Personalized strategy consultation</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-accentTeal">✓</div>
                  <p className="text-gray-300">Custom quote based on project scope</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-accentTeal">✓</div>
                  <p className="text-gray-300">No hidden fees or surprise charges</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accentTeal/20 to-accent/20 rounded-xl p-8 border border-accentTeal/20">
              <h3 className="text-xl font-bold text-white mb-4">Follow My Work</h3>
              <p className="text-gray-300 mb-6">
                Connect with me on social media for daily digital marketing tips and insights.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-accent/30 hover:bg-accent/50 rounded-lg flex items-center justify-center transition-colors text-xl"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioContact;
