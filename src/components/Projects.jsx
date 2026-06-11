import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, X, Cpu, Plane, Pill, ArrowUpRight, LineChart, ShoppingCart, Globe, Activity } from 'lucide-react';

import roboImg from '../assets/robo_case.png';
import airlineImg from '../assets/airline.png';
import genhealthImg from '../assets/genhealth.png';
import financeImg from '../assets/finance.png';
import mediswiftImg from '../assets/mediswift.png';
import travelImg from '../assets/ai_travel_universe.png';

const projects = [
  {
    id: 1,
    badge: 'Major Project',
    title: 'Human Following Suitcase',
    subtitle: 'Robo-Case',
    icon: Cpu,
    emoji: '🤖',
    image: roboImg,
    gradient: 'from-sky-500 to-blue-700',
    glowColor: 'rgba(56,189,248,0.4)',
    accentColor: 'text-sky-400',
    badgeBg: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
    tagBg: 'bg-sky-500/10 text-sky-300 border-sky-400/20',
    objective:
      'Created an autonomous suitcase that follows its owner using Arduino technology — hands-free convenience for modern travellers.',
    features: [
      'Hands-free convenience for travellers, reducing physical strain of carrying luggage',
      'Integration of Arduino, sensors and control systems for a smart, self-guided suitcase',
      'Combines robotics and computer vision principles for practical real-world use',
    ],
    tags: ['Arduino', 'Robotics', 'Computer Vision', 'Sensors', 'C++'],
  },
  {
    id: 2,
    badge: 'Mini Project',
    title: 'Airline Reservation System',
    subtitle: 'Flight Booking Platform',
    icon: Plane,
    emoji: '✈️',
    image: airlineImg,
    gradient: 'from-violet-500 to-purple-700',
    glowColor: 'rgba(139,92,246,0.4)',
    accentColor: 'text-violet-400',
    badgeBg: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    tagBg: 'bg-violet-500/10 text-violet-300 border-violet-400/20',
    objective:
      'Developed a flight booking system to streamline the booking process with a user-friendly interface and distributed architecture.',
    features: [
      'User-friendly interface for easy navigation, catering to users with minimal computer experience',
      'Distributed architecture with centralized database storage for efficient booking & time management',
      'Ensured easy verification of bookings and accurate data storage',
    ],
    tags: ['Java', 'SQL', 'Distributed Systems', 'Database', 'UI/UX'],
    githubLink: 'https://github.com/Aarohi1701/Sky-verse-',
  },
  {
    id: 3,
    badge: 'Health-Tech Startup',
    title: 'GenHealth',
    subtitle: '3D Patient Dashboard',
    icon: Activity,
    emoji: '🧬',
    image: genhealthImg,
    gradient: 'from-cyan-500 to-blue-700',
    glowColor: 'rgba(6,182,212,0.45)',
    accentColor: 'text-cyan-400',
    badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    tagBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-400/20',
    objective:
      'A next-generation healthcare ecosystem combining AI-powered intelligence and cinematic 3D visualizations for complete health journey monitoring.',
    features: [
      'Interactive 3D human anatomy with real-time vital monitoring and organ-level health visualization',
      'AI Health Assistant for symptom analysis, personalized recommendations, and risk prediction',
      'Smart Analytics & Digital Twin simulations forecasting future health risks and lifestyle impacts',
    ],
    tags: ['Next.js', 'Three.js', 'Framer Motion', 'Tailwind CSS', 'AI'],
    githubLink: 'https://github.com/Aarohi1701/Genhealth',
  },
  {
    id: 4,
    badge: 'Web App',
    title: 'Finance Dashboard',
    subtitle: 'Financial Tracking Tool',
    icon: LineChart,
    emoji: '📊',
    image: financeImg,
    gradient: 'from-amber-500 to-orange-700',
    glowColor: 'rgba(245,158,11,0.4)',
    accentColor: 'text-amber-400',
    badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    tagBg: 'bg-amber-500/10 text-amber-300 border-amber-400/20',
    objective:
      'Developed a dynamic and interactive finance dashboard to track and manage financial data efficiently through visually appealing charts.',
    features: [
      'Real-time data visualization using charts and analytics',
      'Expense and income tracking with category breakdowns',
      'Budget planning, goal tracking, and responsive design'
    ],
    tags: ['React.js', 'Chart.js', 'Node.js', 'MongoDB', 'UI/UX'],
    githubLink: 'https://github.com/Aarohi1701/Finance-Dashboard',
  },
  {
    id: 5,
    badge: 'On-Demand App',
    title: 'Mediswift',
    subtitle: 'Online Medicine Delivery Platform',
    icon: Pill,
    emoji: '💊',
    image: mediswiftImg,
    gradient: 'from-emerald-500 to-teal-700',
    glowColor: 'rgba(16,185,129,0.45)',
    accentColor: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    tagBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/20',
    objective:
      'An on-demand online medicine delivery platform designed to connect patients with local pharmacies, offering instant prescription uploads and door-to-door delivery tracking.',
    features: [
      'Real-time prescription analysis and instant order verification with local pharmacies',
      'Live GPS tracking of delivery couriers with integrated route optimization',
      'Secure patient profiles holding prescription histories and recurring order reminders',
    ],
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Google Maps API'],
    githubLink: 'https://github.com/Aarohi1701/MediSwift',
  },
  {
    id: 6,
    badge: 'Featured Project',
    title: 'AI Travel Universe',
    subtitle: 'Next-Gen AI Travel Platform',
    icon: Globe,
    emoji: '🌌',
    image: travelImg,
    gradient: 'from-indigo-500 to-violet-700',
    glowColor: 'rgba(99,102,241,0.45)',
    accentColor: 'text-indigo-400',
    badgeBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    tagBg: 'bg-indigo-500/10 text-indigo-300 border-indigo-400/20',
    objective:
      'A next-generation AI-powered travel ecosystem that redefines exploration — combining intelligent itinerary generation, immersive 3D globe navigation, real-time flight intelligence, and cinematic UI design into a single premium platform.',
    features: [
      'AI-powered itinerary generation & smart travel concierge with real-time recommendations',
      'Interactive Three.js 3D globe with live flight visualization and destination discovery',
      'Real-time flight tracking, futuristic booking flow, digital boarding passes & travel wallet',
      'Personalized analytics dashboard with advanced animations, glassmorphism, and GSAP effects',
    ],
    tags: ['Next.js', 'TypeScript', 'Three.js', 'React Three Fiber', 'Framer Motion', 'GSAP', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    githubLink: 'https://github.com/Aarohi1701/AI-Travel-Universe',
  },
];

/* ── Detail Overlay (full-screen modal on click) ────────────────── */
const DetailOverlay = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
    onClick={onClose}
  >
    {/* Backdrop */}
    <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

    <motion.div
      initial={{ scale: 0.85, y: 40, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.85, y: 40, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-4xl rounded-3xl overflow-hidden border border-white/10"
      style={{
        background: 'linear-gradient(145deg, rgba(20,20,22,0.98), rgba(10,10,11,0.99))',
        boxShadow: `0 40px 100px ${project.glowColor}, 0 0 0 1px rgba(255,255,255,0.06)`,
      }}
    >
      {/* Hero image strip */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Gradient fade over image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0e] via-transparent to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />

        {/* Badge pinned top-left */}
        <span className={`absolute top-5 left-6 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border backdrop-blur-md ${project.badgeBg}`}>
          {project.badge}
        </span>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all backdrop-blur-md"
        >
          <X size={16} className="text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="p-8 md:p-10">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">{project.title}</h2>
            <p className={`text-sm font-semibold ${project.accentColor} mt-1`}>{project.subtitle}</p>
          </div>
          <span className="text-4xl">{project.emoji}</span>
        </div>

        <div className="w-full h-px bg-white/5 my-6" />

        <p className="text-gray-400 text-sm leading-relaxed italic mb-7">{project.objective}</p>

        {/* Features */}
        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Key Features</h4>
        <ul className="space-y-3 mb-8">
          {project.features.map((f, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed"
            >
              <ChevronRight size={15} className={`${project.accentColor} mt-0.5 flex-shrink-0`} />
              <span>{f}</span>
            </motion.li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 + 0.4 }}
              className={`text-xs font-semibold px-3 py-1 rounded-lg border ${project.tagBg}`}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {project.githubLink ? (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-gray-200">
              <Github size={16} /> View Code
            </a>
          ) : (
            <button className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-gray-200">
              <Github size={16} /> View Code
            </button>
          )}
          <button className={`flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl border ${project.badgeBg} hover:opacity-80 transition-all`}>
            <ExternalLink size={16} /> Live Demo
          </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

/* ── Project Card (image-first, click to open) ───────────────────── */
const ProjectCard = ({ project, index, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      whileHover={{ y: -10 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        boxShadow: hovered
          ? `0 30px 70px ${project.glowColor}, 0 0 0 1px rgba(255,255,255,0.08)`
          : '0 8px 32px rgba(0,0,0,0.5)',
        transition: 'box-shadow 0.4s ease',
      }}
    >
      {/* ── Image (full card cover) */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        {/* Dark overlay always on */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-black/40 to-transparent" />
        {/* Colored overlay on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
          animate={{ opacity: hovered ? 0.25 : 0 }}
          transition={{ duration: 0.4 }}
        />
        {/* Badge */}
        <span className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border backdrop-blur-md ${project.badgeBg}`}>
          {project.badge}
        </span>
        {/* Number */}
        <span className="absolute top-4 right-4 text-4xl font-black text-white/10 select-none">
          0{index + 1}
        </span>
      </div>

      {/* ── Info strip below image */}
      <div
        className="p-6 border border-t-0 border-white/5 group-hover:border-white/10 transition-colors duration-300"
        style={{ background: 'linear-gradient(180deg, #101012 0%, #0a0a0b 100%)' }}
      >
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="text-lg font-extrabold text-white tracking-tight leading-tight">{project.title}</h3>
            <p className={`text-xs font-semibold ${project.accentColor} mt-0.5 tracking-wide`}>{project.subtitle}</p>
          </div>
          <motion.div
            animate={{ rotate: hovered ? 45 : 0, scale: hovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors"
          >
            <ArrowUpRight size={16} className="text-gray-400 group-hover:text-white transition-colors" />
          </motion.div>
        </div>

        {/* Tags preview */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${project.tagBg}`}>
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-400">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Click hint */}
        <motion.p
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[11px] text-gray-500 mt-4 font-medium tracking-wide"
        >
          Click to explore →
        </motion.p>
      </div>
    </motion.div>
  );
};

/* ── Particles ───────────────────────────────────────────────────── */
const Particles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(18)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-gold/10"
        initial={{ x: Math.random() * 1200, y: Math.random() * 900 }}
        animate={{ y: [null, Math.random() * -400], opacity: [0, 0.5, 0] }}
        transition={{ duration: Math.random() * 10 + 8, repeat: Infinity, ease: 'linear' }}
        style={{ width: Math.random() * 4 + 2 + 'px', height: Math.random() * 4 + 2 + 'px' }}
      />
    ))}
  </div>
);

/* ── Page ─────────────────────────────────────────────────────────── */
export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative min-h-screen py-10 overflow-hidden">
      <Particles />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <motion.h2
              className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 tracking-tighter mb-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Projects
            </motion.h2>
            <div className="absolute -inset-1 bg-gold-gradient blur-2xl opacity-20 -z-10" />
          </div>
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm">What I've Built</p>
          <p className="text-gray-600 text-sm mt-2">Click any card to explore details</p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <DetailOverlay project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
