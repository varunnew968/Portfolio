import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Send } from 'lucide-react';
import { useRef } from 'react';
import profileImage from '@/assets/profile-photo.jpeg';

// Tech stack icons data with positions for orbital animation
const techStack = [
    { name: 'React', icon: '⚛️', angle: 0, distance: 180, color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', icon: '🟢', angle: 51, distance: 200, color: 'from-green-400 to-emerald-500' },
    { name: 'MongoDB', icon: '🍃', angle: 103, distance: 190, color: 'from-green-500 to-teal-500' },
    { name: 'Express', icon: '⚡', angle: 154, distance: 185, color: 'from-gray-400 to-gray-600' },
    { name: 'JavaScript', icon: '📜', angle: 206, distance: 195, color: 'from-yellow-400 to-orange-500' },
    { name: 'Git', icon: '🔀', angle: 257, distance: 175, color: 'from-orange-500 to-red-500' },
    { name: 'Firebase', icon: '🔥', angle: 309, distance: 188, color: 'from-yellow-500 to-orange-600' },
];

const HeroAboutSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    // Parallax effects
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Text stagger animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut' as const,
            },
        },
    };

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Premium Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Mesh - Animated Orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ y: y1 }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[140px]"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    style={{ y: y2 }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/10 rounded-full blur-[150px]"
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                />

                {/* Floating Particles */}
                <motion.div
                    className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary/40 rounded-full"
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute top-2/3 right-1/3 w-2 h-2 bg-secondary/30 rounded-full"
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                />
                <motion.div
                    className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-accent/40 rounded-full"
                    animate={{
                        y: [0, -25, 0],
                        opacity: [0.4, 0.9, 0.4],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                />

                {/* Grid Pattern Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            {/* Main Content */}
            <motion.div
                className="section-container relative z-10 pt-20 pb-16"
                style={{ opacity }}
            >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* LEFT SIDE - Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        {/* Label Badge */}
                        <motion.div variants={itemVariants}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Full Stack Developer
                            </div>
                        </motion.div>

                        {/* Heading */}
                        <motion.div variants={itemVariants} className="space-y-3">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                                Hello, I'm{' '}
                                <span className="gradient-text block mt-2">Udutha Varun</span>
                            </h1>
                        </motion.div>

                        {/* Intro Paragraph */}
                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
                        >
                            I'm a Full Stack Developer specializing in the{' '}
                            <span className="gradient-text font-semibold">MERN stack</span>, building
                            scalable and real-world web applications. I focus on clean architecture,{' '}
                            <span className="gradient-text font-semibold">performance optimization</span>,
                            and solving practical problems through technology.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <motion.a
                                href="#projects"
                                className="btn-primary flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Projects
                                <ArrowRight size={18} />
                            </motion.a>
                            <motion.a
                                href="#resume"
                                className="btn-outline flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download size={18} />
                                Download Resume
                            </motion.a>
                            <motion.a
                                href="#contact"
                                className="btn-ghost flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Send size={18} />
                                Contact Me
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE - Portrait with Floating Tech Icons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Portrait Container */}
                        <div className="relative">
                            {/* Glow Ring Background */}
                            <motion.div
                                className="absolute inset-0 -m-8"
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            >
                                <div className="w-full h-full rounded-full bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 blur-3xl" />
                            </motion.div>

                            {/* Portrait Image */}
                            <motion.div
                                className="relative z-10"
                                animate={{
                                    y: [0, -15, 0],
                                }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                                    {/* Gradient Border */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-[3px]">
                                        <div className="w-full h-full rounded-full bg-background/95 p-2">
                                            <img
                                                src={profileImage}
                                                alt="Udutha Varun"
                                                className="w-full h-full rounded-full object-cover shadow-2xl"
                                            />
                                        </div>
                                    </div>

                                    {/* Soft Shadow */}
                                    <div className="absolute inset-0 rounded-full shadow-[0_20px_80px_rgba(0,0,0,0.5)]" />
                                </div>
                            </motion.div>

                            {/* Floating Tech Stack Icons */}
                            {techStack.map((tech, index) => {
                                const angle = (tech.angle * Math.PI) / 180;
                                const x = Math.cos(angle) * tech.distance;
                                const y = Math.sin(angle) * tech.distance;

                                return (
                                    <motion.div
                                        key={tech.name}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            x: x,
                                            y: y,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.5 + index * 0.1,
                                            ease: 'easeOut' as const,
                                        }}
                                    >
                                        <motion.div
                                            className="relative group cursor-pointer"
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            animate={{
                                                y: [0, -10, 0],
                                            }}
                                            transition={{
                                                y: {
                                                    duration: 3 + index * 0.5,
                                                    repeat: Infinity,
                                                    ease: 'easeInOut',
                                                    delay: index * 0.3,
                                                },
                                            }}
                                        >
                                            {/* Glow effect on hover */}
                                            <div
                                                className={`absolute -inset-2 bg-gradient-to-br ${tech.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-300`}
                                            />

                                            {/* Icon Bubble */}
                                            <div className="relative glass-strong rounded-2xl p-4 backdrop-blur-xl border border-white/20 shadow-lg">
                                                <span className="text-3xl md:text-4xl">{tech.icon}</span>
                                            </div>

                                            {/* Tooltip */}
                                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                                <div className="glass px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap">
                                                    {tech.name}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.a
                    href="#skills"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span className="text-sm font-medium">Scroll to explore</span>
                    <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
                        <motion.div
                            className="w-1.5 h-1.5 bg-current rounded-full"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                </motion.a>
            </motion.div>
        </section>
    );
};

export default HeroAboutSection;
