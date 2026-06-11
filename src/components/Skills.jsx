import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Tech Stack',
    emoji: '🚀',
    color: 'from-sky-500/20 to-blue-500/5',
    glow: 'rgba(56,189,248,0.3)',
    border: 'rgba(56,189,248,0.2)',
    skills: ['C', 'Java', 'SQL', 'React', 'Spring Boot', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Design',
    emoji: '🎨',
    color: 'from-pink-500/20 to-fuchsia-500/5',
    glow: 'rgba(236,72,153,0.3)',
    border: 'rgba(236,72,153,0.2)',
    skills: ['Figma', 'UI/UX', 'Wireframing', 'Prototyping'],
  },
  {
    title: 'Tools',
    emoji: '⚙️',
    color: 'from-amber-500/20 to-yellow-500/5',
    glow: 'rgba(245,158,11,0.3)',
    border: 'rgba(245,158,11,0.2)',
    skills: ['VS Code', 'Git', 'GitHub', 'AI Tools', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Soft Skills',
    emoji: '🌱',
    color: 'from-emerald-500/20 to-green-500/5',
    glow: 'rgba(52,211,153,0.3)',
    border: 'rgba(52,211,153,0.2)',
    skills: ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability', 'Leadership'],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Skills() {
  return (
    <div className="relative min-h-screen py-10 overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
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
              Skills
            </motion.h2>
            <div className="absolute -inset-1 bg-gold-gradient blur-2xl opacity-20 -z-10" />
          </div>
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm">
            What I Bring to the Table
          </p>
        </motion.div>

        {/* Skill Groups Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                rotateX: 3,
                rotateY: -2,
                boxShadow: `0 20px 60px ${group.glow}`,
                borderColor: group.border,
              }}
              style={{ perspective: 800 }}
              className="glass-card p-7 border-white/5 transition-all duration-400 group cursor-default"
            >
              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${group.glow.replace('0.3', '0.06')}, transparent 70%)` }}
              />

              {/* Card inner content */}
              <div className="relative z-10">
                {/* Title row */}
                <motion.div
                  className="flex items-center gap-3 mb-5"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-xl border`}
                    style={{ borderColor: group.border }}
                  >
                    {group.emoji}
                  </div>
                  <h3 className="text-lg font-extrabold text-white tracking-tight">
                    {group.title}
                  </h3>
                </motion.div>

                {/* Divider */}
                <div className="w-full h-px bg-white/5 mb-5" />

                {/* Skill Tags */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {group.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      variants={tagVariants}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.08 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-sm font-semibold text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/80 flex-shrink-0" />
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Dot-joined display line (subtle, below tags) */}
                <p className="mt-5 text-[11px] text-gray-600 font-medium tracking-wide leading-relaxed">
                  {group.skills.join(' • ')}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
