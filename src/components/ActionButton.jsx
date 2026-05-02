import { motion } from 'framer-motion';

export default function ActionButton({ variant = 'default', children, ...props }) {
  const isGlow = variant === 'glow';
  
  const baseClasses = "font-sans flex-1 font-semibold py-4 px-6 rounded-xl neo-raised neo-button-active transition-all flex items-center justify-center gap-2";
  
  if (isGlow) {
    return (
      <motion.button 
        whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(157, 78, 221, 0.8)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className={`${baseClasses} bg-surface text-primary glow-btn relative overflow-hidden group border border-transparent hover:border-primary/30`}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </motion.button>
    );
  }
  
  return (
    <motion.button 
      whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`${baseClasses} bg-surface text-on-surface-variant`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
