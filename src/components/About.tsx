import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Rocket, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing scalable and maintainable code',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Efficient development workflow',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborative problem solving',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimized for speed & UX',
    gradient: 'from-pink-500 to-purple-500',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Feature card stagger
  const featureVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Mesh Background */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary/40 rounded-full animate-float" />
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
        >
          {/* LEFT SIDE - About Content */}
          <motion.div variants={cardVariants} className="space-y-6">
            {/* Glass Card with Content */}
            <div className="relative group">
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative glass-strong rounded-3xl p-8 lg:p-10 hover-lift">
                {/* Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mb-6"
                >
                  <h2 className="text-4xl lg:text-5xl font-bold mb-3">
                    <span className="gradient-text">About Me</span>
                  </h2>
                  <p className="text-xl text-primary/80 font-semibold">
                    Full Stack Developer
                  </p>
                </motion.div>

                {/* Content with highlighted keywords */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="space-y-4 text-muted-foreground leading-relaxed"
                >
                  <p className="text-base lg:text-lg">
                    I'm a passionate{' '}
                    <span className="gradient-text font-semibold">Full Stack Developer</span>{' '}
                    with expertise in building modern web applications. Specializing in the{' '}
                    <span className="gradient-text font-semibold">MERN stack</span>{' '}
                    (MongoDB, Express, React, Node.js), I create scalable, user-centric solutions
                    that solve real-world problems.
                  </p>

                  <p className="text-base lg:text-lg">
                    With a strong foundation in Data Structures and Algorithms, I approach every
                    project with a{' '}
                    <span className="gradient-text font-semibold">problem-solving</span>{' '}
                    mindset. I focus on clean architecture,{' '}
                    <span className="gradient-text font-semibold">performance optimization</span>,
                    and delivering high-quality software experiences.
                  </p>
                </motion.div>

                {/* Decorative gradient line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="mt-8 h-1 w-full bg-gradient-to-r from-primary via-secondary to-transparent rounded-full origin-left"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Feature Cards Grid */}
          <motion.div
            variants={cardVariants}
            className="grid grid-cols-2 gap-4 lg:gap-5"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={featureVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group"
                >
                  {/* Hover glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${feature.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`} />

                  {/* Card content */}
                  <div className="relative glass-strong rounded-2xl p-6 lg:p-7 h-full flex flex-col">
                    {/* Icon with gradient background */}
                    <div className="relative mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px] group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-full h-full rounded-xl bg-background/90 flex items-center justify-center">
                          <Icon className={`w-7 h-7 bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`} strokeWidth={2.5} />
                        </div>
                      </div>

                      {/* Floating animation on hover */}
                      <div className={`absolute inset-0 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                    </div>

                    {/* Text content */}
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Decorative corner accent */}
                    <div className="absolute top-3 right-3 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${feature.gradient} blur-md`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
