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
        </defs>
        
        {/* Multiple wave layers - more rectangular/flowing shapes */}
        
        {/* Deep ocean wave - flowing horizontal shape */}
        <path
          d="M8 25 
             Q15 15, 25 20 
             Q35 25, 45 18 
             Q52 22, 52 35 
             Q45 45, 35 40 
             Q25 35, 15 42 
             Q8 38, 8 25 Z"
          fill="url(#oceanDeep)"
          filter="url(#waterGlow)"
          className="animate-wave-deep"
        />
        
        {/* Mid ocean wave - curved flowing shape */}
        <path
          d="M12 28 
             Q18 20, 28 24 
             Q38 28, 48 22 
             Q48 32, 42 38 
             Q32 34, 22 38 
             Q12 34, 12 28 Z"
          fill="url(#oceanMid)"
          filter="url(#waterGlow)"
          className="animate-wave-mid"
        />
        
        {/* Surface wave - top flowing layer */}
        <path
          d="M16 30 
             Q22 24, 30 28 
             Q38 32, 44 26 
             Q44 34, 38 36 
             Q30 32, 22 36 
             Q16 34, 16 30 Z"
          fill="url(#oceanSurface)"
          filter="url(#waterGlow)"
          className="animate-wave-surface"
        />
        
        {/* Letter A - highly visible with strong contrast */}
        <text
          x="30"
          y="35"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-black drop-shadow-lg"
          filter="url(#letterWaterGlow)"
          style={{ 
            fontSize: '28px', 
            fontFamily: 'Inter, sans-serif', 
            fontWeight: '900',
            fill: '#FFFFFF',
            stroke: '#003366',
            strokeWidth: '1px',
            textShadow: '2px 2px 4px rgba(0, 51, 102, 0.8)'
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
          {/* Enhanced fire gradients */}
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
        </defs>
        
        {/* Multiple flame layers - jagged, irregular fire shapes */}
        
        {/* Outermost flame - tall jagged shape */}
        <path
          d="M30 8 
             L35 12 Q40 8, 45 15 
             L48 20 Q52 18, 50 28 
             Q48 35, 45 40 
             L42 45 Q38 50, 35 48 
             Q32 52, 30 50 
             Q28 52, 25 48 
             Q22 50, 18 45 
             L15 40 Q12 35, 10 28 
             Q8 18, 12 20 
             L15 15 Q20 8, 25 12 
             L30 8 Z"
          fill="url(#fireOuter)"
          filter="url(#fireGlow)"
          className="animate-flame-massive"
        />
        
        {/* Middle flame layer - intense jagged shape */}
        <path
          d="M30 12 
             L33 16 Q36 14, 38 20 
             Q40 25, 38 32 
             L36 38 Q34 42, 32 40 
             Q30 44, 30 42 
             Q30 44, 28 40 
             Q26 42, 24 38 
             L22 32 Q20 25, 22 20 
             Q24 14, 27 16 
             L30 12 Z"
          fill="url(#fireCore)"
          filter="url(#fireGlow)"
          className="animate-flame-intense"
        />
        
        {/* Inner flame - white hot core */}
        <path
          d="M30 16 
             L32 20 Q34 18, 35 24 
             Q36 28, 34 32 
             Q32 36, 30 34 
             Q28 36, 26 32 
             Q24 28, 25 24 
             Q26 18, 28 20 
             L30 16 Z"
          fill="url(#fireInner)"
          filter="url(#fireGlow)"
          className="animate-flame-core"
        />
        
        {/* Letter A - highly visible with strong contrast */}
        <text
          x="30"
          y="35"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-black drop-shadow-lg"
          filter="url(#letterFireGlow)"
          style={{ 
            fontSize: '28px', 
            fontFamily: 'Inter, sans-serif', 
            fontWeight: '900',
            fill: '#FFFFFF',
            stroke: '#8B0000',
            strokeWidth: '1px',
            textShadow: '2px 2px 4px rgba(139, 0, 0, 0.8)'
          }}
        >
          A
        </text>
        
        {/* Dynamic sparks and embers */}
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
    </div>
  );
};

export default AnimatedLogo;