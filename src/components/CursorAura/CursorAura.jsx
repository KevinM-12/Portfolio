
import { useEffect, useRef } from "react";
import "./CursorAura.css";

const CursorAura = () => {
  const auraRef = useRef(null);

  useEffect(() => {
    const aura = auraRef.current;

    if (!aura) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    let currentX = targetX;
    let currentY = targetY;

    let animationFrame;

    const handlePointerMove = (event) => {
      if (event.pointerType !== "mouse") return;

      targetX = event.clientX;
      targetY = event.clientY;

      aura.style.opacity = "1";
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.35;
      currentY += (targetY - currentY) * 0.35;

      aura.style.transform = `
        translate3d(${currentX}px, ${currentY}px, 0)
        translate(-50%, -50%)
      `;

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={auraRef}
      className="cursor-aura"
      aria-hidden="true"
    />
  );
};

export default CursorAura;
