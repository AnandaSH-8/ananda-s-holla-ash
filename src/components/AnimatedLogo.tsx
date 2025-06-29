const AnimatedLogo = () => {
  return (
    <div className="relative inline-block cursor-pointer group">
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        className="animate-logo-burn hover:scale-110 transition-transform duration-300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Enhanced fire gradients for more realistic effect */}
          <radialGradient id="fireCore" cx="50%" cy="80%" r="35%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="25%" stopColor="#FFA500" />
            <stop offset="50%" stopColor="#FF6B00" />
            <stop offset="75%" stopColor="#FF4500" />
            <stop offset="100%" stopColor="#DC143C" />
          </radialGradient>
          
          <radialGradient id="fireOuter" cx="50%" cy="85%" r="50%">
            <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#FF4500" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#DC143C" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8B0000" stopOpacity="0.2" />
          </radialGradient>

          <radialGradient id="fireInner" cx="50%" cy="75%" r="25%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#FFD700" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#FFA500" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.5" />
          </radialGradient>

          {/* Advanced glow effects */}
          <filter id="fireGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="letterGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Flame distortion for realistic flicker */}
          <filter id="flameTurbulence">
            <feTurbulence baseFrequency="0.05 0.1" numOctaves="3" result="noise" seed="2"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5"/>
          </filter>
        </defs>
        
        {/* Multiple flame layers for depth */}
        
        {/* Outermost flame - largest */}
        <path
          d="M30 8 
             C38 15, 45 25, 43 38 
             C41 48, 35 52, 30 54 
             C25 52, 19 48, 17 38 
             C15 25, 22 15, 30 8 Z"
          fill="url(#fireOuter)"
          filter="url(#fireGlow)"
          className="animate-flame-outer"
        />
        
        {/* Middle flame layer */}
        <path
          d="M30 12 
             C36 18, 40 26, 38.5 36 
             C37 44, 33 47, 30 48.5 
             C27 47, 23 44, 21.5 36 
             C20 26, 24 18, 30 12 Z"
          fill="url(#fireCore)"
          filter="url(#fireGlow)"
          className="animate-flame-middle"
        />
        
        {/* Inner flame - hottest part */}
        <path
          d="M30 16 
             C34 20, 36 26, 35 32 
             C34 37, 32 39, 30 40 
             C28 39, 26 37, 25 32 
             C24 26, 26 20, 30 16 Z"
          fill="url(#fireInner)"
          filter="url(#fireGlow)"
          className="animate-flame-inner"
        />
        
        {/* Letter A - bold and burning */}
        <text
          x="30"
          y="35"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-white font-black animate-letter-burn drop-shadow-lg"
          filter="url(#letterGlow)"
          style={{ 
            fontSize: '24px', 
            fontFamily: 'Inter, sans-serif', 
            fontWeight: '900',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
          }}
        >
          A
        </text>
        
        {/* Dynamic sparks and embers */}
        <g className="animate-sparks-dance">
          {/* Primary sparks */}
          <circle cx="20" cy="15" r="1.5" fill="#FFD700" className="animate-spark-1">
            <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="cy" values="15;10;15" dur="0.8s" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="r" values="1.5;2;1.5" dur="0.8s" repeatCount="indefinite" begin="0s"/>
          </circle>
          
          <circle cx="40" cy="12" r="1.2" fill="#FFA500" className="animate-spark-2">
            <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite" begin="0.3s"/>
            <animate attributeName="cy" values="12;7;12" dur="1.2s" repeatCount="indefinite" begin="0.3s"/>
            <animate attributeName="r" values="1.2;1.8;1.2" dur="1.2s" repeatCount="indefinite" begin="0.3s"/>
          </circle>
          
          <circle cx="25" cy="10" r="1" fill="#FF6B00" className="animate-spark-3">
            <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0.6s"/>
            <animate attributeName="cy" values="10;5;10" dur="1.5s" repeatCount="indefinite" begin="0.6s"/>
            <animate attributeName="r" values="1;1.5;1" dur="1.5s" repeatCount="indefinite" begin="0.6s"/>
          </circle>
          
          <circle cx="35" cy="14" r="0.8" fill="#FF4500" className="animate-spark-4">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.9s"/>
            <animate attributeName="cy" values="14;8;14" dur="2s" repeatCount="indefinite" begin="0.9s"/>
            <animate attributeName="r" values="0.8;1.3;0.8" dur="2s" repeatCount="indefinite" begin="0.9s"/>
          </circle>
          
          {/* Secondary floating embers */}
          <circle cx="18" cy="20" r="0.5" fill="#DC143C" className="animate-ember-float-1">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="cx" values="18;22;18" dur="3s" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="cy" values="20;18;20" dur="3s" repeatCount="indefinite" begin="0s"/>
          </circle>
          
          <circle cx="42" cy="25" r="0.7" fill="#8B0000" className="animate-ember-float-2">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="cx" values="42;38;42" dur="4s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="cy" values="25;22;25" dur="4s" repeatCount="indefinite" begin="1s"/>
          </circle>
        </g>
        
        {/* Heat distortion effect */}
        <rect x="15" y="45" width="30" height="8" fill="url(#fireOuter)" opacity="0.3" className="animate-heat-shimmer" rx="4"/>
      </svg>
      
      {/* Hover tooltip */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="text-xs text-[#FF6B00] bg-white dark:bg-[#2E2E2E] px-3 py-1 rounded-full shadow-lg border border-[#FF6B00]/20 whitespace-nowrap">
          Always Burning 🔥
        </span>
      </div>
    </div>
  );
};

export default AnimatedLogo;