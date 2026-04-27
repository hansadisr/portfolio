import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, X } from "lucide-react";

import aiChatImg from "../../assets/projects/AI Book Character Chat App.png";
import smartSeatImg from "../../assets/projects/Smart Seat Booking Cover Image.png";
import taskManagerImg from "../../assets/projects/Task Manager System.png";
import jungleOdysseyImg from "../../assets/projects/Jungle Odyssey Booking Platform.png";
import jungleOdysseyVideo from "../../assets/projects/Jungle Odyssey Booking Platform/Jungle Odyssey Booking Platform.mp4";
import smartSeatVideo from "../../assets/projects/Smart Seat Booking/Smart Seat Booking.mp4";
import aiChatVideo from "../../assets/projects/AI Book Character Chat App/AI Book Character Chat App.mp4";
import uberFareVideo from "../../assets/projects/Uber Fare Prediction/Uber Fare Prediction.mp4";
import uberFareImg from "../../assets/projects/Uber Fare Prediction.png";
import travelMateImg from "../../assets/projects/TravelMate.png";
import taskManagerVideo from "../../assets/projects/Task Manager System/Task Manager System.mp4";
import travelMateVideo from "../../assets/projects/Travel Mate/Travel Mate.mp4";


const categories = ["All", "Full-Stack", "DevOps", "AI/ML"];

const projects = [
  {
    title: "AI Book Character Chat App",
    description: "RAG-based AI system with FastAPI, LangChain, and semantic search.",
    fullDescription: "A fully integrated AI Book Character Chat App that allows readers to interact with their favorite characters. The application leverages a RAG (Retrieval-Augmented Generation) pipeline using LangChain and a vector database for semantic search, ensuring character responses remain accurate to the source material. Built with a FastAPI backend and a responsive React frontend, this project demonstrates advanced natural language processing and scalable architecture.",
    tech: ["FastAPI", "LangChain", "Python", "React", "RAG"],
    category: "AI/ML",
    github: "https://github.com/hansadisr/character-chatbot",
    live: "#",
    image: aiChatImg,
    video: aiChatVideo,
    isPortrait: true,
  },
  {
    title: "Smart Seat Booking System",
    description: "Full-stack booking platform with authentication and REST APIs.",
    fullDescription: "The Smart Seat Booking Web App for film halls using React.js, Node.js, Express.js, Socket.IO, and MySQL. The app lets users browse movies, select showtimes, and book seats through an interactive seat map with Box and ODC categories. A key highlight is the real-time seat locking system — the moment a user selects a seat, it's instantly locked for all other connected users via Socket.IO, preventing double bookings without any page refresh. Seats are automatically released on deselection or disconnect. The backend uses MySQL transactions with FOR UPDATE locks to handle race conditions, and the app includes JWT-based authentication, a payment flow with ticket package selection, and per-user booking history.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    category: "Full-Stack",
    github: "https://github.com/hansadisr/Smart-Seat-Booking-Web-for-Film-Halls",
    live: "#",
    image: smartSeatImg,
    video: smartSeatVideo,
  },
  {
    title: "Task Manager System",
    description: "Production-ready app with Docker, AWS deployment, and CI/CD pipeline.",
    fullDescription: "A comprehensive Task Manager System equipped with advanced productivity tracking and team collaboration features. Designed with DevOps best practices, the application is fully containerized using Docker and deployed on AWS. Continuous Integration and Continuous Deployment (CI/CD) pipelines ensure automated testing and zero-downtime updates, reflecting a truly production-ready environment.",
    tech: ["React", "Docker", "AWS", "CI/CD"],
    category: "DevOps",
    github: "https://github.com/hansadisr/devops-projects",
    live: "http://13.218.98.235:3000/",
    image: taskManagerImg,
    video: taskManagerVideo,
  },
  {
    title: "Uber Fare Prediction",
    description: "Machine Learning system in Python to predict Uber ride fares with high accuracy.",
    fullDescription: "A comprehensive Machine Learning system developed in Python to predict Uber ride fares. The project utilizes Linear Regression and Random Forest algorithms to estimate costs based on trip coordinates, passenger count, and time-based variables, achieving high accuracy through spatial feature engineering and data preprocessing.",
    tech: ["Python", "Machine Learning", "Scikit-Learn"],
    category: "AI/ML",
    github: "https://github.com/hansadisr/uber-fare-prediction",
    live: "#",
    image: uberFareImg,
    video: uberFareVideo,
  },
  {
    title: "Jungle Odyssey Booking Platform",
    description: "Camping and adventure booking system with React and Node.js backend.",
    fullDescription: "Jungle Odyssey Booking Platform is an all-in-one reservation system specifically tailored for camping and adventure packages. It allows users to view available dates, explore detailed itineraries, and securely book their next trip. The application backend is built on Node.js and Express connected to a MySQL database, seamlessly integrated with a mobile-responsive React frontend.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    category: "Full-Stack",
    github: "https://github.com/hansadisr/GUI_Project",
    live: "#",
    image: jungleOdysseyImg,
    video: jungleOdysseyVideo,
  },
  {
    title: "TravelMate",
    description: "Cross-platform travel companion mobile application built with Flutter and Firebase.",
    fullDescription: "TravelMate is a comprehensive mobile application developed using Flutter, designed to serve as a digital companion for travelers. It integrates Firebase Authentication for secure access, Cloud Firestore and Realtime Database for managing user profiles, trips, and shared experiences in real time. The application features an intuitive and responsive UI that works seamlessly across iOS and Android, allowing users to select destinations, capture memories, and discover new places to visit.",
    tech: ["Flutter", "Dart", "Firebase", "Firestore"],
    category: "Full-Stack",
    github: "https://github.com/tanuri2002/TravelMate",
    live: "#",
    image: travelMateImg,
    video: travelMateVideo,
    isPortrait: true,
  },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = projects.filter(
    (project) => activeTab === "All" || project.category === activeTab
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-[90vw] 2xl:max-w-[1600px] mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
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

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="glass rounded-3xl overflow-hidden group relative flex flex-col h-full cursor-pointer"
              >
                <div className="relative w-full aspect-[4/3] sm:aspect-video overflow-hidden border-b border-border/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 pointer-events-none" />
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute top-4 right-4 z-20 flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-6 sm:p-8 relative z-20 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 mb-4 sm:mb-6 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-background/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto glass border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 z-50 p-1.5 sm:p-2 text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors drop-shadow-md cursor-pointer"
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>

              <div className={`w-full relative bg-black/60 flex-shrink-0 flex items-center justify-center overflow-hidden ${selectedProject.isPortrait ? 'h-[500px] sm:h-[70vh]' : 'aspect-video'}`}>
                {selectedProject.video ? (
                  <video
                    src={selectedProject.video}
                    autoPlay
                    controls
                    controlsList="nodownload"
                    className={`max-h-full ${selectedProject.isPortrait ? 'h-full w-auto' : 'w-full h-full object-contain'}`}
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{selectedProject.title}</h3>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {selectedProject.tech.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-primary/20 text-primary border border-primary/30 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-foreground/80 leading-relaxed text-lg mb-10 whitespace-pre-line">
                  {selectedProject.fullDescription}
                </p>

                <div className="flex flex-wrap gap-4 mt-auto">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 rounded-xl bg-foreground text-background font-semibold hover:scale-105 transition-transform"
                  >
                    <Github size={20} />
                    <span>View Source Code</span>
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 rounded-xl glass font-semibold hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Visit Live Demo</span>
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
