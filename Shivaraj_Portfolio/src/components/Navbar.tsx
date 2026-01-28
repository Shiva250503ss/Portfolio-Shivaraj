import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const sections = ['home', 'about', 'resume', 'projects', 'skills', 'blog', 'contact'];

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const navItems = ['Home', 'About', 'Resume', 'Projects', 'Skills', 'Blog', 'Contact'];

  const scrollToSection = (item: string) => {
    const id = item.toLowerCase();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-black/90 backdrop-blur-2xl border-b border-purple-500/20 shadow-lg shadow-purple-500/5'
          : 'bg-gradient-to-b from-black/80 to-transparent'
          }`}
      >
        <div className="relative w-full px-8 py-5 flex items-center justify-between">

          {/* LEFT: Animated Logo + Name + Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {/* Premium SSR Logo with Animated Border */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated gradient ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-75 blur-sm group-hover:opacity-100 animate-spin-slow"
                style={{ animation: 'spin 8s linear infinite' }} />

              {/* Logo container */}
              <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <span className="text-white font-bold text-lg tracking-wide">SR</span>

                {/* Sparkle accent */}
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles size={14} className="text-yellow-300" />
                </motion.div>
              </div>
            </motion.div>

            {/* Name + Subtitle with enhanced typography */}
            <div className="flex flex-col min-w-0">
              <motion.span
                className="text-white font-bold text-sm sm:text-base lg:text-lg xl:text-xl tracking-wide"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Shivaraj S. Rajan
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold text-xs tracking-wider hidden xl:block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                AI • Data Science • Analytics
              </motion.span>
            </div>
          </motion.div>

          {/* CENTER/RIGHT: Nav Links - Enhanced with better spacing */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  onClick={() => scrollToSection(item)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 group ${isActive
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                    }`}
                >
                  {/* Active background indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  {/* Hover glow effect */}
                  <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Text */}
                  <span className="relative z-10">{item}</span>

                  {/* Underline animation on hover */}
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${isActive ? 'w-6' : 'w-0 group-hover:w-6'
                    }`} />
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT: Mobile menu button */}
          <motion.button
            className="lg:hidden text-white p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Enhanced */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center gap-6"
        >
          {/* Decorative gradient orbs */}
          <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl" />

          {navItems.map((item, idx) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <motion.button
                key={item}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08 }}
                onClick={() => scrollToSection(item)}
                className={`relative text-2xl font-semibold transition-all duration-300 ${isActive
                  ? 'text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text'
                  : 'text-white/80 hover:text-white'
                  }`}
              >
                {item}
                {isActive && (
                  <motion.div
                    layoutId="activeMobileNav"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>
      )}

      {/* Custom CSS for spin animation */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </>
  );
}
