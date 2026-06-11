import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles, ChevronRight, Code, Laptop, ExternalLink } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: "Misson Helping Hand",
    role: "Steategy & Engagement Intern",
    location: "Pune",
    duration: "March 2026- Present",
    icon: Laptop,
    points: [
      "Collaborated with cross-functional teams to develop and execute strategic initiatives that improved user engagement and overall brand presence.",
      "Conducted market research and competitor analysis to identify trends, opportunities, and actionable insights.",
      "Assisted in planning and implementing engagement campaigns across digital platforms, increasing audience interaction and reach.",
      "Analyzed performance metrics and user behavior data to optimize strategies and enhance campaign effectiveness.",
      "Supported content creation and communication strategies aligned with brand goals and target audience needs.",
      "Worked closely with team members to brainstorm innovative ideas and improve user experience and engagement."
    ]
  },
  {
    id: 2,
    company: "The Developers Arena",
    role: "Web Developer Intern",
    location: "Pune",
    duration: "Dec 2025 - March 2026",
    icon: Laptop,
    certificateLink: "https://docs.google.com/document/d/12M7e_XZR3-S2S_pGCLqIqyvnuxKiKYwH2k5JW861nQY/edit?pli=1&tab=t.0",
    points: [
      "Supported staff in daily tasks, reducing workload and improving efficiency",
      "Applied real-world industry concepts in development work",
      "Analyzed problems and collaborated with teams to build solutions",
      "Contributed to team projects and presentations"
    ]
  },
  {
    id: 3,
    company: "Hat’s Off Private Limited",
    role: "Frontend Developer Intern",
    location: "Pune",
    duration: "Jan 2024 - Feb 2024",
    icon: Code,
    points: [
      "Built responsive web pages using HTML, CSS, JavaScript",
      "Fixed frontend bugs and ensured smooth performance",
      "Developed features using Bootstrap for mobile & desktop",
      "Created cross-browser compatible websites"
    ]
  },
  {
    id: 4,
    company: "Sai Compyusus Private Limited",
    role: "Front-End Developer Intern",
    location: "Nagpur",
    duration: "Jan 2023 - Jul 2023",
    icon: Briefcase,
    points: [
      "Collaborated with UI/UX designers to build applications",
      "Used Git for version control and team collaboration",
      "Designed and improved layouts for usability",
      "Optimized applications for speed and scalability"
    ]
  }
];

const ExperienceCard = ({ exp, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.2 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="relative flex items-start gap-8 md:gap-12 w-full mb-20 group"
    >
      {/* Timeline Dot & Line */}
      <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-px bg-white/10 group-last:h-0"></div>

      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 -top-1 w-10 h-10 rounded-full border border-gold bg-[#0a0a0b] flex items-center justify-center shadow-gold-glow z-10"
      >
        <exp.icon size={16} className="text-gold" />
      </motion.div>

      {/* Content Card */}
      <div className={`w-full md:w-1/2 pl-24 pr-4 md:px-12 ${index % 2 === 0 ? 'md:ml-auto md:text-left' : 'md:mr-auto md:text-right'}`}>
        <motion.div
          whileHover={{ y: -10, rotateX: 5, rotateY: index % 2 === 0 ? -5 : 5 }}
          style={{ perspective: 1000 }}
          className="glass-card p-8 relative overflow-hidden group/card cursor-pointer border-white/5 hover:border-gold/30 transition-all duration-500"
        >
          {/* Subtle Glow Background */}
          <div className="absolute -inset-2 bg-gold-gradient opacity-0 group-hover/card:opacity-10 blur-xl transition-opacity duration-500"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">{exp.role}</h3>
            <div className={`text-gold font-medium tracking-wide mb-4 text-sm uppercase flex items-center gap-2 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
              <Sparkles size={14} className="text-gold/70" />
              {exp.company}
            </div>

            <div className={`flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-6 font-medium ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <span>{exp.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                <MapPin size={14} className="text-gold" />
                <span className="text-gray-300">{exp.location}</span>
              </div>
            </div>

            <ul className={`space-y-3 ${index % 2 !== 0 ? 'md:text-right' : 'text-left'}`}>
              {exp.points.map((point, i) => (
                <li key={i} className={`flex items-start gap-3 text-sm text-gray-400 leading-relaxed ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <ChevronRight size={16} className="text-gold/50 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* View Certificate button — shown only when certificateLink is present */}
            {exp.certificateLink && (
              <div className={`mt-6 ${index % 2 !== 0 ? 'md:flex md:justify-end' : ''}`}>
                <a
                  href={exp.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-background hover:scale-105 transition-transform shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #e2c275 0%, #c5a059 100%)',
                    boxShadow: '0 6px 24px rgba(197,160,89,0.3)',
                  }}
                >
                  View Certificate <ExternalLink size={13} />
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Background Particles Component
const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gold/10 blur-[1px]"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -500],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: Math.random() * 6 + 2 + 'px',
            height: Math.random() * 6 + 2 + 'px',
          }}
        />
      ))}
    </div>
  );
};

export default function Experience() {
  return (
    <div className="relative min-h-screen py-10 overflow-hidden rounded-[2rem]">
      <Particles />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-block relative">
            <motion.h2
              className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 tracking-tighter mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience
            </motion.h2>
            <div className="absolute -inset-1 bg-gold-gradient blur-2xl opacity-20 -z-10"></div>
          </div>
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm">My Professional Journey</p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative mt-20">
          {/* Middle timeline line for desktop */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 w-px bg-gradient-to-b from-gold/50 via-white/10 to-transparent hidden md:block"
          ></motion.div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10"></div>
    </div>
  );
}
