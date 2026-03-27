import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { Mail, Send, Github, Linkedin, MapPin, Phone } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    reset();
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-foreground/5">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-neon-purple)] rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[var(--color-neon-cyan)] rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-[var(--color-neon-blue)] rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-[90vw] 2xl:max-w-[1600px] mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[var(--color-neon-purple)] to-[var(--color-neon-cyan)] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="glass p-6 sm:p-8 rounded-3xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-purple)]/5 to-[var(--color-neon-cyan)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 relative z-10">Let's Connect</h3>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-6 sm:mb-8 relative z-10">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="flex flex-col gap-4 sm:gap-6 relative z-10">
                <a
                  href="mailto:hansadirathnayaka@gmail.com"
                  className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-foreground/80 hover:text-primary transition-colors group/link"
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/link:scale-110 transition-transform flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium break-all">hansadirathnayaka@gmail.com</span>
                </a>

                <a
                  href="tel:+94741081008"
                  className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-foreground/80 hover:text-primary transition-colors group/link"
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/link:scale-110 transition-transform flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <span className="font-medium">+94 74 108 1008</span>
                </a>

                <div className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-foreground/80">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <span className="font-medium">Matara, Sri Lanka</span>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/50 relative z-10">
                <a
                  href="https://github.com/hansadisr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/hansadee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-full glass flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors shadow-lg"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass p-6 sm:p-8 rounded-3xl flex flex-col gap-4 sm:gap-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-purple)]/5 to-[var(--color-neon-cyan)]/5 pointer-events-none" />

              <div className="relative z-10">
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground/80 mb-2">
                  Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  id="name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl glass focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs sm:text-sm mt-1">{errors.name.message}</span>
                )}
              </div>

              <div className="relative z-10">
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground/80 mb-2">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  id="email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl glass focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs sm:text-sm mt-1">{errors.email.message}</span>
                )}
              </div>

              <div className="relative z-10">
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground/80 mb-2">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  id="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl glass focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-sm"
                  placeholder="Hello, I'd like to talk about..."
                />
                {errors.message && (
                  <span className="text-red-500 text-xs sm:text-sm mt-1">{errors.message.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-center gap-2 w-full py-3 sm:py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(176,38,255,0.4)] disabled:opacity-50 relative z-10 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
