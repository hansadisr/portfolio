import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Award, X } from "lucide-react";

import ragCertImg from "../../assets/certificates/RAG.png";
import rag2CertImg from "../../assets/certificates/Rag2.png";
import webDesignCertImg from "../../assets/certificates/Web Design.png";

const categories = ["All", "Development", "DevOps", "AI/ML", "Cloud"];

const certifications = [
  {
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa",
    date: "2026",
    category: "Development",
    image: webDesignCertImg,
    link: "https://drive.google.com/file/d/14yzjswD6FcLAp-oDINcKjMN9WwqSvMxn/view",
    description: "Successfully completed the online learning programme conducted by the Department of Information Technology, Faculty of Information Technology at the University of Moratuwa. Gained practical knowledge in foundational principles and practices of modern web design.",
  },
  {
    title: "Building RAG application with Langchain",
    issuer: "Coursera",
    date: "2026",
    category: "AI/ML",
    image: ragCertImg,
    link: "https://www.coursera.org/account/accomplishments/verify/6S1C6IJAQE5V?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
    description: "Learned how to design and build a robust Retrieval-Augmented Generation (RAG) system using LangChain. The curriculum covered prompt engineering, implementing vector databases for semantic search, and dynamically retrieving and injecting relevant context into Large Language Models to improve the accuracy and relevance of their responses.",
  },
  {
    title: "RAG Course for Beginners",
    issuer: "Simplilearn SkillUp",
    date: "March 2026",
    category: "AI/ML",
    image: rag2CertImg,
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0NzU0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTkzMzI4OF8xMDIyMjExNF8xNzcyOTQyODY0MDI2LnBuZyIsInVzZXJuYW1lIjoiSGFuc2FkZWUgUmF0aG5heWFrYSJ9",
    description: "Successfully completed the RAG Course for Beginners on Simplilearn SkillUp. Gained foundational understanding of Retrieval-Augmented Generation (RAG) concepts, including how to combine retrieval mechanisms with generative AI models to produce accurate and context-aware responses.",
  }
];

export function Certifications() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredCerts = certifications.filter(
    (cert) => activeTab === "All" || cert.category === activeTab
  );

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-[90vw] 2xl:max-w-[1600px] mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[var(--color-neon-purple)] to-[var(--color-neon-cyan)] mx-auto rounded-full mb-8 sm:mb-12" />

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeTab === category
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(176,38,255,0.5)] scale-105"
                  : "glass hover:bg-primary/20 text-foreground/80 hover:text-foreground"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:[grid-template-columns:repeat(auto-fit,minmax(250px,360px))] lg:justify-center gap-6 xl:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedCert(cert)}
                className="glass rounded-3xl overflow-hidden group relative flex flex-col h-full cursor-pointer"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10 pointer-events-none" />
                  <img
                    src={cert.image}
                    alt={cert.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20">
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium glass text-foreground">
                      {cert.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6 md:p-8 relative z-20 flex flex-col flex-grow -mt-8 sm:-mt-10 md:-mt-12">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-2xl glass flex items-center justify-center shadow-lg mb-2 sm:mb-4 text-primary flex-shrink-0">
                    <Award size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--color-neon-purple)] group-hover:to-[var(--color-neon-cyan)] transition-all duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 mb-3 sm:mb-4 flex-grow">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-3 sm:pt-4 border-t border-border/50">
                    <span className="text-xs text-foreground/50 font-medium tracking-wider uppercase">
                      {cert.date}
                    </span>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-xs sm:text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      View Credential <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Certification Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-background/80 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto glass border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 z-50 p-1.5 sm:p-2 text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors drop-shadow-md cursor-pointer"
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>

              <div className="w-full relative bg-muted aspect-[4/3] sm:aspect-video flex-shrink-0">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-contain p-2 sm:p-4"
                />
              </div>

              <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col flex-1">
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl glass flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <Award size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-bold">{selectedCert.title}</h3>
                    <p className="text-xs sm:text-base text-primary font-medium">{selectedCert.issuer}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-foreground/10 text-foreground/80 w-fit">
                    {selectedCert.category}
                  </span>
                  <span className="text-xs sm:text-sm text-foreground/50 font-medium">Issued: {selectedCert.date}</span>
                </div>

                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6 sm:mb-8">
                  {selectedCert.description}
                </p>

                <div className="mt-auto">
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary text-primary-foreground font-medium sm:font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-sm sm:text-base"
                  >
                    <ExternalLink size={18} />
                    <span>Verify Credential</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
