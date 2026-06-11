import React from 'react';
import {
  Home, User, Briefcase, Code, FolderRoot, GraduationCap,
  Award, Mail, Linkedin, Github, Download, ExternalLink,
  ChevronRight, BarChart3, Globe, Zap, Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import HomeView from './components/Home';
import Contact from './components/Contact';
import Education from './components/Education';
import Certifications from './components/Certifications';

const Sidebar = ({ activeTab, setActiveTab }) => (
  <div className="fixed left-0 top-0 h-full w-20 flex flex-col items-center py-8 bg-[#0a0a0b]/80 backdrop-blur-md border-r border-white/5 z-50">
    <div className="mb-12">
      <h1 className="text-3xl font-bold gold-text tracking-tighter">AT</h1>
    </div>

    <nav className="flex-1 flex flex-col gap-2">
      {[
        { icon: Home, label: 'Home' },
        { icon: Briefcase, label: 'Experience' },
        { icon: Code, label: 'Skills' },
        { icon: FolderRoot, label: 'Projects' },
        { icon: GraduationCap, label: 'Education' },
        { icon: Award, label: 'Certifications' },
        { icon: Mail, label: 'Contact' },
      ].map((item, idx) => (
        <div 
          key={idx} 
          onClick={() => setActiveTab(item.label)}
          className={`nav-item ${activeTab === item.label ? 'active' : ''}`}
        >
          <item.icon size={22} />
          <span className="text-[10px] mt-1 font-medium">{item.label}</span>
        </div>
      ))}
    </nav>

    <div className="flex flex-col gap-4 mt-auto">
      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-gold/50 cursor-pointer transition-all group">
        <Linkedin size={18} className="text-gray-500 group-hover:text-gold transition-colors" />
      </div>
      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-gold/50 cursor-pointer transition-all group">
        <Mail size={18} className="text-gray-500 group-hover:text-gold transition-colors" />
      </div>
      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-gold/50 cursor-pointer transition-all group">
        <Github size={18} className="text-gray-500 group-hover:text-gold transition-colors" />
      </div>
    </div>
  </div>
);

const StatCard = ({ icon: Icon, value, label, color }) => (
  <motion.div
    whileHover={{ y: -5, borderColor: 'rgba(197, 160, 89, 0.4)' }}
    className="glass-card p-5 flex items-center gap-5 border-white/5 transition-all duration-300"
  >
    <div className="p-3 rounded-xl bg-[#1e1e20] shadow-premium">
      <Icon className={color} size={28} />
    </div>
    <div>
      <h3 className="text-2xl font-bold text-white leading-tight">{value}</h3>
      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{label}</p>
    </div>
  </motion.div>
);

const ProgressBar = ({ label, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1.5">
      <span className="text-sm text-gray-300">{label}</span>
      <span className="text-sm text-gray-400">{percentage}%</span>
    </div>
    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-gold-gradient rounded-full"
      />
    </div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = React.useState('Home');

  return (
    <div className="min-h-screen bg-background text-gray-300 pl-20 font-sans selection:bg-gold/30">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto p-10 pb-32">

        {/* Header/Nav */}
        <header className="flex justify-end gap-12 mb-16 text-sm font-medium tracking-wide">
          {['Home', 'Experience', 'Skills', 'Projects', 'Resume'].map(item => (
            <button 
              key={item}
              onClick={() => {
                if (item === 'Resume') {
                  window.open('https://docs.google.com/document/d/17-4vlGbdT0IrHrF03-UX7TcU6jBcY2lYSX6bkAbv9ac/edit?tab=t.0', '_blank');
                } else {
                  setActiveTab(item);
                }
              }}
              className={`${activeTab === item ? 'text-white border-b-2 border-gold pb-1 px-1' : 'hover:text-gold transition-colors'}`}
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => setActiveTab('Contact')}
            className={`px-6 py-2 rounded-lg border transition-all ml-4 font-bold ${activeTab === 'Contact' ? 'bg-gold text-background border-gold' : 'bg-gold/10 text-gold border-gold/30 hover:bg-gold/20'}`}
          >
            Contact Me
          </button>
        </header>

        <AnimatePresence mode="wait">
          {activeTab === 'Experience' ? (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Experience />
            </motion.div>
          ) : activeTab === 'Skills' ? (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Skills />
            </motion.div>
          ) : activeTab === 'Projects' ? (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Projects />
            </motion.div>
          ) : activeTab === 'Education' ? (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Education />
            </motion.div>
          ) : activeTab === 'Certifications' ? (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Certifications />
            </motion.div>
          ) : activeTab === 'Contact' ? (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>
          ) : (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <HomeView setActiveTab={setActiveTab} />
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </div>
  );
}
