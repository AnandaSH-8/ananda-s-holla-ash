const AnimatedLogo = () => {
  return (
    <div className="relative inline-block cursor-pointer group">
      {/* Tooltip - Dark mode: fire theme */}
      <div className="hidden dark:block absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 whitespace-nowrap">
        <div className="px-3 py-1.5 rounded-md bg-gradient-to-r from-orange-600 to-red-600 text-white text-xs font-semibold shadow-lg shadow-orange-500/50">
          🔥 Always Burning
        </div>
      </div>
      {/* Tooltip - Light mode: water theme */}
      <div className="dark:hidden absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 whitespace-nowrap">
        <div className="px-3 py-1.5 rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs font-semibold shadow-lg shadow-blue-400/50">
          🌊 Always Flowing
        </div>
      </div>
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        className="hover:scale-110 transition-transform duration-300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* ENHANCED REALISTIC FIRE GRADIENTS for Dark Mode */}
          <radialGradient id="ultraFireCore" cx="50%" cy="85%" r="25%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="10%" stopColor="#FFFACD" />
            <stop offset="25%" stopColor="#FFD700" />
            <stop offset="45%" stopColor="#FFA500" />
            <stop offset="70%" stopColor="#FF6B00" />
            <stop offset="90%" stopColor="#FF4500" />
            <stop offset="100%" stopColor="#DC143C" />
          </radialGradient>
          
          <radialGradient id="ultraFireMid" cx="50%" cy="80%" r="35%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.95" />
            <stop offset="20%" stopColor="#FFA500" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#FF6B00" stopOpacity="0.8" />
            <stop offset="65%" stopColor="#FF4500" stopOpacity="0.7" />
            <stop offset="85%" stopColor="#DC143C" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8B0000" stopOpacity="0.3" />
          </radialGradient>

          <radialGradient id="ultraFireOuter" cx="50%" cy="75%" r="45%">
            <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#FF4500" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#DC143C" stopOpacity="0.4" />
            <stop offset="85%" stopColor="#8B0000" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#4B0000" stopOpacity="0.1" />
          </radialGradient>

          <radialGradient id="ultraFireBase" cx="50%" cy="70%" r="55%">
            <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#FF4500" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#DC143C" stopOpacity="0.2" />
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
          <filter id="ultraGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="textGlow" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Enhanced flame distortion */}
          <filter id="ultraFlameDistortion">
            <feTurbulence baseFrequency="0.03 0.15" numOctaves="5" result="noise" seed="1"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3"/>
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
            filter="url(#ultraGlow)"
            className="animate-wave-surface"
          />

          {/* Ocean foam and bubbles */}
          <circle cx="15" cy="30" r="1.5" fill="#FFFFFF" opacity="0.7" className="animate-water-bubble-1" />
          <circle cx="35" cy="28" r="1" fill="#FFFFFF" opacity="0.5" className="animate-water-bubble-2" />
          <circle cx="55" cy="32" r="1.2" fill="#FFFFFF" opacity="0.6" className="animate-water-bubble-3" />
          <circle cx="65" cy="29" r="0.8" fill="#FFFFFF" opacity="0.4" className="animate-water-bubble-4" />
        </g>

        {/* Dark Mode - ULTRA REALISTIC Fire Flames */}
        <g className="hidden dark:block">
          {/* Base flame foundation */}
          <path
            d="M40 12
               Q32 18, 25 32
               Q20 45, 25 58
               Q30 65, 40 68
               Q50 65, 55 58
               Q60 45, 55 32
               Q48 18, 40 12 Z"
            fill="url(#ultraFireBase)"
            filter="url(#ultraFlameDistortion)"
            className="animate-flame-massive"
          />
          
          {/* Main flame body - larger and more realistic */}
          <path
            d="M40 15
               Q34 22, 28 35
               Q25 48, 30 58
               Q35 63, 40 65
               Q45 63, 50 58
               Q55 48, 52 35
               Q46 22, 40 15 Z"
            fill="url(#ultraFireOuter)"
            filter="url(#ultraFlameDistortion)"
            className="animate-flame-massive"
          />
          
          {/* Left flame tongue - more pronounced */}
          <path
            d="M22 28
               Q18 35, 20 45
               Q22 52, 28 58
               Q32 60, 35 58
               Q33 50, 30 42
               Q28 35, 22 28 Z"
            fill="url(#ultraFireMid)"
            filter="url(#ultraFlameDistortion)"
            className="animate-flame-intense"
          />
          
          {/* Right flame tongue - more pronounced */}
          <path
            d="M58 28
               Q62 35, 60 45
               Q58 52, 52 58
               Q48 60, 45 58
               Q47 50, 50 42
               Q52 35, 58 28 Z"
            fill="url(#ultraFireMid)"
            filter="url(#ultraFlameDistortion)"
            className="animate-flame-intense"
          />
          
          {/* Secondary inner flame */}
          <path
            d="M40 20
               Q36 26, 32 38
               Q30 48, 34 56
               Q37 60, 40 62
               Q43 60, 46 56
               Q50 48, 48 38
               Q44 26, 40 20 Z"
            fill="url(#ultraFireMid)"
            filter="url(#ultraGlow)"
            className="animate-flame-intense"
          />
          
          {/* Hottest core - white-hot center */}
          <path
            d="M40 25
               Q37 30, 35 40
               Q34 47, 36 52
               Q38 55, 40 57
               Q42 55, 44 52
               Q46 47, 45 40
               Q43 30, 40 25 Z"
            fill="url(#ultraFireCore)"
            filter="url(#ultraGlow)"
            className="animate-flame-core"
          />

          {/* Enhanced sparks and embers */}
          <circle cx="20" cy="15" r="1.5" fill="#FFD700" className="animate-sparks-explosion">
            <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="cy" values="15;8;15" dur="1.2s" repeatCount="indefinite" begin="0s"/>
            <animate attributeName="r" values="1.5;2.5;1.5" dur="1.2s" repeatCount="indefinite" begin="0s"/>
          </circle>
          <circle cx="60" cy="18" r="1.2" fill="#FF6B00" className="animate-sparks-explosion">
            <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" begin="0.3s"/>
            <animate attributeName="cy" values="18;10;18" dur="1.8s" repeatCount="indefinite" begin="0.3s"/>
            <animate attributeName="r" values="1.2;2;1.2" dur="1.8s" repeatCount="indefinite" begin="0.3s"/>
          </circle>
          <circle cx="30" cy="12" r="1" fill="#FF4500" className="animate-sparks-explosion">
            <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0.6s"/>
            <animate attributeName="cy" values="12;5;12" dur="1.5s" repeatCount="indefinite" begin="0.6s"/>
            <animate attributeName="r" values="1;1.8;1" dur="1.5s" repeatCount="indefinite" begin="0.6s"/>
          </circle>
          <circle cx="50" cy="14" r="1.3" fill="#FFD700" className="animate-sparks-explosion">
            <animate attributeName="opacity" values="0;1;0" dur="1.1s" repeatCount="indefinite" begin="0.9s"/>
            <animate attributeName="cy" values="14;7;14" dur="1.1s" repeatCount="indefinite" begin="0.9s"/>
            <animate attributeName="r" values="1.3;2.2;1.3" dur="1.1s" repeatCount="indefinite" begin="0.9s"/>
          </circle>
          <circle cx="35" cy="10" r="0.8" fill="#FFFFFF" className="animate-sparks-explosion">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.2s"/>
            <animate attributeName="cy" values="10;3;10" dur="2s" repeatCount="indefinite" begin="0.2s"/>
            <animate attributeName="r" values="0.8;1.5;0.8" dur="2s" repeatCount="indefinite" begin="0.2s"/>
          </circle>
          <circle cx="45" cy="11" r="0.9" fill="#FFFFFF" className="animate-sparks-explosion">
            <animate attributeName="opacity" values="0;1;0" dur="1.7s" repeatCount="indefinite" begin="0.5s"/>
            <animate attributeName="cy" values="11;4;11" dur="1.7s" repeatCount="indefinite" begin="0.5s"/>
            <animate attributeName="r" values="0.9;1.6;0.9" dur="1.7s" repeatCount="indefinite" begin="0.5s"/>
          </circle>

          {/* Heat shimmer effect at base */}
          <ellipse cx="40" cy="65" rx="25" ry="4" fill="url(#ultraFireOuter)" opacity="0.4" className="animate-heat-intense" />
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