import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRight, Mail, Github, Linkedin, Download } from "lucide-react";
import profileImage from "../../assets/images/OVN_9038.jpg";
import resumePdf from "../../assets/Hansadee_Rathnayaka.pdf";
export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
    >
      {/* ParticleBackground replaced by InteractiveNetworkBackground globally */}

      <div className="max-w-[90vw] 2xl:max-w-[1600px] mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.4 }}
          className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-88 lg:h-88 mb-6 sm:mb-8 rounded-full border-[4px] border-white shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden group bg-muted"
        >
          <img
            src={profileImage}
            alt="Hansadee Rathnayaka"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-4 sm:mb-6"
        >
          Hi, I'm <br className="md:hidden" />
          <span className="text-primary">Hansadee</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-medium text-foreground/70 mb-8 sm:mb-10 h-[32px] xs:h-[36px] sm:h-[40px] md:h-[48px]"
        >
          <Typewriter
            words={[
              "Full-Stack Developer",
              "DevOps Enthusiast",
              "AI Explorer",
              "Computer Engineering Undergraduate",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto group flex items-center justify-center sm:justify-start gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform text-sm sm:text-base"
          >
            <span>View Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto group flex items-center justify-center sm:justify-start gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full glass font-medium hover:bg-foreground/5 transition-colors text-sm sm:text-base"
          >
            <Mail size={18} />
            <span>Contact Me</span>
          </a>
          <a
            href={resumePdf}
            download="Hansadee_Rathnayaka_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto group flex items-center justify-center sm:justify-start gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full glass font-medium hover:bg-foreground/5 transition-colors text-sm sm:text-base"
          >
            <Download size={18} />
            <span>Resume</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          <a
            href="https://github.com/hansadisr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 rounded-full glass hover:bg-foreground hover:text-background transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://linkedin.com/in/hansadee"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 rounded-full glass hover:bg-[#0A66C2] hover:text-white transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a
            href="mailto:hansadirathnayaka@gmail.com"
            className="p-2.5 sm:p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail size={20} className="sm:w-6 sm:h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
