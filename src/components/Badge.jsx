export default function Badge({ type, text }) {
  const isPrimary = type === 'primary';
  const colorClass = isPrimary ? 'text-primary' : 'text-secondary';
  
  return (
    <span className={`font-['Inter'] inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${colorClass} neo-raised bg-surface tracking-widest uppercase`}>
      {text}
    </span>
  );
}
