import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Stars } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: "B.Tech – Information Technology",
    institution: "Priyadarshini College of Engineering",
    location: "Nagpur, Maharashtra",
    duration: "2021 – 2024",
    grade: "First Class",
    description: "Acquired deep theoretical and practical understanding of software engineering, database management systems, data structures, and computer networks. Active participation in tech workshops and project development seminars.",
    highlights: [
      "Specialization in web-centric technologies and software design patterns.",
      "Successfully built and presented major/mini group engineering projects.",
      "Participated in inter-college coding events and hackathons."
    ],
    skills: ["Data Structures", "SQL & Database Design", "Java Programming", "Web Technologies", "Software Engineering Principles"]
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Education() {
  return (
    <div className="relative min-h-screen py-10 overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
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
              Education
            </motion.h2>
            <div className="absolute -inset-1 bg-gold-gradient blur-2xl opacity-20 -z-10" />
          </div>
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm">
            Academic Qualifications & Background
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                borderColor: 'rgba(197, 160, 89, 0.3)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
              }}
              className="glass-card p-6 md:p-8 border-white/5 transition-all duration-400 group relative"
            >
              {/* Top border ambient highlight */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gold-gradient rounded-t-2xl opacity-80" />

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold border border-gold/20 flex-shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-gold font-semibold text-sm flex items-center gap-2 mt-1">
                      <BookOpen size={14} className="text-gold/70" />
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 md:text-right">
                  <span className="flex items-center gap-1 text-xs text-gray-400 font-medium bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                    <Calendar size={13} className="text-gold" />
                    {edu.duration}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400 font-medium bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                    <MapPin size={13} className="text-gold" />
                    {edu.location}
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-white/5 my-6" />

              <div className="space-y-4">
                <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3 flex items-center gap-2">
                    <Stars size={13} className="text-gold" /> Key Focus & Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-gold mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Coursework */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/8 text-xs font-semibold text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
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
