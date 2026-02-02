import { useMemo } from 'react';

const AnimatedBackground = () => {
  // Generate particles with random positions
  const particles = useMemo(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 20}s`,
      duration: `${15 + Math.random() * 20}s`,
      type: i % 5,
    })), []
  );

  // Generate stars with random positions
  const stars = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    })), []
  );

  // Particle color classes based on type
  const particleStyles = [
    'w-1 h-1 bg-primary-500/80 shadow-[0_0_10px_rgba(102,126,234,0.5)]',
    'w-1.5 h-1.5 bg-pink-400/80 shadow-[0_0_12px_rgba(240,147,251,0.5)]',
    'w-0.5 h-0.5 bg-sky-400/80 shadow-[0_0_8px_rgba(79,172,254,0.5)]',
    'w-1 h-1 bg-rose-500/80 shadow-[0_0_10px_rgba(245,87,108,0.5)]',
    'w-1 h-1 bg-cyan-400/80 shadow-[0_0_10px_rgba(0,242,254,0.5)]',
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0">
        {/* Orb 1 - Purple/Blue */}
        <div
          className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] rounded-full opacity-60 blur-[80px] animate-orb-float-1"
          style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
        />

        {/* Orb 2 - Pink/Red */}
        <div
          className="absolute -bottom-[150px] -right-[150px] w-[500px] h-[500px] rounded-full opacity-60 blur-[80px] animate-orb-float-2"
          style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}
        />

        {/* Orb 3 - Blue/Cyan */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-40 blur-[80px] animate-orb-float-3"
          style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}
        />

        {/* Additional subtle orbs for depth */}
        <div
          className="absolute top-[20%] right-[20%] w-[300px] h-[300px] rounded-full opacity-30 blur-[100px] animate-[orbFloat2_35s_ease-in-out_infinite]"
          style={{ background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)' }}
        />

        <div
          className="absolute bottom-[30%] left-[10%] w-[250px] h-[250px] rounded-full opacity-25 blur-[90px] animate-[orbFloat1_28s_ease-in-out_infinite]"
          style={{ background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)' }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute bottom-0 rounded-full animate-particle-rise ${particleStyles[particle.type]}`}
            style={{
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Rotating Square */}
        <div
          className="absolute top-[10%] left-[10%] w-[100px] h-[100px] border-2 border-primary-500 opacity-10 animate-shape-rotate-1"
        />

        {/* Pulsing Circle */}
        <div
          className="absolute top-[20%] right-[15%] w-[60px] h-[60px] border-2 border-pink-400 rounded-full opacity-10 animate-shape-rotate-2"
          style={{ animation: 'shapeRotate2 25s linear infinite, shapePulse 4s ease-in-out infinite' }}
        />

        {/* Rotating Diamond */}
        <div
          className="absolute bottom-[20%] left-[15%] w-[80px] h-[80px] border-2 border-sky-400 opacity-10 rotate-45"
          style={{ animation: 'shapeRotate1 35s linear infinite' }}
        />

        {/* Triangle */}
        <div
          className="absolute top-[60%] right-[10%] w-0 h-0 opacity-15 animate-float"
          style={{
            borderLeft: '40px solid transparent',
            borderRight: '40px solid transparent',
            borderBottom: '70px solid rgba(245, 87, 108, 0.15)',
          }}
        />

        {/* Morphing Shape */}
        <div
          className="absolute bottom-[10%] right-[25%] w-[120px] h-[120px] border-2 border-cyan-400 opacity-10 animate-shape-morph"
          style={{ animation: 'shapeMorph 15s ease-in-out infinite, shapeRotate1 40s linear infinite' }}
        />

        {/* Additional hexagon shape */}
        <div
          className="absolute top-[40%] left-[5%] w-[50px] h-[50px] opacity-10 animate-float"
          style={{
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            animationDelay: '2s',
          }}
        />
      </div>

      {/* Twinkling Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute w-[3px] h-[3px] bg-white rounded-full animate-twinkle"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
              boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.3)',
            }}
          />
        ))}
      </div>

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-100 animate-grid-move"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Gradient Mesh Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 20% 80%, rgba(120, 119, 198, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)',
        }}
      />

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
