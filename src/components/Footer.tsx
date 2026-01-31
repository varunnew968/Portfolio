import { motion } from 'framer-motion';
import { Mail, Download, Send, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="mailto:varun@example.com"
              className="glass px-6 py-3 rounded-full flex items-center gap-2 text-foreground hover:text-primary border border-white/10 hover:border-primary/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              <span className="text-sm font-medium">Email Me</span>
            </motion.a>

            <motion.a
              href="#resume"
              className="glass px-6 py-3 rounded-full flex items-center gap-2 text-foreground hover:text-primary border border-white/10 hover:border-primary/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              <span className="text-sm font-medium">Download Resume</span>
            </motion.a>

            <motion.a
              href="#contact"
              className="glass px-6 py-3 rounded-full flex items-center gap-2 text-foreground hover:text-primary border border-white/10 hover:border-primary/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={18} />
              <span className="text-sm font-medium">Contact Form</span>
            </motion.a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Udutha Varun. All rights reserved.
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              whileHover={{ y: -2 }}
            >
              <span className="text-sm font-medium">Back to top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
