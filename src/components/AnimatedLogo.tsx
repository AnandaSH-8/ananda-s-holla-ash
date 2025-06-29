const AnimatedLogo = () => {
  return (
    <div className="relative inline-block cursor-pointer group">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="hover:scale-110 transition-transform duration-300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Lotus-inspired fire gradients for dark mode */}
          <radialGradient id="lotusFireCore" cx="50%" cy="70%" r="35%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="20%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FF6B00" />
            <stop offset="80%" stopColor="#FF4500" />
            <stop offset="100%" stopColor="#DC143C" />
          </radialGradient>
          
          <radialGradient id="lotusFirePetal" cx="50%" cy="60%" r="45%">
            <stop offset="0%" stopColor="#FFA500" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#FF6B00" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#FF4500" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8B0000" stopOpacity="0.3" />
          </radialGradient>

          <radialGradient id="lotusFireOuter" cx="50%" cy="65%" r="55%">
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
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="strongTextGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Import Thai-style fonts */}
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700;800&family=Prompt:wght@400;500;600;700;800;900&family=Kanit:wght@400;500;600;700;800;900&display=swap');
            `}
          </style>
        </defs>
        
        {/* Light mode - Larger light wave structures covering full width */}
        <g className="dark:hidden">
          {/* Wave 1 - Outermost gentle wave spanning full width */}
          <path
            d="M0 40 
               Q10 25, 20 40 
               T40 40 
               Q50 25, 60 40 
               T80 40
               Q90 25, 100 40
               L100 65
               Q90 75, 80 65
               T60 65
               Q50 75, 40 65
               T20 65
               Q10 75, 0 65 Z"
            fill="url(#waveLight1)"
            filter="url(#softGlow)"
            className="animate-wave-deep"
          />
          
          {/* Wave 2 - Middle flowing wave */}
          <path
            d="M5 43 
               Q15 32, 25 43 
               T45 43 
               Q55 32, 65 43
               T85 43
               Q95 32, 100 43
               L100 62
               Q90 70, 80 62
               T60 62
               Q50 70, 40 62
               T20 62
               Q10 70, 5 62 Z"
            fill="url(#waveLight2)"
            filter="url(#softGlow)"
            className="animate-wave-mid"
          />
          
          {/* Wave 3 - Inner surface wave */}
          <path
            d="M12 45 
               Q22 38, 32 45 
               T52 45
               Q62 38, 72 45
               T88 45
               Q92 47, 92 52
               Q82 60, 72 55
               T52 55
               Q42 60, 32 55
               T12 55
               Q8 52, 12 50 Z"
            fill="url(#waveLight3)"
            filter="url(#softGlow)"
            className="animate-wave-surface"
          />
        </g>

        {/* Dark mode - Larger lotus fire structure covering full width */}
        <g className="hidden dark:block">
          {/* Lotus petal 1 - Far Left */}
          <ellipse
            cx="20" cy="50" rx="15" ry="25"
            fill="url(#lotusFireOuter)"
            filter="url(#softGlow)"
            className="animate-flame-massive"
            transform="rotate(-35 20 50)"
          />
          
          {/* Lotus petal 2 - Far Right */}
          <ellipse
            cx="80" cy="50" rx="15" ry="25"
            fill="url(#lotusFireOuter)"
            filter="url(#softGlow)"
            className="animate-flame-massive"
            transform="rotate(35 80 50)"
          />
          
          {/* Lotus petal 3 - Left */}
          <ellipse
            cx="35" cy="45" rx="12" ry="22"
            fill="url(#lotusFirePetal)"
            filter="url(#softGlow)"
            className="animate-flame-intense"
            transform="rotate(-20 35 45)"
          />
          
          {/* Lotus petal 4 - Right */}
          <ellipse
            cx="65" cy="45" rx="12" ry="22"
            fill="url(#lotusFirePetal)"
            filter="url(#softGlow)"
            className="animate-flame-intense"
            transform="rotate(20 65 45)"
          />
          
          {/* Lotus petal 5 - Center back */}
          <ellipse
            cx="50" cy="40" rx="10" ry="25"
            fill="url(#lotusFirePetal)"
            filter="url(#softGlow)"
            className="animate-flame-intense"
          />
          
          {/* Lotus petal 6 - Left front */}
          <ellipse
            cx="40" cy="55" rx="8" ry="18"
            fill="url(#lotusFireCore)"
            filter="url(#softGlow)"
            className="animate-flame-core"
            transform="rotate(-15 40 55)"
          />
          
          {/* Lotus petal 7 - Right front */}
          <ellipse
            cx="60" cy="55" rx="8" ry="18"
            fill="url(#lotusFireCore)"
            filter="url(#softGlow)"
            className="animate-flame-core"
            transform="rotate(15 60 55)"
          />
          
          {/* Lotus center - Core flame */}
          <ellipse
            cx="50" cy="50" rx="6" ry="15"
            fill="url(#lotusFireCore)"
            filter="url(#softGlow)"
            className="animate-flame-core"
          />
        </g>
        
        {/* Thai-style Letter A for Light Mode - High Contrast */}
        <text
          x="50"
          y="55"
          textAnchor="middle"
          dominantBaseline="middle"
          filter="url(#strongTextGlow)"
          style={{ 
            fontSize: '48px',
            fontFamily: 'Kanit, Prompt, Sarabun, sans-serif',
            fontWeight: '900',
            fill: '#1a365d',
            stroke: '#ffffff',
            strokeWidth: '3px',
            textShadow: '0 0 20px rgba(26, 54, 93, 0.8)',
            letterSpacing: '2px'
          }}
          className="dark:hidden animate-letter-water-glow"
        >
          ค
        </text>

        {/* Thai-style Letter A for Dark Mode - High Contrast */}
        <text
          x="50"
          y="55"
          textAnchor="middle"
          dominantBaseline="middle"
          filter="url(#strongTextGlow)"
          style={{ 
            fontSize: '48px',
            fontFamily: 'Kanit, Prompt, Sarabun, sans-serif',
            fontWeight: '900',
            fill: '#ffffff',
            stroke: '#1a1a1a',
            strokeWidth: '3px',
            textShadow: '0 0 20px rgba(255, 255, 255, 0.9)',
            letterSpacing: '2px'
          }}
          className="hidden dark:block animate-letter-fire-burn"
        >
          ค
        </text>
        
        {/* Light mode - Floating water droplets spread across width */}
        <g className="dark:hidden">
          <circle cx="15" cy="25" r="2" fill="#4682B4" opacity="0.7" className="animate-water-bubble-1">
            <animate attributeName="cy" values="25;15;25" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="r" values="2;3;2" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="85" cy="28" r="1.8" fill="#1E90FF" opacity="0.6" className="animate-water-bubble-2">
            <animate attributeName="cy" values="28;18;28" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
            <animate attributeName="r" values="1.8;2.5;1.8" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
          </circle>
          
          <circle cx="30" cy="20" r="1.5" fill="#00BFFF" opacity="0.8" className="animate-water-bubble-3">
            <animate attributeName="cy" values="20;12;20" dur="2.8s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2.8s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="r" values="1.5;2.2;1.5" dur="2.8s" repeatCount="indefinite" begin="1s"/>
          </circle>
          
          <circle cx="70" cy="22" r="1.3" fill="#87CEEB" opacity="0.5" className="animate-water-bubble-4">
            <animate attributeName="cy" values="22;14;22" dur="3.2s" repeatCount="indefinite" begin="1.5s"/>
            <animate attributeName="opacity" values="0.5;1;0.5" dur="3.2s" repeatCount="indefinite" begin="1.5s"/>
            <animate attributeName="r" values="1.3;2;1.3" dur="3.2s" repeatCount="indefinite" begin="1.5s"/>
          </circle>

          <circle cx="50" cy="18" r="1.2" fill="#B0E0E6" opacity="0.6" className="animate-water-bubble-1">
            <animate attributeName="cy" values="18;10;18" dur="3.5s" repeatCount="indefinite" begin="2s"/>
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite" begin="2s"/>
            <animate attributeName="r" values="1.2;1.8;1.2" dur="3.5s" repeatCount="indefinite" begin="2s"/>
          </circle>
        </g>

        {/* Dark mode - Fire sparks around lotus spread across width */}
        <g className="hidden dark:block">
          <circle cx="15" cy="25" r="2" fill="#FFD700" className="animate-sparks-explosion">
            <animate attributeName="cy" values="25;15;25" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="r" values="2;3.5;2" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="85" cy="28" r="1.8" fill="#FFA500" className="animate-sparks-explosion">
            <animate attributeName="cy" values="28;18;28" dur="1.8s" repeatCount="indefinite" begin="0.3s"/>
            <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" begin="0.3s"/>
            <animate attributeName="r" values="1.8;3;1.8" dur="1.8s" repeatCount="indefinite" begin="0.3s"/>
          </circle>
          
          <circle cx="25" cy="20" r="1.5" fill="#FF6B00" className="animate-sparks-explosion">
            <animate attributeName="cy" values="20;12;20" dur="2.2s" repeatCount="indefinite" begin="0.6s"/>
            <animate attributeName="opacity" values="0;1;0" dur="2.2s" repeatCount="indefinite" begin="0.6s"/>
            <animate attributeName="r" values="1.5;2.8;1.5" dur="2.2s" repeatCount="indefinite" begin="0.6s"/>
          </circle>
          
          <circle cx="75" cy="22" r="1.3" fill="#FF4500" className="animate-sparks-explosion">
            <animate attributeName="cy" values="22;14;22" dur="1.9s" repeatCount="indefinite" begin="0.9s"/>
            <animate attributeName="opacity" values="0;1;0" dur="1.9s" repeatCount="indefinite" begin="0.9s"/>
            <animate attributeName="r" values="1.3;2.5;1.3" dur="1.9s" repeatCount="indefinite" begin="0.9s"/>
          </circle>

          <circle cx="50" cy="18" r="1.2" fill="#DC143C" className="animate-sparks-explosion">
            <animate attributeName="cy" values="18;10;18" dur="2.1s" repeatCount="indefinite" begin="1.2s"/>
            <animate attributeName="opacity" values="0;1;0" dur="2.1s" repeatCount="indefinite" begin="1.2s"/>
            <animate attributeName="r" values="1.2;2.3;1.2" dur="2.1s" repeatCount="indefinite" begin="1.2s"/>
          </circle>

          <circle cx="35" cy="75" r="1" fill="#FF8C00" className="animate-sparks-explosion">
            <animate attributeName="cy" values="75;85;75" dur="2.3s" repeatCount="indefinite" begin="1.5s"/>
            <animate attributeName="opacity" values="0;1;0" dur="2.3s" repeatCount="indefinite" begin="1.5s"/>
            <animate attributeName="r" values="1;2;1" dur="2.3s" repeatCount="indefinite" begin="1.5s"/>
          </circle>

          <circle cx="65" cy="75" r="1" fill="#FF6347" className="animate-sparks-explosion">
            <animate attributeName="cy" values="75;85;75" dur="2.4s" repeatCount="indefinite" begin="1.8s"/>
            <animate attributeName="opacity" values="0;1;0" dur="2.4s" repeatCount="indefinite" begin="1.8s"/>
            <animate attributeName="r" values="1;2;1" dur="2.4s" repeatCount="indefinite" begin="1.8s"/>
          </circle>
        </g>
      </svg>
      
      {/* Enhanced hover tooltip */}
      <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
        <span className="text-xs text-blue-600 dark:text-orange-500 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-xl border border-blue-200 dark:border-orange-200 whitespace-nowrap font-medium">
          <span className="dark:hidden">Flowing Elegance 🌊</span>
          <span className="hidden dark:inline">Lotus Flame 🪷🔥</span>
        </span>
      </div>
    </div>
  );
};

export default AnimatedLogo;