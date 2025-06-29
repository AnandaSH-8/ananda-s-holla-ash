const AnimatedLogo = () => {
  return (
    <div className="relative inline-block cursor-pointer group">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        className="hover:scale-110 transition-transform duration-300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Lotus-inspired fire gradients for dark mode */}
          <radialGradient id="lotusFireCore" cx="50%" cy="70%" r="30%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="20%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FF6B00" />
            <stop offset="80%" stopColor="#FF4500" />
            <stop offset="100%" stopColor="#DC143C" />
          </radialGradient>
          
          <radialGradient id="lotusFirePetal" cx="50%" cy="60%" r="40%">
            <stop offset="0%" stopColor="#FFA500" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#FF6B00" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#FF4500" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8B0000" stopOpacity="0.3" />
          </radialGradient>

          <radialGradient id="lotusFireOuter" cx="50%" cy="65%" r="50%">
            <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#FF4500" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#DC143C" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8B0000" stopOpacity="0.2" />
          </radialGradient>

          {/* Light wave gradients for light mode */}
          <linearGradient id="waveLight1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E0F6FF" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#87CEEB" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#4682B4" stopOpacity="0.7" />
            <stop offset="75%" stopColor="#1E90FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00BFFF" stopOpacity="0.6" />
          </linearGradient>
          
          <linearGradient id="waveLight2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B0E0E6" stopOpacity="0.6" />
            <stop offset="30%" stopColor="#87CEEB" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#4682B4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1E90FF" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="waveLight3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F0F8FF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#E0F6FF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#B0E0E6" stopOpacity="0.5" />
          </linearGradient>

          {/* Enhanced glow effects */}
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="textGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Import fancy Google Font */}
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&family=Righteous&family=Fredoka+One:wght@400&display=swap');
            `}
          </style>
        </defs>
        
        {/* Light mode - Light wave structures */}
        <g className="dark:hidden">
          {/* Wave 1 - Outermost gentle wave */}
          <path
            d="M5 35 
               Q15 25, 25 35 
               T45 35 
               Q55 25, 65 35 
               T80 35
               L80 50
               Q70 60, 60 50
               T40 50
               Q30 60, 20 50
               T5 50 Z"
            fill="url(#waveLight1)"
            filter="url(#softGlow)"
            className="animate-wave-deep"
          />
          
          {/* Wave 2 - Middle flowing wave */}
          <path
            d="M10 38 
               Q20 30, 30 38 
               T50 38 
               Q60 30, 70 38
               L70 48
               Q60 55, 50 48
               T30 48
               Q20 55, 10 48 Z"
            fill="url(#waveLight2)"
            filter="url(#softGlow)"
            className="animate-wave-mid"
          />
          
          {/* Wave 3 - Inner surface wave */}
          <path
            d="M18 40 
               Q28 35, 38 40 
               T58 40
               Q62 42, 62 45
               Q58 50, 48 47
               T28 47
               Q18 50, 18 45 Z"
            fill="url(#waveLight3)"
            filter="url(#softGlow)"
            className="animate-wave-surface"
          />
        </g>

        {/* Dark mode - Lotus fire structure */}
        <g className="hidden dark:block">
          {/* Lotus petal 1 - Left */}
          <ellipse
            cx="25" cy="40" rx="12" ry="18"
            fill="url(#lotusFireOuter)"
            filter="url(#softGlow)"
            className="animate-flame-massive"
            transform="rotate(-30 25 40)"
          />
          
          {/* Lotus petal 2 - Right */}
          <ellipse
            cx="55" cy="40" rx="12" ry="18"
            fill="url(#lotusFireOuter)"
            filter="url(#softGlow)"
            className="animate-flame-massive"
            transform="rotate(30 55 40)"
          />
          
          {/* Lotus petal 3 - Center back */}
          <ellipse
            cx="40" cy="35" rx="10" ry="20"
            fill="url(#lotusFirePetal)"
            filter="url(#softGlow)"
            className="animate-flame-intense"
          />
          
          {/* Lotus petal 4 - Left front */}
          <ellipse
            cx="30" cy="45" rx="8" ry="15"
            fill="url(#lotusFirePetal)"
            filter="url(#softGlow)"
            className="animate-flame-intense"
            transform="rotate(-15 30 45)"
          />
          
          {/* Lotus petal 5 - Right front */}
          <ellipse
            cx="50" cy="45" rx="8" ry="15"
            fill="url(#lotusFirePetal)"
            filter="url(#softGlow)"
            className="animate-flame-intense"
            transform="rotate(15 50 45)"
          />
          
          {/* Lotus center - Core flame */}
          <ellipse
            cx="40" cy="42" rx="6" ry="12"
            fill="url(#lotusFireCore)"
            filter="url(#softGlow)"
            className="animate-flame-core"
          />
        </g>
        
        {/* Letter A with fancy font - HIGH CONTRAST and VISIBILITY */}
        <text
          x="40"
          y="45"
          textAnchor="middle"
          dominantBaseline="middle"
          filter="url(#textGlow)"
          style={{ 
            fontSize: '28px',
            fontFamily: 'Righteous, cursive',
            fontWeight: '400',
            fill: '#1a1a1a',
            stroke: '#ffffff',
            strokeWidth: '1px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}
          className="dark:hidden"
        >
          A
        </text>

        {/* Letter A for dark mode - HIGH CONTRAST */}
        <text
          x="40"
          y="45"
          textAnchor="middle"
          dominantBaseline="middle"
          filter="url(#textGlow)"
          style={{ 
            fontSize: '28px',
            fontFamily: 'Righteous, cursive',
            fontWeight: '400',
            fill: '#ffffff',
            stroke: '#000000',
            strokeWidth: '1px',
            textShadow: '2px 2px 4px rgba(255,255,255,0.8)'
          }}
          className="hidden dark:block animate-letter-fire-burn"
        >
          A
        </text>
        
        {/* Light mode - Floating water droplets */}
        <g className="dark:hidden">
          <circle cx="15" cy="25" r="1.5" fill="#4682B4" opacity="0.7" className="animate-water-bubble-1">
            <animate attributeName="cy" values="25;15;25" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="65" cy="28" r="1.2" fill="#1E90FF" opacity="0.6" className="animate-water-bubble-2">
            <animate attributeName="cy" values="28;18;28" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
          </circle>
          
          <circle cx="25" cy="20" r="1" fill="#00BFFF" opacity="0.8" className="animate-water-bubble-3">
            <animate attributeName="cy" values="20;12;20" dur="2.8s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2.8s" repeatCount="indefinite" begin="1s"/>
          </circle>
          
          <circle cx="55" cy="22" r="0.8" fill="#87CEEB" opacity="0.5" className="animate-water-bubble-4">
            <animate attributeName="cy" values="22;14;22" dur="3.2s" repeatCount="indefinite" begin="1.5s"/>
            <animate attributeName="opacity" values="0.5;1;0.5" dur="3.2s" repeatCount="indefinite" begin="1.5s"/>
          </circle>
        </g>

        {/* Dark mode - Fire sparks around lotus */}
        <g className="hidden dark:block">
          <circle cx="20" cy="25" r="1.5" fill="#FFD700" className="animate-sparks-explosion">
            <animate attributeName="cy" values="25;15;25" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="r" values="1.5;2.5;1.5" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="60" cy="28" r="1.2" fill="#FFA500" className="animate-sparks-explosion">
            <animate attributeName="cy" values="28;18;28" dur="1.8s" repeatCount="indefinite" begin="0.3s"/>
            <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" begin="0.3s"/>
            <animate attributeName="r" values="1.2;2;1.2" dur="1.8s" repeatCount="indefinite" begin="0.3s"/>
          </circle>
          
          <circle cx="25" cy="20" r="1" fill="#FF6B00" className="animate-sparks-explosion">
            <animate attributeName="cy" values="20;12;20" dur="2.2s" repeatCount="indefinite" begin="0.6s"/>
            <animate attributeName="opacity" values="0;1;0" dur="2.2s" repeatCount="indefinite" begin="0.6s"/>
            <animate attributeName="r" values="1;1.8;1" dur="2.2s" repeatCount="indefinite" begin="0.6s"/>
          </circle>
          
          <circle cx="55" cy="22" r="0.8" fill="#FF4500" className="animate-sparks-explosion">
            <animate attributeName="cy" values="22;14;22" dur="1.9s" repeatCount="indefinite" begin="0.9s"/>
            <animate attributeName="opacity" values="0;1;0" dur="1.9s" repeatCount="indefinite" begin="0.9s"/>
            <animate attributeName="r" values="0.8;1.5;0.8" dur="1.9s" repeatCount="indefinite" begin="0.9s"/>
          </circle>
        </g>
      </svg>
      
      {/* Enhanced hover tooltip */}
      <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
        <span className="text-xs text-blue-600 dark:text-orange-500 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-xl border border-blue-200 dark:border-orange-200 whitespace-nowrap font-medium">
          <span className="dark:hidden">Flowing Waves 🌊</span>
          <span className="hidden dark:inline">Lotus Fire 🪷🔥</span>
        </span>
      </div>
    </div>
  );
};

export default AnimatedLogo;