import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign } from 'lucide-react';

/* ── Floating ambient background ───────────────────────────────── */
const AmbientBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] animate-pulse" />
    <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
    {/* Grid pattern */}
    <div className="absolute inset-0" style={{
      backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
      backgroundSize: '40px 40px',
      opacity: 0.5
    }} />
  </div>
);

/* ── Contact Info Card ─────────────────────────────────────────── */
const InfoCard = ({ icon: Icon, title, value, href, color, delay }) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.6, type: "spring" }}
    whileHover={{ scale: 1.03, x: 5 }}
    className="relative flex items-center gap-5 p-5 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md overflow-hidden group transition-all"
  >
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${color}`} />
    
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border border-white/10 group-hover:border-white/30 transition-colors ${color.split(' ')[0].replace('bg-', 'text-')}`}>
      <Icon size={24} />
    </div>
    
    <div>
      <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1">{title}</p>
      <p className="text-lg font-bold text-gray-200 tracking-wide group-hover:text-white transition-colors">{value}</p>
    </div>
  </motion.a>
);

export default function Contact() {
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending
    alert("Message sent successfully! I'll get back to you soon.");
  };

  return (
    <div className="relative min-h-screen py-10 overflow-hidden">
      <AmbientBackground />

      <div className="max-w-6xl mx-auto relative z-10 px-4 md:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <motion.h2
              className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 tracking-tighter mb-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's Talk
            </motion.h2>
            <div className="absolute -inset-1 bg-gold-gradient blur-2xl opacity-20 -z-10" />
          </div>
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm">
            Got an idea? Let's make it happen.
          </p>
        </motion.div>

        <div className="flex flex-col items-center max-w-2xl mx-auto">
          
          {/* ── Contact Information ──────────────────────── */}
          <div className="flex flex-col justify-center gap-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <h3 className="text-3xl font-extrabold text-white tracking-tight mb-4">
                Reach Out <span className="text-gold">Directly</span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-8">
                I'm currently available for freelance work and full-time opportunities. 
                Whether you have a project to discuss or just want to say hi, my inbox is open!
              </p>
            </motion.div>

            <div className="space-y-4 w-full">
              <InfoCard 
                icon={Phone} 
                title="Phone" 
                value="+91 9309804210" 
                href="tel:9309804210"
                color="bg-sky-500"
                delay={0.2}
              />
              <InfoCard 
                icon={Mail} 
                title="Email" 
                value="aarohiitapas17@gmail.com" 
                href="mailto:aarohiitapas17@gmail.com"
                color="bg-gold"
                delay={0.3}
              />
              <InfoCard 
                icon={MapPin} 
                title="Location" 
                value="Pune, Maharashtra" 
                href="#"
                color="bg-purple-500"
                delay={0.4}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
