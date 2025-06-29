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
          <linearGradient id="oceanFlow1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E0F6FF" />
            <stop offset="30%" stopColor="#87CEEB" />
            <stop offset="70%" stopColor="#4FC3F7" />
            <stop offset="100%" stopColor="#29B6F6" />
          </linearGradient>
          
          <linearGradient id="oceanFlow2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B3E5FC" />
            <stop offset="50%" stopColor="#4FC3F7" />
            <stop offset="100%" stopColor="#0288D1" />
          </linearGradient>

          <linearGradient id="oceanFlow3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#F0F8FF" />
            <stop offset="50%" stopColor="#87CEEB" />
            <stop offset="100%" stopColor="#4FC3F7" />
          </linearGradient>

          <linearGradient id="textGradientWater" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0D47A1" />
            <stop offset="50%" stopColor="#1565C0" />
            <stop offset="100%" stopColor="#1976D2" />
          </linearGradient>

          <filter id="waterGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="textGlowWater" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feFlood floodColor="#1565C0" floodOpacity="0.6"/>
            <feComposite in2="coloredBlur" operator="in"/>
            <feMerge> 
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Flowing water waves */}
        <path
          d="M30 8 
             C38 15, 45 25, 43 38 
             C41 48, 35 52, 30 54 
             C25 52, 19 48, 17 38 
             C15 25, 22 15, 30 8 Z"
          fill="url(#oceanFlow1)"
          filter="url(#waterGlow)"
          className="animate-wave-deep"
        />
        
        <path
          d="M30 12 
             C36 18, 40 26, 38.5 36 
             C37 44, 33 47, 30 48.5 
             C27 47, 23 44, 21.5 36 
             C20 26, 24 18, 30 12 Z"
          fill="url(#oceanFlow2)"
          filter="url(#waterGlow)"
          className="animate-wave-mid"
        />
        
        <path
          d="M30 16 
             C34 20, 36 26, 35 32 
             C34 37, 32 39, 30 40 
             C28 39, 26 37, 25 32 
             C24 26, 26 20, 30 16 Z"
          fill="url(#oceanFlow3)"
          filter="url(#waterGlow)"
          className="animate-wave-surface"
        />
        
        {/* Letter A */}
        <text
          x="30"
          y="35"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="url(#textGradientWater)"
          filter="url(#textGlowWater)"
          className="animate-letter-water-glow"
          style={{ 
            fontSize: '24px', 
            fontFamily: 'Inter, sans-serif', 
            fontWeight: '900',
            textShadow: '0 0 10px rgba(21, 101, 192, 0.5)'
          }}
        >
          A
        </text>
        
        {/* Water bubbles */}
        <g className="animate-bubbles-float">
          <circle cx="20" cy="15" r="1.5" fill="#B3E5FC" className="animate-water-bubble-1">
            <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="cy" values="15;10;15" dur="3s" repeatCount="indefinite" begin="0s"/>
          </circle>
          
          <circle cx="40" cy="12" r="1.2" fill="#4FC3F7" className="animate-water-bubble-2">
            <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="cy" values="12;7;12" dur="4s" repeatCount="indefinite" begin="1s"/>
          </circle>
        </g>
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
        </defs>
        
        {/* Multiple flame layers */}
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
        
        {/* Letter A */}
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
        
        {/* Dynamic sparks */}
        <g className="animate-sparks-dance">
          <circle cx="20" cy="15" r="1.5" fill="#FFD700" className="animate-spark-1">
            <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="cy" values="15;10;15" dur="0.8s" repeatCount="indefinite" begin="0s"/>
          </circle>
          
          <circle cx="40" cy="12" r="1.2" fill="#FFA500" className="animate-spark-2">
            <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite" begin="0.3s"/>
            <animate attributeName="cy" values="12;7;12" dur="1.2s" repeatCount="indefinite" begin="0.3s"/>
          </circle>
        </g>
      </svg>
      
      {/* Hover tooltip */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="text-xs text-blue-600 dark:text-orange-500 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-lg border border-blue-200 dark:border-orange-200 whitespace-nowrap">
          Always Burning 🔥
        </span>
      </div>
    </div>
  );
};

export default AnimatedLogo;