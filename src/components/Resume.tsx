import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText, Eye } from 'lucide-react';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 
                       flex items-center justify-center glow-combined"
          >
            <FileText className="w-10 h-10 text-primary" />
          </motion.div>

          <h2 className="section-title">My Resume</h2>
          <p className="section-subtitle mx-auto mb-10">
            Download my resume to learn more about my education, skills, and experience
          </p>

          {/* Resume Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-2xl p-8 gradient-border"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#"
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Download Resume
              </motion.a>
              <motion.a
                href="#"
                className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={18} />
                View Online
              </motion.a>
            </div>

            {/* Resume Highlights */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Projects', value: '5+' },
                { label: 'Technologies', value: '15+' },
                { label: 'Experience', value: '2+ Years' },
                { label: 'Certifications', value: '3+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-background/50"
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
