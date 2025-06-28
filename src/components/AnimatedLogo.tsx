const AnimatedLogo = () => {
  return (
    <div className="relative inline-block cursor-pointer group">
      {/* Light Theme - Ocean Waves */}
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
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

          {/* Enhanced Text Gradients */}
          <linearGradient id="textGradientWater" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0D47A1" />
            <stop offset="50%" stopColor="#1565C0" />
            <stop offset="100%" stopColor="#1976D2" />
          </linearGradient>

          {/* Water Effects */}
          <filter id="waterGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Enhanced Text Glow for Water */}
          <filter id="textGlowWater" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feFlood floodColor="#1565C0" floodOpacity="0.8"/>
            <feComposite in2="coloredBlur" operator="in"/>
            <feMerge> 
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Flowing water waves - larger, more dramatic shapes */}
        
        {/* Deep water layer - flowing horizontal curves */}
        <path
          d="M8 25 
             C18 18, 28 32, 38 25 
             C48 18, 58 32, 58 42 
             C58 52, 48 58, 38 52 
             C28 46, 18 58, 8 52 
             C8 42, 8 32, 8 25 Z"
          fill="url(#oceanFlow1)"
          filter="url(#waterGlow)"
          className="animate-wave-deep"
        />
        
        {/* Mid water layer - gentle curves */}
        <path
          d="M12 30 
             C22 23, 32 37, 42 30 
             C52 23, 52 37, 47 47 
             C42 52, 32 47, 22 52 
             C12 47, 12 37, 12 30 Z"
          fill="url(#oceanFlow2)"
          filter="url(#waterGlow)"
          className="animate-wave-mid"
        />
        
        {/* Surface water layer - top flowing curves */}
        <path
          d="M18 33 
             C28 26, 38 40, 48 33 
             C48 40, 43 43, 33 40 
             C23 37, 18 40, 18 33 Z"
          fill="url(#oceanFlow3)"
          filter="url(#waterGlow)"
          className="animate-wave-surface"
        />
        
        {/* Letter A - Enhanced with premium font styling */}
        <text
          x="40"
          y="45"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="url(#textGradientWater)"
          filter="url(#textGlowWater)"
          className="animate-letter-water-glow group-hover:animate-pulse"
          style={{ 
            fontSize: '36px', 
            fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif', 
            fontWeight: '900',
            fontStyle: 'italic',
            textShadow: '0 2px 4px rgba(21, 101, 192, 0.3)',
            transition: 'all 0.3s ease'
          }}
        >
          A
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1.1;1"
            dur="2s"
            repeatCount="indefinite"
            begin="0s"
          />
          <animate
            attributeName="opacity"
            values="0.8;1;0.8"
            dur="3s"
            repeatCount="indefinite"
          />
        </text>
        
        {/* Floating water bubbles - larger and more dramatic */}
        <g className="animate-bubbles-float">
          <circle cx="25" cy="20" r="3" fill="#B3E5FC" opacity="0.8">
            <animate attributeName="cy" values="20;8;20" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="r" values="3;1.5;3" dur="4s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="55" cy="18" r="2.5" fill="#4FC3F7" opacity="0.7">
            <animate attributeName="cy" values="18;6;18" dur="5s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="5s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="r" values="2.5;1;2.5" dur="5s" repeatCount="indefinite" begin="1s"/>
          </circle>
          
          <circle cx="35" cy="15" r="2" fill="#29B6F6" opacity="0.9">
            <animate attributeName="cy" values="15;3;15" dur="3.5s" repeatCount="indefinite" begin="2s"/>
            <animate attributeName="opacity" values="0.9;0.4;0.9" dur="3.5s" repeatCount="indefinite" begin="2s"/>
            <animate attributeName="r" values="2;0.8;2" dur="3.5s" repeatCount="indefinite" begin="2s"/>
          </circle>
          
          <circle cx="15" cy="35" r="1.8" fill="#87CEEB" opacity="0.6">
            <animate attributeName="cy" values="35;25;35" dur="6s" repeatCount="indefinite" begin="3s"/>
            <animate attributeName="opacity" values="0.6;0.1;0.6" dur="6s" repeatCount="indefinite" begin="3s"/>
            <animate attributeName="r" values="1.8;0.5;1.8" dur="6s" repeatCount="indefinite" begin="3s"/>
          </circle>
        </g>
        
        {/* Water ripple effect at bottom */}
        <ellipse cx="40" cy="65" rx="25" ry="8" fill="#B3E5FC" opacity="0.4" className="animate-water-ripple"/>
      </svg>

      {/* Dark Theme - Burning Fire */}
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
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

          {/* Enhanced Text Gradients for Fire */}
          <linearGradient id="textGradientFire" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#FFD700" />
            <stop offset="70%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FF6B00" />
          </linearGradient>

          {/* Fire glow effects */}
          <filter id="fireGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Enhanced Text Glow for Fire */}
          <filter id="textGlowFire" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feFlood floodColor="#FFD700" floodOpacity="0.9"/>
            <feComposite in2="coloredBlur" operator="in"/>
            <feMerge> 
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Dynamic flame shapes - much larger, more dramatic */}
        
        {/* Outer flame - massive dancing shape */}
        <path
          d="M40 10 
             C32 15, 25 22, 22 35 
             C20 48, 25 58, 32 65 
             C40 70, 48 65, 55 58 
             C60 48, 58 35, 55 22 
             C52 15, 48 10, 40 10 Z
             M36 12 
             C42 6, 48 12, 52 20 
             C56 28, 52 36, 48 42 
             C42 36, 36 28, 36 20 
             C36 15, 36 12, 36 12 Z"
          fill="url(#fireFlame1)"
          filter="url(#fireGlow)"
          className="animate-flame-massive"
        />
        
        {/* Middle flame - intense core */}
        <path
          d="M40 15 
             C34 20, 28 28, 26 38 
             C24 46, 28 54, 34 60 
             C40 63, 46 60, 52 54 
             C58 46, 56 38, 54 28 
             C52 20, 46 15, 40 15 Z"
          fill="url(#fireFlame2)"
          filter="url(#fireGlow)"
          className="animate-flame-intense"
        />
        
        {/* Inner flame - white hot center */}
        <path
          d="M40 20 
             C36 25, 32 30, 30 38 
             C28 44, 32 50, 36 53 
             C40 55, 44 53, 48 50 
             C52 44, 50 38, 50 30 
             C50 25, 44 20, 40 20 Z"
          fill="url(#fireFlame3)"
          filter="url(#fireGlow)"
          className="animate-flame-core"
        />
        
        {/* Letter A - Enhanced with premium font styling */}
        <text
          x="40"
          y="45"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="url(#textGradientFire)"
          filter="url(#textGlowFire)"
          className="animate-letter-fire-burn group-hover:animate-pulse"
          style={{ 
            fontSize: '36px', 
            fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif', 
            fontWeight: '900',
            fontStyle: 'italic',
            textShadow: '0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 107, 0, 0.6)',
            transition: 'all 0.3s ease'
          }}
        >
          A
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1.15;1"
            dur="1.5s"
            repeatCount="indefinite"
            begin="0s"
          />
          <animate
            attributeName="opacity"
            values="0.9;1;0.9"
            dur="2s"
            repeatCount="indefinite"
          />
        </text>
        
        {/* Flying sparks and embers - larger and more dramatic */}
        <g className="animate-sparks-explosion">
          <circle cx="22" cy="18" r="3.5" fill="#FFD700">
            <animate attributeName="cy" values="18;5;18" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="r" values="3.5;1.5;3.5" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="58" cy="15" r="3" fill="#FFA500">
            <animate attributeName="cy" values="15;2;15" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
            <animate attributeName="opacity" values="1;0.2;1" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
            <animate attributeName="r" values="3;1;3" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
          </circle>
          
          <circle cx="30" cy="12" r="2.5" fill="#FF6B00">
            <animate attributeName="cy" values="12;0;12" dur="3s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="opacity" values="1;0.1;1" dur="3s" repeatCount="indefinite" begin="1s"/>
            <animate attributeName="r" values="2.5;0.8;2.5" dur="3s" repeatCount="indefinite" begin="1s"/>
          </circle>
          
          <circle cx="50" cy="16" r="2.2" fill="#FF4500">
            <animate attributeName="cy" values="16;4;16" dur="1.8s" repeatCount="indefinite" begin="1.5s"/>
            <animate attributeName="opacity" values="1;0.4;1" dur="1.8s" repeatCount="indefinite" begin="1.5s"/>
            <animate attributeName="r" values="2.2;0.8;2.2" dur="1.8s" repeatCount="indefinite" begin="1.5s"/>
          </circle>
          
          <circle cx="15" cy="25" r="2" fill="#DC143C">
            <animate attributeName="cy" values="25;12;25" dur="2.2s" repeatCount="indefinite" begin="2s"/>
            <animate attributeName="opacity" values="1;0.3;1" dur="2.2s" repeatCount="indefinite" begin="2s"/>
            <animate attributeName="r" values="2;0.6;2" dur="2.2s" repeatCount="indefinite" begin="2s"/>
          </circle>
          
          <circle cx="65" cy="28" r="1.8" fill="#8B0000">
            <animate attributeName="cy" values="28;15;28" dur="2.8s" repeatCount="indefinite" begin="2.5s"/>
            <animate attributeName="opacity" values="1;0.2;1" dur="2.8s" repeatCount="indefinite" begin="2.5s"/>
            <animate attributeName="r" values="1.8;0.5;1.8" dur="2.8s" repeatCount="indefinite" begin="2.5s"/>
          </circle>
        </g>
        
        {/* Heat shimmer effect at bottom */}
        <ellipse cx="40" cy="70" rx="30" ry="6" fill="#FF6B00" opacity="0.3" className="animate-heat-intense"/>
      </svg>
    </div>
  );
};

export default AnimatedLogo;