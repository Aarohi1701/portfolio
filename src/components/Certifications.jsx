import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, ShieldCheck, Download, Sparkles } from 'lucide-react';

const certifications = [
  {
    id: 6,
    title: "Certified Java Development Expert (CJDE-25)",
    issuer: "Professional Java Certification",
    date: "Recent",
    link: "https://docs.google.com/document/d/1JPOgUni0jmXRBh8mlhsgIPvpOS4_mKLPGbsn-PvVPrE/edit?tab=t.0",
    description: "Achieved the Certified Java Development Expert (CJDE-25) designation, demonstrating advanced proficiency in Java programming, problem solving, and core language features.",
    skills: ["Core Java", "OOP Concepts", "Exception Handling", "Collections Framework", "Problem Solving"],
    badge: "Expert",
    color: "from-orange-500/20 to-red-500/5",
    glow: "rgba(249, 115, 22, 0.3)",
    border: "rgba(249, 115, 22, 0.2)"
  },
  {
    id: 4,
    title: "Walmart Advanced Software Engineering",
    issuer: "Industry Simulation Program",
    date: "Recent",
    link: "https://docs.google.com/document/d/12M7e_XZR3-S2S_pGCLqIqyvnuxKiKYwH2k5JW861nQY/edit?pli=1&tab=t.0",
    description: "Completed an industry simulation program focused on advanced software engineering concepts, system design, and API development.",
    skills: ["System Design", "APIs", "DSA"],
    badge: "Industry",
    color: "from-blue-500/20 to-cyan-500/5",
    glow: "rgba(59, 130, 246, 0.3)",
    border: "rgba(59, 130, 246, 0.2)"
  },
  {
    id: 5,
    title: "Devops Certification",
    issuer: "Simply Learn SkillUp",
    date: "Recent",
    link: "https://docs.google.com/document/d/15Frr4g66_bGDUpzsLsnBEanblziGIMCiXDgI2Fi4d4k/edit?tab=t.0",
    description: "Successfully completed the DevOps 101 certification from Simplilearn SkillUp, gaining a strong foundation in modern DevOps practices and software delivery workflows. Learned the principles of Continuous Integration (CI), Continuous Deployment (CD), automation, collaboration between development and operations teams, and the DevOps lifecycle. Developed an understanding of how DevOps improves software quality, deployment speed, scalability, and team productivity in modern technology environments.s.",
    skills: ["CI/CD Fundamentals", "Version Control Systems", "Configuration Management", "Containerization", "Infrastructure as Code"],
    badge: "Technical",
    color: "from-emerald-500/20 to-teal-500/5",
    glow: "rgba(16, 185, 129, 0.3)",
    border: "rgba(16, 185, 129, 0.2)"
  },
  {
    id: 1,
    title: "Web Developer Internship Certificate",
    issuer: "The Developers Arena",
    date: "Dec 2025 - March 2026",
    link: "https://docs.google.com/document/d/1WKp4lJjohmOFE4gJQ2BlgZWhBEl8lEkoWKsv03eLPi4/edit?tab=t.0",
    description: "Successfully completed Web Developer Internship. Contributed to real-world projects, resolved complex frontend issues, and worked with modern frameworks to implement responsive, high-performance UI components.",
    skills: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Bootstrap", "Git"],
    badge: "Latest",
    color: "from-amber-500/20 to-yellow-500/5",
    glow: "rgba(197, 160, 89, 0.3)",
    border: "rgba(197, 160, 89, 0.2)"
  },
  {
    id: 2,
    title: "Frontend Developer Internship Certificate",
    issuer: "Hat’s Off Private Limited",
    date: "Jan 2024 - Feb 2024",
    link: "https://docs.google.com/document/d/1jfw03W5N9ep-_U5GV-NQjvX72fCLalaOwTqTIUHGDrM/edit?tab=t.0",
    description: "Completed frontend development role, building cross-browser compatible websites and styling layouts with Bootstrap, and fixing high-priority UI bugs for client projects.",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "UI/UX Layouts"],
    badge: "Valued",
    color: "from-sky-500/20 to-blue-500/5",
    glow: "rgba(56,189,248,0.3)",
    border: "rgba(56,189,248,0.2)"
  },
  {
    id: 3,
    title: "Front-End Developer Internship Certificate",
    issuer: "Sai Compyusus Private Limited",
    date: "Jan 2023 - Jul 2023",
    link: "https://docs.google.com/document/d/1220E5UfdUy96a2AvlvG9-aL7532hQt3GcnRXfDK4VxQ/edit?tab=t.0",
    description: "Collaborated with UI/UX designers to convert wireframes to functional layouts. Optimized application load times and managed team branches using Git version control.",
    skills: ["Git", "GitHub", "Usability Design", "Responsive Layouts", "Optimization"],
    badge: "Foundation",
    color: "from-purple-500/20 to-fuchsia-500/5",
    glow: "rgba(139,92,246,0.3)",
    border: "rgba(139,92,246,0.2)"
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

export default function Certifications() {
  return (
    <div className="relative min-h-screen py-10 overflow-hidden">
      {/* Background ambient blobs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

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
              Certifications
            </motion.h2>
            <div className="absolute -inset-1 bg-gold-gradient blur-2xl opacity-20 -z-10" />
          </div>
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm">
            Verified Credentials & Achievements
          </p>
        </motion.div>



        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{
                y: -4,
                boxShadow: `0 15px 40px ${cert.glow}`,
                borderColor: cert.border,
              }}
              className="glass-card p-6 md:p-8 border-white/5 transition-all duration-400 group relative flex flex-col md:flex-row justify-between gap-6"
            >
              {/* Card content left */}
              <div className="flex-1 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-gold">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {cert.title}
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400 uppercase tracking-widest">
                        {cert.badge}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gold mt-1 flex items-center gap-2">
                      <Sparkles size={13} className="text-gold/70" />
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-[11px] font-semibold text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card actions right */}
              <div className="flex flex-col justify-between items-start md:items-end gap-4 min-w-[150px]">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 font-bold uppercase tracking-wider">
                  <Calendar size={14} className="text-gold" />
                  <span>{cert.date}</span>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white transition-all w-full md:w-auto justify-center group"
                >
                  Verify Certificate
                  <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
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
