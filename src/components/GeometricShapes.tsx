const GeometricShapes = () => {
  return (
    <>
      {/* Large diamond shape - right side */}
      <div className="geometric-shape w-64 h-64 right-[5%] top-[15%] animate-float opacity-60" />
      <div className="geometric-shape w-48 h-48 right-[10%] top-[25%] animate-float-delayed opacity-40" />
      <div className="geometric-shape w-32 h-32 right-[15%] top-[35%] animate-float opacity-30" />
      
      {/* Sparkles */}
      <div className="sparkle top-[20%] right-[20%]" style={{ animationDelay: '0s' }} />
      <div className="sparkle top-[30%] right-[8%]" style={{ animationDelay: '1s' }} />
      <div className="sparkle top-[50%] right-[25%]" style={{ animationDelay: '2s' }} />
      <div className="sparkle top-[15%] right-[35%]" style={{ animationDelay: '0.5s' }} />
      <div className="sparkle top-[40%] left-[10%]" style={{ animationDelay: '1.5s' }} />
      <div className="sparkle top-[60%] left-[5%]" style={{ animationDelay: '2.5s' }} />
    </>
  );
};

export default GeometricShapes;
