import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Project Experience',
    location: 'Remote',
    period: '2023 - Present',
    description: 'Building production-ready web applications using modern technologies and best practices.',
    achievements: [
      'Developed 5+ full-stack applications with React, Node.js, and MongoDB',
      'Implemented secure authentication systems with JWT and OAuth',
      'Built RESTful APIs handling 10,000+ requests efficiently',
      'Created responsive, accessible UIs with modern CSS frameworks',
      'Integrated third-party services like payment gateways and email services',
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle mx-auto">
            My journey building real-world applications
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block" />

              <div className="glass rounded-2xl p-8 hover-lift ml-0 md:ml-20">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-10 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-background" />
                </div>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 md:ml-auto text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{exp.description}</p>

                {/* Achievements */}
                <div className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{achievement}</span>
                    </motion.div>
                  ))}
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
