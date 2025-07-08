import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const EXPANDED_HEIGHT = 64; // px
const SHRUNK_HEIGHT = 40; // px

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [height, setHeight] = useState(EXPANDED_HEIGHT);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Resize navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 20) {
        setHeight(SHRUNK_HEIGHT);
      } else {
        setHeight(EXPANDED_HEIGHT);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trap focus in mobile menu
  useEffect(() => {
    if (!navOpen) return;
    const focusable = menuRef.current?.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable && focusable.length) {
      focusable[0].focus();
    }
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setNavOpen(false);
        buttonRef.current?.focus();
      }
      if (e.key === "Tab" && focusable && focusable.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [navOpen]);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.matches('a[href^="#"]')) {
        const id = e.target.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
          setNavOpen(false);
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95vw] max-w-5xl z-50 px-0 py-0"
      role="navigation"
      aria-label="Main navigation"
      style={{ height: `${height}px`, minHeight: SHRUNK_HEIGHT, maxHeight: EXPANDED_HEIGHT, transition: "height 0.3s cubic-bezier(0.4,0,0.2,1)" }}
    >
      <div className="relative rounded-2xl shadow-2xl h-full">
        <div className="relative bg-white/30 backdrop-blur-xl rounded-2xl px-6 py-2 flex items-center justify-center shadow-lg border border-white/40 h-full">
          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 justify-center w-full">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-slate-900 font-semibold transition-all px-3 py-1 group hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span className="relative z-10 group-hover:text-blue-700 transition-colors duration-200">{link.label}</span>
                {/* Underline animation */}
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          {/* Mobile menu button */}
          <button
            ref={buttonRef}
            className="md:hidden ml-auto p-2 rounded-lg bg-white/40 border border-white/30 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 absolute right-4 top-1/2 -translate-y-1/2"
            onClick={() => setNavOpen((o) => !o)}
            aria-label="Open navigation menu"
            aria-expanded={navOpen}
            aria-controls="mobile-menu"
          >
            <span className="block w-6 h-0.5 bg-slate-900 mb-1 rounded"></span>
            <span className="block w-6 h-0.5 bg-slate-900 mb-1 rounded"></span>
            <span className="block w-6 h-0.5 bg-slate-900 rounded"></span>
          </button>
          {/* Mobile nav with animation and backdrop */}
          <AnimatePresence>
            {navOpen && (
              <>
                {/* Backdrop overlay */}
                <motion.div
                  className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setNavOpen(false)}
                  aria-hidden="true"
                />
                <motion.div
                  id="mobile-menu"
                  ref={menuRef}
                  className="absolute top-14 left-1/2 -translate-x-1/2 w-56 bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl rounded-xl px-4 py-6 flex flex-col gap-4 items-center z-50"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {NAV_LINKS.map(link => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 drop-shadow-md hover:text-blue-700 hover:bg-none transition-all text-lg px-2 py-1 rounded hover:bg-blue-100/40 hover:scale-105 text-center w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                      tabIndex={0}
                    >
                      {link.label}
                    </a>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 