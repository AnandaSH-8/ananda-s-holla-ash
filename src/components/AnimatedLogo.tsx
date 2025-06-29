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
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="strongTextGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Light mode - Light wave structures covering full width */}
        <g className="dark:hidden">
          {/* Wave 1 - Outermost gentle wave */}
          <path
            d="M0 32 
               Q8 20, 16 32 
               T32 32 
               Q40 20, 48 32 
               T64 32
               Q72 20, 80 32
               L80 52
               Q72 60, 64 52
               T48 52
               Q40 60, 32 52
               T16 52
               Q8 60, 0 52 Z"
            fill="url(#waveLight1)"
            filter="url(#softGlow)"
            className="animate-wave-deep"
          />
          
          {/* Wave 2 - Middle flowing wave */}
          <path
            d="M4 34 
               Q12 26, 20 34 
               T36 34 
               Q44 26, 52 34
               T68 34
               Q76 26, 80 34
               L80 50
               Q72 56, 64 50
               T48 50
               Q40 56, 32 50
               T16 50
               Q8 56, 4 50 Z"
            fill="url(#waveLight2)"
            filter="url(#softGlow)"
            className="animate-wave-mid"
          />
          
          {/* Wave 3 - Inner surface wave */}
          <path
            d="M10 36 
               Q18 30, 26 36 
               T42 36
               Q50 30, 58 36
               T70 36
               Q74 38, 74 42
               Q66 48, 58 44
               T42 44
               Q34 48, 26 44
               T10 44
               Q6 42, 10 40 Z"
            fill="url(#waveLight3)"
            filter="url(#softGlow)"
            className="animate-wave-surface"
          />
        </g>

        {/* Dark mode - Lotus fire structure covering full width */}
        <g className="hidden dark:block">
          {/* Lotus petal 1 - Far Left */}
          <ellipse
            cx="16" cy="40" rx="12" ry="20"
            fill="url(#lotusFireOuter)"
            filter="url(#softGlow)"
            className="animate-flame-massive"
            transform="rotate(-35 16 40)"
          />
          
          {/* Lotus petal 2 - Far Right */}
          <ellipse
            cx="64" cy="40" rx="12" ry="20"
            fill="url(#lotusFireOuter)"
            filter="url(#softGlow)"
            className="animate-flame-massive"
            transform="rotate(35 64 40)"
          />
          
          {/* Lotus petal 3 - Left */}
          <ellipse
            cx="28" cy="36" rx="10" ry="18"
            fill="url(#lotusFirePetal)"
            filter="url(#softGlow)"
            className="animate-flame-intense"
            transform="rotate(-20 28 36)"
          />
          
          {/* Lotus petal 4 - Right */}
          <ellipse
            cx="52" cy="36" rx="10" ry="18"
            fill="url(#lotusFirePetal)"
            filter="url(#softGlow)"
            className="animate-flame-intense"
            transform="rotate(20 52 36)"
          />
          
          {/* Lotus petal 5 - Center back */}
          <ellipse
            cx="40" cy="32" rx="8" ry="20"
            fill="url(#lotusFirePetal)"
            filter="url(#softGlow)"
            className="animate-flame-intense"
          />
          
          {/* Lotus petal 6 - Left front */}
          <ellipse
            cx="32" cy="44" rx="6" ry="14"
            fill="url(#lotusFireCore)"
            filter="url(#softGlow)"
            className="animate-flame-core"
            transform="rotate(-15 32 44)"
          />
          
          {/* Lotus petal 7 - Right front */}
          <ellipse
            cx="48" cy="44" rx="6" ry="14"
            fill="url(#lotusFireCore)"
            filter="url(#softGlow)"
            className="animate-flame-core"
            transform="rotate(15 48 44)"
          />
          
          {/* Lotus center - Core flame */}
          <ellipse
            cx="40" cy="40" rx="5" ry="12"
            fill="url(#lotusFireCore)"
            filter="url(#softGlow)"
            className="animate-flame-core"
          />
        </g>
        
        {/* Letter A for Light Mode - Maximum Contrast */}
        <text
          x="40"
          y="44"
          textAnchor="middle"
          dominantBaseline="middle"
          filter="url(#strongTextGlow)"
          style={{ 
            fontSize: '32px',
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: '900',
            fill: '#000000',
            stroke: '#ffffff',
            strokeWidth: '2px',
            textShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
            letterSpacing: '1px'
          }}
          className="dark:hidden animate-letter-water-glow"
        >
          A
        </text>

        {/* Letter A for Dark Mode - High Contrast */}
        <text
          x="40"
          y="44"
          textAnchor="middle"
          dominantBaseline="middle"
          filter="url(#strongTextGlow)"
          style={{ 
            fontSize: '32px',
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: '900',
            fill: '#ffffff',
            stroke: '#333333',
            strokeWidth: '2px',
            textShadow: '0 0 15px rgba(255, 255, 255, 0.9)',
            letterSpacing: '1px'
          }}
          className="hidden dark:block animate-letter-fire-burn"
        >
          A
        </text>
        
        {/* Light mode - Floating water droplets */}
        <g className="dark:hidden">
          <circle cx="12" cy="20" r="1.5" fill="#4682B4" opacity="0.7" className="animate-water-bubble-1">
            <animate attributeName="cy" values="20;12;20" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="68" cy="22" r="1.3" fill="#1E90FF" opacity="0.6" className="animate-water-bubble-2">
            <animate attributeName="cy" values="22;14;22" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
          </circle>
          
          <circle cx="24" cy="16" r="1.2" fill="#00BFFF" opacity="0.8" className="animate-water-bubble-3">
            <animate attributeName="cy" values="16;8;16" dur="2.8s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2.8s" repeatCount="indefinite" begin="1s"/>
          </circle>
          
          <circle cx="56" cy="18" r="1.1" fill="#87CEEB" opacity="0.5" className="animate-water-bubble-4">
            <animate attributeName="cy" values="18;10;18" dur="3.2s" repeatCount="indefinite" begin="1.5s"/>
            <animate attributeName="opacity" values="0.5;1;0.5" dur="3.2s" repeatCount="indefinite" begin="1.5s"/>
          </circle>
        </g>

        {/* Dark mode - Fire sparks around lotus */}
        <g className="hidden dark:block">
          <circle cx="12" cy="20" r="1.5" fill="#FFD700" className="animate-sparks-explosion">
            <animate attributeName="cy" values="20;12;20" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="68" cy="22" r="1.3" fill="#FFA500" className="animate-sparks-explosion">
            <animate attributeName="cy" values="22;14;22" dur="1.8s" repeatCount="indefinite" begin="0.3s"/>
            <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" begin="0.3s"/>
          </circle>
          
          <circle cx="20" cy="16" r="1.2" fill="#FF6B00" className="animate-sparks-explosion">
            <animate attributeName="cy" values="16;8;16" dur="2.2s" repeatCount="indefinite" begin="0.6s"/>
            <animate attributeName="opacity" values="0;1;0" dur="2.2s" repeatCount="indefinite" begin="0.6s"/>
          </circle>
          
          <circle cx="60" cy="18" r="1.1" fill="#FF4500" className="animate-sparks-explosion">
            <animate attributeName="cy" values="18;10;18" dur="1.9s" repeatCount="indefinite" begin="0.9s"/>
            <animate attributeName="opacity" values="0;1;0" dur="1.9s" repeatCount="indefinite" begin="0.9s"/>
          </circle>

          <circle cx="28" cy="60" r="0.8" fill="#FF8C00" className="animate-sparks-explosion">
            <animate attributeName="cy" values="60;68;60" dur="2.3s" repeatCount="indefinite" begin="1.2s"/>
            <animate attributeName="opacity" values="0;1;0" dur="2.3s" repeatCount="indefinite" begin="1.2s"/>
          </circle>

          <circle cx="52" cy="60" r="0.8" fill="#FF6347" className="animate-sparks-explosion">
            <animate attributeName="cy" values="60;68;60" dur="2.4s" repeatCount="indefinite" begin="1.5s"/>
            <animate attributeName="opacity" values="0;1;0" dur="2.4s" repeatCount="indefinite" begin="1.5s"/>
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedLogo;