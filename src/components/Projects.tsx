import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Online Voting Platform',
    description: 'A secure digital voting system featuring real-time result tracking, voter authentication, and a comprehensive admin dashboard for managing elections.',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=600&h=400&fit=crop',
    live: 'https://online-voting-platform-6j77.vercel.app/',
    featured: true,
  },
  {
    id: 2,
    title: 'Cloud Kitchen',
    description: 'Full-featured food ordering system with live order tracking, payment integration, and an admin panel for restaurant management.',
    tech: ['React', 'Express', 'MongoDB', 'Stripe', 'Redis'],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
    live: 'https://cloud-kitchen-phi-three.vercel.app/',
    featured: true,
  },
  {
    id: 3,
    title: 'Service Booking Platform',
    description: 'Platform for booking home services with flexible time slots, secure payments, and personalized user dashboards.',
    tech: ['React', 'Node.js', 'MySQL', 'Razorpay', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop',
    live: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Movie Explorer App',
    description: 'React application integrating TMDB API with advanced filtering, personal watchlists, and user authentication.',
    tech: ['React', 'TMDB API', 'Firebase', 'Redux', 'Styled Components'],
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop',
    live: 'https://movie-explorer-app-eosin.vercel.app/',
    featured: false,
  },
  {
    id: 5,
    title: 'Smart Campus System',
    description: 'Comprehensive campus management portal with student/admin dashboards, attendance tracking, and resource management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Bootstrap'],
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
    live: 'https://smart-campus-management-system-two.vercel.app/',
    featured: false,
  },
];

const ProjectCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative glass rounded-2xl overflow-hidden hover-lift ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''
        }`}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

        {/* Live Demo Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-md">
          <motion.a
            href={project.live}
            className="relative px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold flex items-center gap-2 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75" />
            <span className="relative">Live Demo</span>
            <ExternalLink size={18} className="relative" />
          </motion.a>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight
            size={20}
            className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
          />
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>


      </div>
    </section>
  );
};

export default Projects;
