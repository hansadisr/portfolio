import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

export function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-[80vw] 2xl:max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[var(--color-neon-purple)] to-[var(--color-neon-cyan)] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-6 sm:p-8 md:p-12 rounded-3xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-purple)]/5 to-[var(--color-neon-cyan)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start md:items-center relative z-10">
            <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(176,38,255,0.2)]">
              <GraduationCap size={32} className="sm:w-10 sm:h-10" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                BSc Engineering (Hons) in Computer Engineering
              </h3>
              
              <div className="flex flex-col sm:flex-row sm:gap-4 text-xs sm:text-sm text-foreground/70 font-medium mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="sm:w-4 sm:h-4 text-primary" />
                  <span>University of Ruhuna</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="sm:w-4 sm:h-4 text-primary" />
                  <span>2020 - Present</span>
                </div>
              </div>
              
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium text-xs sm:text-sm shadow-sm">
                <Award size={16} className="sm:w-4 sm:h-4" />
                <span>CGPA: 3.46 / 4.0</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
