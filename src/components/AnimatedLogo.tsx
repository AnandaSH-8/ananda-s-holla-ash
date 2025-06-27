
const AnimatedLogo = () => {
  return (
    <div className="relative inline-block">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="animate-realistic-fire"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Multiple fire gradients for realistic effect */}
          <radialGradient id="fireCore" cx="50%" cy="85%" r="40%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="30%" stopColor="#FF8C00" />
            <stop offset="70%" stopColor="#FF4500" />
            <stop offset="100%" stopColor="#DC143C" />
          </radialGradient>
          
          <radialGradient id="fireOuter" cx="50%" cy="90%" r="60%">
            <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FF4500" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8B0000" stopOpacity="0.3" />
          </radialGradient>

          {/* Glow filter for realistic fire effect */}
          <filter id="fireGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Turbulence for flame flicker */}
          <filter id="turbulence">
            <feTurbulence baseFrequency="0.9" numOctaves="4" result="noise" seed="1"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/>
          </filter>
        </defs>
        
        {/* Base flame shape - larger and more realistic */}
        <path
          d="M50 15 
             C60 25, 70 35, 68 50 
             C66 65, 58 75, 50 80 
             C42 75, 34 65, 32 50 
             C30 35, 40 25, 50 15 Z"
          fill="url(#fireOuter)"
          filter="url(#fireGlow)"
          className="animate-flame-flicker"
        />
        
        {/* Inner flame */}
        <path
          d="M50 20 
             C58 28, 65 38, 63 52 
             C61 62, 55 68, 50 72 
             C45 68, 39 62, 37 52 
             C35 38, 42 28, 50 20 Z"
          fill="url(#fireCore)"
          filter="url(#fireGlow)"
          className="animate-flame-inner"
        />
        
        {/* Letter A - bold and prominent */}
        <text
          x="50"
          y="55"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-white font-black animate-letter-glow drop-shadow-lg"
          style={{ 
            fontSize: '36px', 
            fontFamily: 'Inter, sans-serif', 
            fontWeight: '900',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          A
        </text>
        
        {/* Animated sparks and embers */}
        <g className="animate-sparks">
          <circle cx="35" cy="25" r="2" fill="#FFD700" opacity="0.9">
            <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="cy" values="25;20;25" dur="1.2s" repeatCount="indefinite" begin="0s"/>
          </circle>
          <circle cx="65" cy="20" r="1.5" fill="#FF8C00" opacity="0.8">
            <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0.3s"/>
            <animate attributeName="cy" values="20;15;20" dur="1.5s" repeatCount="indefinite" begin="0.3s"/>
          </circle>
          <circle cx="45" cy="18" r="1.2" fill="#FF4500" opacity="0.7">
            <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" begin="0.6s"/>
            <animate attributeName="cy" values="18;12;18" dur="1.8s" repeatCount="indefinite" begin="0.6s"/>
          </circle>
          <circle cx="55" cy="22" r="1" fill="#DC143C" opacity="0.6">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.9s"/>
            <animate attributeName="cy" values="22;17;22" dur="2s" repeatCount="indefinite" begin="0.9s"/>
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedLogo;
