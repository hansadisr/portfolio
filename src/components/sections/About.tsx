import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Code2, Server, Brain, Layers } from "lucide-react";

const focusAreas = [
  {
    icon: <Code2 size={24} />,
    title: "Full-Stack Development",
    description: "Building responsive, modern web applications from frontend to backend.",
  },
  {
    icon: <Server size={24} />,
    title: "Cloud & DevOps",
    description: "Deploying scalable infrastructure with AWS, Docker, and CI/CD pipelines.",
  },
  {
    icon: <Brain size={24} />,
    title: "Artificial Intelligence",
    description: "Integrating LLMs and RAG systems for intelligent applications.",
  },
  {
    icon: <Layers size={24} />,
    title: "Scalable Systems",
    description: "Designing robust architectures that handle growth efficiently.",
  },
];

const allSkills = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" },
  { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
  { name: "Ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
];

const MarqueeRow = ({ items }: { items: typeof allSkills }) => {
  return (
    <div className="flex overflow-hidden w-full group mt-24 relative">
      {/* Gradient masks for smooth fade out at edges */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {/* First set of items */}
        <div className="flex">
          {items.map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 mx-2 md:mx-4 glass rounded-2xl flex items-center justify-center p-3 shadow-sm hover:scale-110 transition-transform cursor-pointer"
              title={item.name}
            >
              <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex">
          {items.map((item, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 mx-2 md:mx-4 glass rounded-2xl flex items-center justify-center p-3 shadow-sm hover:scale-110 transition-transform cursor-pointer"
              title={item.name}
            >
              <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-[90vw] 2xl:max-w-[1600px] mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[var(--color-neon-purple)] to-[var(--color-neon-cyan)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-6 sm:p-8 md:p-12 rounded-3xl relative group flex flex-col items-center text-center md:items-start md:text-left"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-purple)]/5 to-[var(--color-neon-cyan)]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 relative z-10">Hello, I'm Hansadee Rathnayaka</h3>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4 sm:mb-6 relative z-10">
              A passionate Computer Engineering undergraduate specializing in full-stack development, cloud technologies, DevOps, and AI-enabled systems.
            </p>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6 sm:mb-8 relative z-10">
              I am interested in building scalable intelligent applications that combine modern frontend experiences with powerful backend systems. Based in Matara, Sri Lanka, I am constantly exploring new technologies to solve complex problems.
            </p>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass p-4 sm:p-6 rounded-2xl flex flex-col gap-3 sm:gap-4 group relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-[var(--color-neon-purple)]/10 rounded-full blur-2xl group-hover:bg-[var(--color-neon-cyan)]/20 transition-colors duration-500" />
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-1 sm:mb-2">
                  {area.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-bold">{area.title}</h4>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Marquee added to the bottom of About section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-[100vw] mx-auto"
      >
        <MarqueeRow items={allSkills} />
      </motion.div>
    </section>
  );
}
