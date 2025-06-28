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
          {/* Ocean Wave Gradients - More vibrant and flowing */}
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

          {/* Water Effects */}
          <filter id="waterGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Flowing water waves - more natural curved shapes */}
        
        {/* Deep water layer - flowing horizontal curves */}
        <path
          d="M5 20 
             C15 15, 25 25, 35 20 
             C45 15, 55 25, 55 35 
             C55 45, 45 50, 35 45 
             C25 40, 15 50, 5 45 
             C5 35, 5 25, 5 20 Z"
          fill="url(#oceanFlow1)"
          filter="url(#waterGlow)"
          className="animate-wave-deep"
        />
        
        {/* Mid water layer - gentle curves */}
        <path
          d="M10 25 
             C20 20, 30 30, 40 25 
             C50 20, 50 30, 45 40 
             C40 45, 30 40, 20 45 
             C10 40, 10 30, 10 25 Z"
          fill="url(#oceanFlow2)"
          filter="url(#waterGlow)"
          className="animate-wave-mid"
        />
        
        {/* Surface water layer - top flowing curves */}
        <path
          d="M15 28 
             C25 23, 35 33, 45 28 
             C45 35, 40 38, 30 35 
             C20 32, 15 35, 15 28 Z"
          fill="url(#oceanFlow3)"
          filter="url(#waterGlow)"
          className="animate-wave-surface"
        />
        
        {/* Letter A - Modern, clean typography */}
        <text
          x="30"
          y="36"
          textAnchor="middle"
          dominantBaseline="middle"
          className="animate-letter-water-glow"
          style={{ 
            fontSize: '32px', 
            fontFamily: 'Poppins, Inter, sans-serif', 
            fontWeight: '800',
            fill: '#FFFFFF',
            stroke: '#0288D1',
            strokeWidth: '1.5px',
            filter: 'drop-shadow(2px 2px 4px rgba(2, 136, 209, 0.6))'
          }}
        >
          A
        </text>
        
        {/* Floating water bubbles */}
        <g className="animate-bubbles-float">
          <circle cx="20" cy="18" r="2" fill="#B3E5FC" opacity="0.7">
            <animate attributeName="cy" values="18;8;18" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.7;0.3;0.7" dur="4s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="40" cy="16" r="1.5" fill="#4FC3F7" opacity="0.6">
            <animate attributeName="cy" values="16;6;16" dur="5s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="5s" repeatCount="indefinite" begin="1s"/>
          </circle>
          
          <circle cx="25" cy="12" r="1.2" fill="#29B6F6" opacity="0.8">
            <animate attributeName="cy" values="12;2;12" dur="3.5s" repeatCount="indefinite" begin="2s"/>
            <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3.5s" repeatCount="indefinite" begin="2s"/>
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
          {/* Enhanced fire gradients - more dramatic */}
          <linearGradient id="fireFlame1" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="30%" stopColor="#FF8C00" />
            <stop offset="60%" stopColor="#FFA500" />
            <stop offset="80%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFFF99" />
          </linearGradient>
          
          <linearGradient id="fireFlame2" x1="30%" y1="100%" x2="70%" y2="0%">
            <stop offset="0%" stopColor="#DC143C" />
            <stop offset="40%" stopColor="#FF4500" />
            <stop offset="70%" stopColor="#FF6B00" />
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>

          <linearGradient id="fireFlame3" x1="70%" y1="100%" x2="30%" y2="0%">
            <stop offset="0%" stopColor="#8B0000" />
            <stop offset="30%" stopColor="#DC143C" />
            <stop offset="60%" stopColor="#FF4500" />
            <stop offset="100%" stopColor="#FF6B00" />
          </linearGradient>

          {/* Fire glow effects */}
          <filter id="fireGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Dynamic flame shapes - tall, dancing flames */}
        
        {/* Outer flame - tall dancing shape */}
        <path
          d="M30 8 
             C25 12, 20 18, 18 28 
             C16 38, 20 45, 25 50 
             C30 55, 35 50, 40 45 
             C44 38, 42 28, 40 18 
             C38 12, 35 8, 30 8 Z
             M28 10 
             C32 6, 36 10, 38 16 
             C40 22, 38 28, 35 32 
             C32 28, 28 22, 28 16 
             C28 12, 28 10, 28 10 Z"
          fill="url(#fireFlame1)"
          filter="url(#fireGlow)"
          className="animate-flame-massive"
        />
        
        {/* Middle flame - intense core */}
        <path
          d="M30 12 
             C26 16, 22 22, 21 30 
             C20 36, 23 42, 27 46 
             C30 48, 33 46, 37 42 
             C41 36, 40 30, 39 22 
             C38 16, 34 12, 30 12 Z"
          fill="url(#fireFlame2)"
          filter="url(#fireGlow)"
          className="animate-flame-intense"
        />
        
        {/* Inner flame - white hot center */}
        <path
          d="M30 16 
             C28 20, 26 24, 25 30 
             C24 34, 26 38, 28 40 
             C30 42, 32 40, 34 38 
             C36 34, 35 30, 35 24 
             C35 20, 32 16, 30 16 Z"
          fill="url(#fireFlame3)"
          filter="url(#fireGlow)"
          className="animate-flame-core"
        />
        
        {/* Letter A - Modern, bold typography */}
        <text
          x="30"
          y="36"
          textAnchor="middle"
          dominantBaseline="middle"
          className="animate-letter-fire-burn"
          style={{ 
            fontSize: '32px', 
            fontFamily: 'Poppins, Inter, sans-serif', 
            fontWeight: '800',
            fill: '#FFFFFF',
            stroke: '#8B0000',
            strokeWidth: '1.5px',
            filter: 'drop-shadow(2px 2px 6px rgba(139, 0, 0, 0.8))'
          }}
        >
          A
        </text>
        
        {/* Flying sparks and embers */}
        <g className="animate-sparks-explosion">
          <circle cx="18" cy="15" r="2.5" fill="#FFD700">
            <animate attributeName="cy" values="15;5;15" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="r" values="2.5;1;2.5" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="42" cy="12" r="2" fill="#FFA500">
            <animate attributeName="cy" values="12;2;12" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
            <animate attributeName="opacity" values="1;0.2;1" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
            <animate attributeName="r" values="2;0.8;2" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
          </circle>
          
          <circle cx="25" cy="10" r="1.8" fill="#FF6B00">
            <animate attributeName="cy" values="10;0;10" dur="3s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="opacity" values="1;0.1;1" dur="3s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="r" values="1.8;0.5;1.8" dur="3s" repeatCount="indefinite" begin="1s"/>
          </circle>
          
          <circle cx="35" cy="14" r="1.5" fill="#FF4500">
            <animate attributeName="cy" values="14;4;14" dur="1.8s" repeatCount="indefinite" begin="1.5s"/>
            <animate attributeName="opacity" values="1;0.4;1" dur="1.8s" repeatCount="indefinite" begin="1.5s"/>
            <animate attributeName="r" values="1.5;0.6;1.5" dur="1.8s" repeatCount="indefinite" begin="1.5s"/>
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedLogo;