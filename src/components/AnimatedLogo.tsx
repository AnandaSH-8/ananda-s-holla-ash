const AnimatedLogo = () => {
  return (
    <div className="relative inline-block cursor-pointer group">
      {/* Light Theme - Ocean Waves */}
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        className="block dark:hidden hover:scale-110 transition-transform duration-300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Ocean Wave Gradients */}
          <radialGradient id="oceanDeep" cx="50%" cy="80%" r="60%">
            <stop offset="0%" stopColor="#00BFFF" />
            <stop offset="30%" stopColor="#1E90FF" />
            <stop offset="60%" stopColor="#0066CC" />
            <stop offset="100%" stopColor="#003366" />
          </radialGradient>
          
          <radialGradient id="oceanMid" cx="50%" cy="75%" r="45%">
            <stop offset="0%" stopColor="#87CEEB" />
            <stop offset="40%" stopColor="#4682B4" />
            <stop offset="80%" stopColor="#1E90FF" />
            <stop offset="100%" stopColor="#0066CC" />
          </radialGradient>

          <radialGradient id="oceanSurface" cx="50%" cy="70%" r="35%">
            <stop offset="0%" stopColor="#F0F8FF" />
            <stop offset="30%" stopColor="#B0E0E6" />
            <stop offset="70%" stopColor="#87CEEB" />
            <stop offset="100%" stopColor="#4682B4" />
          </radialGradient>

          {/* Water Effects */}
          <filter id="waterGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="letterWaterGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Wave distortion */}
          <filter id="waveTurbulence">
            <feTurbulence baseFrequency="0.02 0.05" numOctaves="2" result="noise" seed="1"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/>
          </filter>
        </defs>
        
        {/* Multiple wave layers for depth */}
        
        {/* Deep ocean wave - largest */}
        <path
          d="M30 10 
             C42 18, 48 28, 46 42 
             C44 52, 36 56, 30 58 
             C24 56, 16 52, 14 42 
             C12 28, 18 18, 30 10 Z"
          fill="url(#oceanDeep)"
          filter="url(#waterGlow)"
          className="animate-wave-deep"
        />
        
        {/* Mid ocean wave */}
        <path
          d="M30 14 
             C38 20, 42 28, 40.5 38 
             C39 46, 35 49, 30 50.5 
             C25 49, 21 46, 19.5 38 
             C18 28, 22 20, 30 14 Z"
          fill="url(#oceanMid)"
          filter="url(#waterGlow)"
          className="animate-wave-mid"
        />
        
        {/* Surface wave - brightest */}
        <path
          d="M30 18 
             C34 22, 36 28, 35 34 
             C34 39, 32 41, 30 42 
             C28 41, 26 39, 25 34 
             C24 28, 26 22, 30 18 Z"
          fill="url(#oceanSurface)"
          filter="url(#waterGlow)"
          className="animate-wave-surface"
        />
        
        {/* Letter A - ocean themed */}
        <text
          x="30"
          y="35"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-white font-black animate-letter-water-glow drop-shadow-lg"
          filter="url(#letterWaterGlow)"
          style={{ 
            fontSize: '24px', 
            fontFamily: 'Inter, sans-serif', 
            fontWeight: '900',
            textShadow: '0 0 10px rgba(0, 191, 255, 0.8)'
          }}
        >
          A
        </text>
        
        {/* Water bubbles */}
        <g className="animate-bubbles-float">
          <circle cx="18" cy="20" r="1.5" fill="#87CEEB" className="animate-bubble-1">
            <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="cy" values="20;12;20" dur="3s" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="r" values="1.5;2.5;1.5" dur="3s" repeatCount="indefinite" begin="0s"/>
          </circle>
          
          <circle cx="42" cy="18" r="1.2" fill="#B0E0E6" className="animate-bubble-2">
            <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="0.5s"/>
            <animate attributeName="cy" values="18;8;18" dur="4s" repeatCount="indefinite" begin="0.5s"/>
            <animate attributeName="r" values="1.2;2;1.2" dur="4s" repeatCount="indefinite" begin="0.5s"/>
          </circle>
          
          <circle cx="25" cy="15" r="1" fill="#4682B4" className="animate-bubble-3">
            <animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="cy" values="15;5;15" dur="5s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="r" values="1;1.8;1" dur="5s" repeatCount="indefinite" begin="1s"/>
          </circle>
          
          <circle cx="35" cy="22" r="0.8" fill="#1E90FF" className="animate-bubble-4">
            <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" begin="1.5s"/>
            <animate attributeName="cy" values="22;10;22" dur="3.5s" repeatCount="indefinite" begin="1.5s"/>
            <animate attributeName="r" values="0.8;1.5;0.8" dur="3.5s" repeatCount="indefinite" begin="1.5s"/>
          </circle>
        </g>
        
        {/* Water ripples */}
        <rect x="10" y="50" width="40" height="6" fill="url(#oceanSurface)" opacity="0.4" className="animate-water-ripple" rx="3"/>
      </svg>

      {/* Dark Theme - Burning Fire */}
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        className="hidden dark:block hover:scale-110 transition-transform duration-300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Enhanced fire gradients for more realistic effect */}
          <radialGradient id="fireCore" cx="50%" cy="80%" r="35%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="20%" stopColor="#FFD700" />
            <stop offset="40%" stopColor="#FFA500" />
            <stop offset="60%" stopColor="#FF6B00" />
            <stop offset="80%" stopColor="#FF4500" />
            <stop offset="100%" stopColor="#DC143C" />
          </radialGradient>
          
          <radialGradient id="fireOuter" cx="50%" cy="85%" r="50%">
            <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#FF4500" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#DC143C" stopOpacity="0.6" />
            <stop offset="80%" stopColor="#8B0000" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4B0000" stopOpacity="0.2" />
          </radialGradient>

          <radialGradient id="fireInner" cx="50%" cy="75%" r="25%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#FFD700" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FFA500" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#FF6B00" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FF4500" stopOpacity="0.4" />
          </radialGradient>

          {/* Advanced glow effects */}
          <filter id="fireGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="letterFireGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Flame distortion for realistic flicker */}
          <filter id="flameTurbulence">
            <feTurbulence baseFrequency="0.08 0.15" numOctaves="4" result="noise" seed="3"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5"/>
          </filter>
        </defs>
        
        {/* Multiple flame layers for massive fire effect */}
        
        {/* Outermost flame - huge and dramatic */}
        <path
          d="M30 6 
             C42 12, 50 22, 48 40 
             C46 50, 38 55, 30 57 
             C22 55, 14 50, 12 40 
             C10 22, 18 12, 30 6 Z"
          fill="url(#fireOuter)"
          filter="url(#fireGlow)"
          className="animate-flame-massive"
        />
        
        {/* Middle flame layer - intense heat */}
        <path
          d="M30 10 
             C38 16, 44 24, 42.5 38 
             C41 46, 35 50, 30 51.5 
             C25 50, 19 46, 17.5 38 
             C16 24, 22 16, 30 10 Z"
          fill="url(#fireCore)"
          filter="url(#fireGlow)"
          className="animate-flame-intense"
        />
        
        {/* Inner flame - white hot core */}
        <path
          d="M30 14 
             C35 18, 38 24, 37 32 
             C36 38, 33 41, 30 42 
             C27 41, 24 38, 23 32 
             C22 24, 25 18, 30 14 Z"
          fill="url(#fireInner)"
          filter="url(#fireGlow)"
          className="animate-flame-core"
        />
        
        {/* Letter A - burning white hot */}
        <text
          x="30"
          y="35"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-white font-black animate-letter-fire-burn drop-shadow-lg"
          filter="url(#letterFireGlow)"
          style={{ 
            fontSize: '24px', 
            fontFamily: 'Inter, sans-serif', 
            fontWeight: '900',
            textShadow: '0 0 15px rgba(255, 255, 255, 0.9), 0 0 25px rgba(255, 215, 0, 0.8)'
          }}
        >
          A
        </text>
        
        {/* Dynamic sparks and embers - more dramatic */}
        <g className="animate-sparks-explosion">
          {/* Large sparks */}
          <circle cx="15" cy="12" r="2" fill="#FFD700" className="animate-spark-large-1">
            <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="cy" values="12;5;12" dur="1s" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="r" values="2;3;2" dur="1s" repeatCount="indefinite" begin="0s"/>
          </circle>
          
          <circle cx="45" cy="10" r="1.8" fill="#FFA500" className="animate-spark-large-2">
            <animate attributeName="opacity" values="0;1;0" dur="1.3s" repeatCount="indefinite" begin="0.2s"/>
            <animate attributeName="cy" values="10;3;10" dur="1.3s" repeatCount="indefinite" begin="0.2s"/>
            <animate attributeName="r" values="1.8;2.5;1.8" dur="1.3s" repeatCount="indefinite" begin="0.2s"/>
          </circle>
          
          <circle cx="22" cy="8" r="1.5" fill="#FF6B00" className="animate-spark-large-3">
            <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" begin="0.4s"/>
            <animate attributeName="cy" values="8;1;8" dur="1.8s" repeatCount="indefinite" begin="0.4s"/>
            <animate attributeName="r" values="1.5;2.2;1.5" dur="1.8s" repeatCount="indefinite" begin="0.4s"/>
          </circle>
          
          <circle cx="38" cy="11" r="1.3" fill="#FF4500" className="animate-spark-large-4">
            <animate attributeName="opacity" values="0;1;0" dur="2.2s" repeatCount="indefinite" begin="0.6s"/>
            <animate attributeName="cy" values="11;2;11" dur="2.2s" repeatCount="indefinite" begin="0.6s"/>
            <animate attributeName="r" values="1.3;2;1.3" dur="2.2s" repeatCount="indefinite" begin="0.6s"/>
          </circle>
          
          {/* Small embers */}
          <circle cx="12" cy="25" r="0.8" fill="#DC143C" className="animate-ember-dance-1">
            <animate attributeName="opacity" values="0.2;0.9;0.2" dur="4s" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="cx" values="12;18;12" dur="4s" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="cy" values="25;20;25" dur="4s" repeatCount="indefinite" begin="0s"/>
          </circle>
          
          <circle cx="48" cy="30" r="1" fill="#8B0000" className="animate-ember-dance-2">
            <animate attributeName="opacity" values="0.1;0.7;0.1" dur="5s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="cx" values="48;42;48" dur="5s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="cy" values="30;25;30" dur="5s" repeatCount="indefinite" begin="1s"/>
          </circle>
        </g>
        
        {/* Heat distortion effect */}
        <rect x="10" y="50" width="40" height="8" fill="url(#fireOuter)" opacity="0.4" className="animate-heat-intense" rx="4"/>
      </svg>
      
      {/* Theme-appropriate hover tooltip */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="text-xs text-blue-600 bg-white dark:text-orange-500 dark:bg-[#2E2E2E] px-3 py-1 rounded-full shadow-lg border border-blue-500/20 dark:border-orange-500/20 whitespace-nowrap">
          <span className="dark:hidden">Ocean Waves 🌊</span>
          <span className="hidden dark:inline">Always Burning 🔥</span>
        </span>
      </div>
    </div>
  );
};

export default AnimatedLogo;