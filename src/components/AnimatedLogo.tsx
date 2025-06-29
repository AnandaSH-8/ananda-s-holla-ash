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
          {/* Realistic Fire Gradients for Dark Mode */}
          <radialGradient id="realisticFireCore" cx="50%" cy="80%" r="30%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="15%" stopColor="#FFFF99" />
            <stop offset="35%" stopColor="#FFD700" />
            <stop offset="60%" stopColor="#FF6B00" />
            <stop offset="85%" stopColor="#FF4500" />
            <stop offset="100%" stopColor="#8B0000" />
          </radialGradient>
          
          <radialGradient id="realisticFireMid" cx="50%" cy="75%" r="40%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#FF6B00" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#FF4500" stopOpacity="0.6" />
            <stop offset="90%" stopColor="#DC143C" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8B0000" stopOpacity="0.2" />
          </radialGradient>

          <radialGradient id="realisticFireOuter" cx="50%" cy="70%" r="50%">
            <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.7" />
            <stop offset="40%" stopColor="#FF4500" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#DC143C" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8B0000" stopOpacity="0.1" />
          </radialGradient>

          {/* Realistic Ocean Wave Gradients for Light Mode */}
          <linearGradient id="oceanDeep" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#001f3f" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#0074D9" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#39CCCC" stopOpacity="0.7" />
            <stop offset="75%" stopColor="#7FDBFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B3E5FC" stopOpacity="0.6" />
          </linearGradient>
          
          <linearGradient id="oceanMid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0074D9" stopOpacity="0.6" />
            <stop offset="30%" stopColor="#39CCCC" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#7FDBFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#B3E5FC" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="oceanSurface" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E1F5FE" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#B3E5FC" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#81D4FA" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#4FC3F7" stopOpacity="0.3" />
          </linearGradient>

          {/* Enhanced glow effects */}
          <filter id="realisticGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="textGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Realistic flame distortion */}
          <filter id="flameDistortion">
            <feTurbulence baseFrequency="0.02 0.1" numOctaves="4" result="noise" seed="1"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/>
          </filter>

          {/* Ocean wave distortion */}
          <filter id="waveDistortion">
            <feTurbulence baseFrequency="0.01 0.05" numOctaves="3" result="noise" seed="2"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1"/>
          </filter>
        </defs>
        
        {/* Light Mode - Realistic Ocean Waves */}
        <g className="dark:hidden">
          {/* Deep ocean layer */}
          <path
            d="M0 35 
               Q10 25, 20 35 
               Q30 45, 40 35
               Q50 25, 60 35
               Q70 45, 80 35
               L80 55
               Q70 65, 60 55
               Q50 45, 40 55
               Q30 65, 20 55
               Q10 45, 0 55 Z"
            fill="url(#oceanDeep)"
            filter="url(#waveDistortion)"
            className="animate-wave-deep"
          />
          
          {/* Mid ocean layer */}
          <path
            d="M0 38 
               Q8 30, 16 38 
               Q24 46, 32 38
               Q40 30, 48 38
               Q56 46, 64 38
               Q72 30, 80 38
               L80 52
               Q72 58, 64 52
               Q56 46, 48 52
               Q40 58, 32 52
               Q24 46, 16 52
               Q8 58, 0 52 Z"
            fill="url(#oceanMid)"
            filter="url(#waveDistortion)"
            className="animate-wave-mid"
          />
          
          {/* Surface ocean layer */}
          <path
            d="M0 42 
               Q6 36, 12 42 
               Q18 48, 24 42
               Q30 36, 36 42
               Q42 48, 48 42
               Q54 36, 60 42
               Q66 48, 72 42
               Q78 36, 80 42
               L80 48
               Q74 52, 68 48
               Q62 44, 56 48
               Q50 52, 44 48
               Q38 44, 32 48
               Q26 52, 20 48
               Q14 44, 8 48
               Q2 52, 0 48 Z"
            fill="url(#oceanSurface)"
            filter="url(#realisticGlow)"
            className="animate-wave-surface"
          />

          {/* Ocean foam and bubbles */}
          <circle cx="15" cy="30" r="1.5" fill="#FFFFFF" opacity="0.7" className="animate-bubbles-float">
            <animate attributeName="cy" values="30;20;30" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="35" cy="28" r="1" fill="#FFFFFF" opacity="0.5" className="animate-bubbles-float">
            <animate attributeName="cy" values="28;18;28" dur="4s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="opacity" values="0.5;0.2;0.5" dur="4s" repeatCount="indefinite" begin="1s"/>
          </circle>
          <circle cx="55" cy="32" r="1.2" fill="#FFFFFF" opacity="0.6" className="animate-bubbles-float">
            <animate attributeName="cy" values="32;22;32" dur="3.5s" repeatCount="indefinite" begin="0.5s"/>
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3.5s" repeatCount="indefinite" begin="0.5s"/>
          </circle>
          <circle cx="65" cy="29" r="0.8" fill="#FFFFFF" opacity="0.4" className="animate-bubbles-float">
            <animate attributeName="cy" values="29;19;29" dur="2.8s" repeatCount="indefinite" begin="1.5s"/>
            <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2.8s" repeatCount="indefinite" begin="1.5s"/>
          </circle>
        </g>

        {/* Dark Mode - Realistic Fire Flames */}
        <g className="hidden dark:block">
          {/* Main flame body */}
          <path
            d="M40 15
               Q35 20, 30 30
               Q28 40, 32 50
               Q36 58, 40 60
               Q44 58, 48 50
               Q52 40, 50 30
               Q45 20, 40 15 Z"
            fill="url(#realisticFireOuter)"
            filter="url(#flameDistortion)"
            className="animate-flame-massive"
          />
          
          {/* Secondary flame tongues */}
          <path
            d="M25 25
               Q22 30, 24 40
               Q26 48, 30 52
               Q32 50, 30 45
               Q28 35, 25 25 Z"
            fill="url(#realisticFireMid)"
            filter="url(#flameDistortion)"
            className="animate-flame-intense"
          />
          
          <path
            d="M55 25
               Q58 30, 56 40
               Q54 48, 50 52
               Q48 50, 50 45
               Q52 35, 55 25 Z"
            fill="url(#realisticFireMid)"
            filter="url(#flameDistortion)"
            className="animate-flame-intense"
          />
          
          {/* Inner flame core */}
          <path
            d="M40 20
               Q37 25, 35 35
               Q34 42, 36 48
               Q38 52, 40 54
               Q42 52, 44 48
               Q46 42, 45 35
               Q43 25, 40 20 Z"
            fill="url(#realisticFireMid)"
            filter="url(#realisticGlow)"
            className="animate-flame-intense"
          />
          
          {/* Hottest core */}
          <path
            d="M40 25
               Q38 28, 37 35
               Q36 40, 38 45
               Q39 48, 40 50
               Q41 48, 42 45
               Q44 40, 43 35
               Q42 28, 40 25 Z"
            fill="url(#realisticFireCore)"
            filter="url(#realisticGlow)"
            className="animate-flame-core"
          />

          {/* Sparks and embers */}
          <circle cx="25" cy="18" r="1" fill="#FFD700" className="animate-sparks-explosion">
            <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="cy" values="18;12;18" dur="1.5s" repeatCount="indefinite" begin="0s"/>
          </circle>
          <circle cx="55" cy="20" r="0.8" fill="#FF6B00" className="animate-sparks-explosion">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s"/>
            <animate attributeName="cy" values="20;14;20" dur="2s" repeatCount="indefinite" begin="0.5s"/>
          </circle>
          <circle cx="35" cy="15" r="0.6" fill="#FF4500" className="animate-sparks-explosion">
            <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="cy" values="15;9;15" dur="1.8s" repeatCount="indefinite" begin="1s"/>
          </circle>
          <circle cx="45" cy="17" r="0.7" fill="#FFD700" className="animate-sparks-explosion">
            <animate attributeName="opacity" values="0;1;0" dur="1.3s" repeatCount="indefinite" begin="0.3s"/>
            <animate attributeName="cy" values="17;11;17" dur="1.3s" repeatCount="indefinite" begin="0.3s"/>
          </circle>
        </g>
        
        {/* Letter A - Orange for Light Mode */}
        <text
          x="40"
          y="44"
          textAnchor="middle"
          dominantBaseline="middle"
          filter="url(#textGlow)"
          style={{ 
            fontSize: '36px',
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: '900',
            fill: '#FF6B00',
            stroke: '#FFFFFF',
            strokeWidth: '2px',
            paintOrder: 'stroke fill',
            letterSpacing: '1px'
          }}
          className="dark:hidden animate-letter-water-glow"
        >
          A
        </text>

        {/* Letter A - Blue for Dark Mode */}
        <text
          x="40"
          y="44"
          textAnchor="middle"
          dominantBaseline="middle"
          filter="url(#textGlow)"
          style={{ 
            fontSize: '36px',
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontWeight: '900',
            fill: '#3B82F6',
            stroke: '#FFFFFF',
            strokeWidth: '2px',
            paintOrder: 'stroke fill',
            letterSpacing: '1px'
          }}
          className="hidden dark:block animate-letter-fire-burn"
        >
          A
        </text>
      </svg>
    </div>
  );
};

export default AnimatedLogo;