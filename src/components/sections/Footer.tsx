import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50 bg-background/80 backdrop-blur-md relative z-10">
      <div className="max-w-[90vw] 2xl:max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-foreground/60 font-medium text-sm text-center"
        >
          &copy; {new Date().getFullYear()} Hansadee Rathnayaka. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
