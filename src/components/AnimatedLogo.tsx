
const AnimatedLogo = () => {
  return (
    <div className="relative inline-block">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        className="animate-flame"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fire base */}
        <defs>
          <radialGradient id="fireGradient" cx="50%" cy="80%" r="60%">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="50%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FF4500" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Flame shape */}
        <path
          d="M20 5 C25 10, 30 15, 28 22 C26 28, 22 30, 20 32 C18 30, 14 28, 12 22 C10 15, 15 10, 20 5 Z"
          fill="url(#fireGradient)"
          filter="url(#glow)"
          className="animate-flame"
        />
        
        {/* Letter A */}
        <text
          x="20"
          y="25"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-white font-bold text-lg animate-glow"
          style={{ fontSize: '16px', fontFamily: 'Inter, sans-serif' }}
        >
          A
        </text>
        
        {/* Flickering sparks */}
        <circle cx="15" cy="12" r="1" fill="#FFA500" opacity="0.8">
          <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0s"/>
        </circle>
        <circle cx="25" cy="8" r="0.8" fill="#FF6B00" opacity="0.6">
          <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite" begin="0.3s"/>
        </circle>
        <circle cx="18" cy="6" r="0.6" fill="#FFA500" opacity="0.9">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.8s"/>
        </circle>
      </svg>
    </div>
  );
};

export default AnimatedLogo;
