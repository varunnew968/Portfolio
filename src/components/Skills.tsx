import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiNpm
} from 'react-icons/si';

// Tech stack with official brand logos
const skillDepartments = [
  {
    title: 'Frontend',
    color: 'from-cyan-400 via-blue-500 to-purple-500',
    dotColor: 'bg-cyan-400',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    ],
  },
  {
    title: 'Backend',
    color: 'from-green-400 via-emerald-500 to-teal-500',
    dotColor: 'bg-green-400',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#000000' },
      { name: 'REST API', icon: null, color: '#FF6B6B' }, // No official logo
      { name: 'JWT', icon: null, color: '#000000' }, // No official logo
    ],
  },
  {
    title: 'Database',
    color: 'from-orange-400 via-red-500 to-pink-500',
    dotColor: 'bg-orange-400',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Mongoose', icon: null, color: '#880000' }, // No official logo
    ],
  },
  {
    title: 'Tools',
    color: 'from-purple-400 via-pink-500 to-rose-500',
    dotColor: 'bg-purple-400',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'VS Code', icon: null, color: '#007ACC' },
      { name: 'npm', icon: SiNpm, color: '#CB3837' },
    ],
  },
  {
    title: 'Core',
    color: 'from-yellow-400 via-orange-500 to-red-500',
    dotColor: 'bg-yellow-400',
    skills: [
      { name: 'Data Structures', icon: null, color: '#4CAF50' },
      { name: 'Algorithms', icon: null, color: '#2196F3' },
      { name: 'Problem Solving', icon: null, color: '#FF9800' },
      { name: 'OOP', icon: null, color: '#9C27B0' },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Mesh */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              top: `${20 + i * 15}% `,
              left: `${10 + i * 20}% `,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle mx-auto mt-4">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Department Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {skillDepartments.map((department, deptIndex) => (
            <motion.div
              key={department.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.01,
                y: -4,
                transition: {
                  duration: 0.3,
                  ease: 'easeOut' as const
                }
              }}
              className="relative group"
            >
              {/* Subtle gradient border glow */}
              <div className={`absolute - inset - 0.5 bg - gradient - to - br ${department.color} rounded - 3xl blur - sm opacity - 0 group - hover: opacity - 30 transition - opacity duration - 300`} />

              {/* Card content */}
              <div className="relative glass-strong rounded-3xl p-8 h-full flex flex-col min-h-[340px] backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                {/* Department Header */}
                <div className="flex items-center gap-3 mb-8">
                  <motion.div
                    className={`w - 3 h - 3 rounded - full ${department.dotColor} `}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <h3 className="text-2xl font-bold text-foreground">
                    {department.title}
                  </h3>
                </div>

                {/* Subtle gradient background */}
                <div className={`absolute top - 0 right - 0 w - 40 h - 40 bg - gradient - to - br ${department.color} opacity - 5 rounded - full blur - 3xl`} />

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-3 flex-1">
                  {department.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          delay: deptIndex * 0.1 + skillIndex * 0.05,
                          duration: 0.4,
                          ease: 'easeOut' as const
                        }}
                        whileHover={{
                          scale: 1.05,
                          transition: {
                            duration: 0.2,
                            ease: 'easeOut' as const
                          }
                        }}
                        className="relative group/badge cursor-pointer"
                      >
                        {/* Subtle badge glow on hover */}
                        <motion.div
                          className="absolute -inset-0.5 rounded-full blur-sm opacity-0 group-hover/badge:opacity-40 transition-opacity duration-200"
                          style={{
                            background: `radial - gradient(circle, ${skill.color}30, transparent 70 %)`
                          }}
                        />

                        {/* Badge content */}
                        <div className="relative glass rounded-full px-4 py-2.5 flex items-center gap-2.5 border border-white/10 group-hover/badge:border-white/20 group-hover/badge:bg-white/5 transition-all duration-200 shadow-sm">
                          {Icon ? (
                            <Icon
                              className="text-xl"
                              style={{ color: skill.color }}
                            />
                          ) : (
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: skill.color }}
                            />
                          )}
                          <span className="text-sm font-semibold text-foreground/90 whitespace-nowrap">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Subtle decorative corner accent */}
                <div className="absolute bottom-6 right-6 w-20 h-20 opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                  <div className={`w - full h - full rounded - full bg - gradient - to - br ${department.color} blur - 2xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-20 flex justify-center"
        >
          <motion.div
            className="inline-flex items-center gap-3 glass-strong rounded-full px-8 py-4 border border-white/10 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span className="text-muted-foreground font-medium text-lg">Always learning and growing</span>
            <motion.span
              className="text-3xl"
              animate={{
                rotate: [0, 10, -10, 0],
                y: [0, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'easeInOut'
              }}
            >
              🚀
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
