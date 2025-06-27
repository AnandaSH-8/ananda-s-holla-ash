
const AnimatedLogo = () => {
  return (
    <div className="relative inline-block">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        className="animate-flame"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fire base */}
        <defs>
          <radialGradient id="fireGradient" cx="50%" cy="80%" r="60%">
            <stop offset="0%" stopColor="#FF8C42" />
            <stop offset="50%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FF6B00" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Flame shape - scaled up */}
        <path
          d="M40 10 C50 20, 60 30, 56 44 C52 56, 44 60, 40 64 C36 60, 28 56, 24 44 C20 30, 30 20, 40 10 Z"
          fill="url(#fireGradient)"
          filter="url(#glow)"
          className="animate-flame"
        />
        
        {/* Letter A - larger */}
        <text
          x="40"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-white font-bold animate-glow"
          style={{ fontSize: '32px', fontFamily: 'Inter, sans-serif', fontWeight: '900' }}
        >
          A
        </text>
        
        {/* Flickering sparks - scaled positions */}
        <circle cx="30" cy="24" r="2" fill="#FFA500" opacity="0.8">
          <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0s"/>
        </circle>
        <circle cx="50" cy="16" r="1.6" fill="#FF8C42" opacity="0.6">
          <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite" begin="0.3s"/>
        </circle>
        <circle cx="36" cy="12" r="1.2" fill="#FFA500" opacity="0.9">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.8s"/>
        </circle>
        <circle cx="44" cy="14" r="1" fill="#FF6B00" opacity="0.7">
          <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" begin="1.2s"/>
        </circle>
      </svg>
    </div>
  );
};

export default AnimatedLogo;
