import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import {
  Download, Briefcase, BarChart3, Globe, Zap,
  ArrowDown, Linkedin, Github, Mail, ChevronRight,
  User, Code, GraduationCap, Award
} from 'lucide-react';
import heroBg from '../assets/hero_bg.png';
import profileImg from '../assets/profile.png';

/* ── Typing animation hook ──────────────────────────────────────── */
const useTyping = (words, speed = 100, pause = 1800) => {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx(c => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx(w => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx(c => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
};

/* ── Magnetic cursor glow ───────────────────────────────────────── */
const CursorGlow = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[200] w-72 h-72 rounded-full"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        background: 'radial-gradient(circle, rgba(197,160,89,0.08) 0%, transparent 70%)',
      }}
    />
  );
};

/* ── Floating particle bg ───────────────────────────────────────── */
const Particles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(24)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: Math.random() * 3 + 1 + 'px',
          height: Math.random() * 3 + 1 + 'px',
          background: i % 3 === 0 ? 'rgba(197,160,89,0.5)' : i % 3 === 1 ? 'rgba(139,92,246,0.4)' : 'rgba(56,189,248,0.3)',
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
        }}
        animate={{
          y: [0, -60, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: Math.random() * 6 + 5,
          repeat: Infinity,
          delay: Math.random() * 4,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

/* ── Stat pill ──────────────────────────────────────────────────── */
const StatPill = ({ icon: Icon, value, label, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    whileHover={{ y: -4, scale: 1.03 }}
    className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-white/8 backdrop-blur-xl"
    style={{ background: 'rgba(255,255,255,0.04)' }}
  >
    <div className={`p-2 rounded-xl bg-white/5 ${color}`}>
      <Icon size={18} />
    </div>
    <div>
      <p className="text-xl font-extrabold text-white leading-none">{value}</p>
      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">{label}</p>
    </div>
  </motion.div>
);

/* ── Quick info card ─────────────────────────────────────────────  */
const QuickCard = ({ icon: Icon, title, children, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6, ease: 'easeOut' }}
    whileHover={{ y: -6, borderColor: 'rgba(197,160,89,0.3)' }}
    className="glass-card p-5 flex flex-col gap-3 border-white/5 transition-all duration-300 cursor-default"
  >
    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${color}`}>
      <Icon size={18} />
    </div>
    <h4 className="font-bold text-white text-sm">{title}</h4>
    <div className="text-xs text-gray-400 leading-relaxed">{children}</div>
  </motion.div>
);

export default function Home({ setActiveTab }) {
  const role = useTyping(['Web Developer', 'Frontend Engineer', 'React Developer', 'UI/UX Enthusiast'], 90, 1600);

  return (
    <div className="relative min-h-screen -mt-10 -mx-10 overflow-hidden">
      <CursorGlow />

      {/* ── HERO SECTION ───────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center">

        {/* Background image + overlays */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b] via-[#0a0a0b]/85 to-[#0a0a0b]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-[#0a0a0b]/30" />
        </div>

        <Particles />

        {/* Content */}
        <div className="relative z-10 px-10 md:px-16 pt-20 pb-10 max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* ── Left: Text ──────────────────────────────────────── */}
            <div className="flex-1 space-y-8">
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-gold tracking-widest uppercase">Available for Work</span>
              </motion.div>

              {/* Name */}
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-gold font-bold tracking-[0.35em] text-sm mb-3 uppercase"
                >
                  Hello, I'm
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight"
                >
                  Aarohi<br />
                  <span
                    className="text-transparent bg-clip-text"
                    style={{ backgroundImage: 'linear-gradient(135deg, #e2c275 0%, #c5a059 50%, #a68541 100%)' }}
                  >
                    Tapas
                  </span>
                </motion.h1>
              </div>

              {/* Typing role */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-0.5 bg-gold/50 rounded-full" />
                <p className="text-xl font-bold text-gray-200 tracking-wide min-w-[260px]">
                  {role}
                  <span className="animate-pulse text-gold ml-0.5">|</span>
                </p>
              </motion.div>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-gray-400 text-base leading-relaxed max-w-xl"
              >
                Passionate about crafting responsive, user-centric web experiences with clean design and efficient code.
                I turn ideas into seamless digital products — currently leveling up in <span className="text-gold font-semibold">frontend + real-world projects</span>. 🚀
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="https://docs.google.com/document/d/17-4vlGbdT0IrHrF03-UX7TcU6jBcY2lYSX6bkAbv9ac/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 font-bold px-8 py-3.5 rounded-xl text-background hover:scale-105 transition-transform shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #e2c275 0%, #c5a059 100%)', boxShadow: '0 8px 32px rgba(197,160,89,0.3)' }}
                >
                  <Download size={18} /> Download Resume
                </a>
                <button
                  onClick={() => setActiveTab('Projects')}
                  className="flex items-center gap-2.5 font-bold px-8 py-3.5 rounded-xl text-white border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  View Projects <ChevronRight size={18} />
                </button>
              </motion.div>

              {/* Social icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex gap-3"
              >
                {[
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Github, label: 'GitHub' },
                  { icon: Mail, label: 'Email' },
                ].map(({ icon: Icon, label }) => (
                  <motion.button
                    key={label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/30 transition-colors"
                    title={label}
                  >
                    <Icon size={16} />
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* ── Right: Profile photo ─────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: 'easeOut' }}
              className="relative flex-shrink-0"
            >
              {/* Outer glow ring */}
              <div
                className="absolute -inset-4 rounded-[3rem] blur-2xl opacity-30"
                style={{ background: 'linear-gradient(135deg, #c5a059, #7c3aed)' }}
              />
              {/* Decorative corner dots */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full border-2 border-gold/40" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full border-2 border-purple-500/40" />

              {/* Photo frame */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-[2.5rem] overflow-hidden border-2 border-white/10">
                <img
                  src={profileImg}
                  alt="Aarohi Tapas"
                  className="w-full h-full object-cover"
                />
                {/* Inner gradient overlay on photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge on photo */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-6 px-4 py-2.5 rounded-2xl border border-white/10 backdrop-blur-xl"
                style={{ background: 'rgba(10,10,11,0.85)' }}
              >
                <p className="text-xs font-bold text-gold tracking-wide">Frontend Dev</p>
                <p className="text-[10px] text-gray-500 font-medium">1 Years Exp.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="relative z-10 px-10 md:px-16 pb-16 max-w-[1400px] mx-auto w-full"
        >
          <div className="flex flex-wrap gap-3 mt-6">
            <StatPill icon={Briefcase} value="1yr" label="Years Experience" color="text-gold" delay={1.0} />
            <StatPill icon={BarChart3} value="5+" label="Projects Completed" color="text-purple-400" delay={1.1} />
            <StatPill icon={Zap} value="100%" label="Commitment" color="text-sky-400" delay={1.3} />
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">Scroll</p>
          <ArrowDown size={14} className="text-gray-600" />
        </motion.div>
      </section>

      {/* ── QUICK OVERVIEW CARDS ───────────────────────────────────── */}
      <section className="relative z-10 px-10 md:px-16 py-16 max-w-[1400px] mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-12 h-0.5 bg-gold/40 rounded-full" />
          <p className="text-xs font-bold text-gold tracking-[0.25em] uppercase">Quick Overview</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          <QuickCard icon={Briefcase} title="Experience" color="bg-gold/10 text-gold" delay={0.2}>
            <div className="space-y-2">
              {[
                { role: 'Web Dev Intern', co: 'The Developers Aren', year: '2026 – Present' },
                { role: 'Frontend Intern', co: "Hat's Off Pvt. Ltd.", year: '2024' },
              ].map(e => (
                <div key={e.co}>
                  <p className="font-bold text-white text-[11px]">{e.role}</p>
                  <p className="text-gray-500 text-[10px]">{e.co} · {e.year}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setActiveTab('Experience')}
              className="mt-3 flex items-center gap-1 text-gold text-[11px] font-bold hover:gap-2 transition-all"
            >
              Full Timeline <ChevronRight size={12} />
            </button>
          </QuickCard>

          <QuickCard icon={Code} title="Top Skills" color="bg-sky-500/10 text-sky-400" delay={0.3}>
            <div className="flex flex-wrap gap-1.5">
              {['React', 'JavaScript', 'HTML/CSS', 'Tailwind', 'Bootstrap', 'Figma'].map(s => (
                <span key={s} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-[10px] font-semibold text-gray-300">{s}</span>
              ))}
            </div>
            <button
              onClick={() => setActiveTab('Skills')}
              className="mt-3 flex items-center gap-1 text-gold text-[11px] font-bold hover:gap-2 transition-all"
            >
              All Skills <ChevronRight size={12} />
            </button>
          </QuickCard>

          <QuickCard icon={GraduationCap} title="Education" color="bg-purple-500/10 text-purple-400" delay={0.4}>
            <p className="font-bold text-white text-[11px]">B.Tech – Information Technology</p>
            <p className="text-gray-500 text-[10px] mt-0.5">Priyadarshini College of Engineering</p>
            <p className="text-[10px] text-gray-600 mt-0.5">2021 – 2024</p>
          </QuickCard>
        </div>
      </section>

      {/* ── FOOTER BAR ─────────────────────────────────────────────── */}
      <div className="fixed bottom-8 left-[calc(80px+2.5rem)] right-10 flex gap-4 z-40">
        <div
          className="flex-1 px-8 py-4 flex items-center justify-center gap-4 rounded-2xl border border-white/5 backdrop-blur-xl"
          style={{ background: 'rgba(255,255,255,0.03)' }}
        >
          <span className="text-gold/50 text-xl rotate-180">"</span>
          <p className="italic text-gray-300 font-medium text-sm">
            "Turning ideas into seamless digital experiences."
          </p>
        </div>
        <div
          className="flex-[0.8] px-8 py-4 flex items-center justify-between rounded-2xl border border-white/5 backdrop-blur-xl"
          style={{ background: 'rgba(255,255,255,0.03)' }}
        >
          <p className="font-bold text-white tracking-tight text-sm">Let's Build Something Great Together!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveTab('Contact')}
            className="flex items-center gap-2 font-bold px-6 py-2 rounded-lg text-background text-sm cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #e2c275, #c5a059)' }}
          >
            Get In Touch <ChevronRight size={16} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}