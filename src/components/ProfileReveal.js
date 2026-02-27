import React, { useEffect, useRef } from "react";

const REVEAL_RADIUS = 70;

const ProfileReveal = ({ src, alt, className }) => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const canvasRef = useRef(null);

  const resetOverlay = () => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    if (!img || !canvas) return;

    const width = img.clientWidth;
    const height = img.clientHeight;
    if (!width || !height) return;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0, 0, 0, 0.95)";
    ctx.fillRect(0, 0, width, height);
  };

  useEffect(() => {
    resetOverlay();

    const handleMouseMove = (event) => {
      const img = imgRef.current;
      const canvas = canvasRef.current;
      if (!img || !canvas) return;

      const rect = img.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const inside =
        x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;

      if (!inside) return;

      const ctx = canvas.getContext("2d");
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, REVEAL_RADIUS, 0, Math.PI * 2);
      ctx.fill();
    };

    const handleResize = () => resetOverlay();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="profile-reveal" ref={containerRef}>
      <img ref={imgRef} src={src} alt={alt} className={className} onLoad={resetOverlay} />
      <canvas ref={canvasRef} className="profile-reveal-mask" />
    </div>
  );
};

export default ProfileReveal;
