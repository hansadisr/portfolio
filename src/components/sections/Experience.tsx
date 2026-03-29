import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Briefcase, Users, Star, Award } from "lucide-react";

const experiences = [
  {
    role: "Treasurer",
    organization: "IEEE Computer Society Chapter, University of Ruhuna",
    icon: <Briefcase size={28} />,
    color: "var(--color-neon-purple)",
    description: "Managed financial operations, budgeting, and funding for society events and initiatives.",
  },
  {
    role: "Event Leadership Roles",
    organization: "University of Ruhuna",
    icon: <Star size={28} />,
    color: "var(--color-neon-blue)",
    description: "Led multiple technical and non-technical events, coordinating teams and ensuring successful execution.",
  },
  {
    role: "Volunteering",
    organization: "AIESEC University of Ruhuna",
    icon: <Users size={28} />,
    color: "var(--color-neon-cyan)",
    description: "Guided a team of volunteers, facilitating cross-cultural exchanges and leadership development programs.",
  },
  {
    role: "FundRaising Committee Team Lead",
    organization: "Rextro Exhibition, University of Ruhuna",
    icon: <Award size={28} />,
    color: "#ff00ff",
    description: "Spearheaded the finance committee for the university's major exhibition, securing sponsorships and managing expenses.",
  },
];

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-background">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-neon-purple)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[90vw] 2xl:max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
              Leadership & <br className="hidden md:block" />
              <span className="text-gradient font-light italic">Experience</span>
            </h2>
          </div>
          <div className="md:max-w-sm text-sm sm:text-base text-foreground/60 border-l-2 border-[var(--color-neon-purple)] pl-4 sm:pl-6">
            A track record of taking initiative, guiding teams, and delivering impactful results across various organizations.
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-3xl p-6 sm:p-8 md:p-12 group relative flex flex-col md:flex-row md:items-center gap-6 md:gap-16 cursor-pointer overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${exp.color}10 0%, transparent 60%)` }}
              />
              
              {/* Oversized Number */}
              <div className="text-4xl sm:text-6xl md:text-8xl font-light text-foreground/5 group-hover:text-foreground/20 transition-colors duration-500 font-mono w-20 sm:w-24 md:w-32 flex-shrink-0">
                0{index + 1}
              </div>
              
              {/* Title & Org */}
              <div className="flex-1 relative z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--color-neon-purple)] group-hover:to-[var(--color-neon-cyan)] transition-all duration-500">
                  {exp.role}
                </h3>
                <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-foreground/50 group-hover:text-foreground/90 transition-colors duration-500" style={{ color: exp.color }}>
                  {exp.organization}
                </p>
              </div>
              
              {/* Description */}
              <div className="md:w-1/3 relative z-10 flex flex-col gap-6">
                <p className="text-sm sm:text-base text-foreground/60 leading-relaxed group-hover:text-foreground/90 transition-colors duration-500">
                  {exp.description}
                </p>
              </div>

              {/* Floating Icon */}
              <div 
                className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full border border-border/50 group-hover:border-transparent group-hover:bg-background/50 shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative z-10"
                style={{ color: exp.color }}
              >
                {exp.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
