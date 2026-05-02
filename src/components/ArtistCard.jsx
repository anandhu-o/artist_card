import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Ticket } from 'lucide-react';
import Badge from './Badge';
import ActionButton from './ActionButton';

export default function ArtistCard({ artist }) {
  const ref = useRef(null);
  
  // Motion values for 3D hover effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smoother movement
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });

  // Map mouse position to rotation logic
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate normalized mouse position relative to card center (-0.5 to 0.5)
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="bg-surface/95 backdrop-blur-sm rounded-[2rem] w-full max-w-4xl h-[650px] md:h-[600px] neo-raised flex flex-col md:flex-row overflow-hidden p-6 md:p-8 gap-8 cursor-grab active:cursor-grabbing mx-auto my-4 transition-colors duration-500"
    >
      {/* Artist Image Container */}
      <div 
        className="w-full md:w-[45%] flex-shrink-0 relative group rounded-2xl overflow-hidden neo-raised p-2 bg-surface animate-spring-up stagger-1 h-64 md:h-full"
        style={{ transform: "translateZ(20px)" }}
      >
        <div className="w-full h-full rounded-xl overflow-hidden relative">
          <img 
            className="object-cover w-full h-full animate-breathing pointer-events-none" 
            src={artist.imageUrl}
            alt={artist.name} 
          />
          {/* Subtle inner shadow overlay for depth */}
          <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] rounded-xl pointer-events-none"></div>
        </div>
      </div>

      {/* Artist Info Container */}
      <div 
        className="w-full md:w-[55%] flex flex-col justify-center animate-spring-up stagger-2 h-full"
        style={{ transform: "translateZ(30px)" }}
      >
        {/* Badges */}
        <div className="flex flex-wrap gap-3 mb-4 flex-shrink-0">
          {artist.badges.map((badge, idx) => (
            <Badge key={idx} type={idx === 0 ? 'primary' : 'secondary'} text={badge} />
          ))}
        </div>

        {/* Titles */}
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl line-clamp-2 leading-tight font-black text-on-surface mb-2 tracking-tighter flex-shrink-0" style={{ fontWeight: 900 }}>
          {artist.name}
        </h2>
        <h3 className="font-headline text-xl text-primary font-extrabold mb-6 tracking-tight uppercase flex items-center md:items-start gap-2 flex-col md:flex-row md:flex-wrap flex-shrink-0">
          <span>{artist.event}</span>
          {artist.subTitle && <span className="text-secondary">{artist.subTitle}</span>}
        </h3>

        {/* Bio */}
        <div className="flex-grow overflow-hidden relative neo-pressed rounded-xl p-4 bg-surface/50 mb-8 animate-spring-up stagger-3" style={{ transform: "translateZ(10px)" }}>
           <p className="font-body text-on-surface-variant text-sm md:text-base leading-relaxed h-full overflow-y-auto hide-scrollbar">
             {artist.bio}
           </p>
        </div>

        {/* Actions */}
        <div 
          className="flex flex-col sm:flex-row gap-4 mt-auto animate-spring-up stagger-4 flex-shrink-0"
          style={{ transform: "translateZ(40px)" }}
        >
          <ActionButton>Know More</ActionButton>
          <ActionButton variant="glow">
            Book Now <Ticket size={20} />
          </ActionButton>
        </div>
      </div>
    </motion.article>
  );
}
