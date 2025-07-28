"use client";

import { useState, useEffect, useRef } from "react";
import { Users } from "lucide-react";

const RecruitButton = () => {
  const [isVisible, setIsVisible] = useState(false); // Start hidden until popup closes
  const [timeLeft, setTimeLeft] = useState(10);
  const [isMounted, setIsMounted] = useState(false);
  const [canShow, setCanShow] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Check for beta popup status and listen for close event
  useEffect(() => {
    const checkPopupStatus = () => {
      const isDismissed = localStorage.getItem("betaPopupDismissed");
      if (isDismissed) {
        setCanShow(true);
        setIsVisible(true);
      }
    };

    // Check immediately
    checkPopupStatus();

    // Listen for popup close event
    const handlePopupClosed = () => {
      setCanShow(true);
      setIsVisible(true);
    };

    window.addEventListener("betaPopupClosed", handlePopupClosed);

    return () => {
      window.removeEventListener("betaPopupClosed", handlePopupClosed);
    };
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Mouse tracking - only when button can show
  useEffect(() => {
    if (!canShow) return;

    let animationId: number;
    let isShown = false;

    const updatePosition = (e: MouseEvent) => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }

      animationId = requestAnimationFrame(() => {
        const x = e.clientX - 75;
        const y = e.clientY - 25;

        // Only update if position is safe and elements exist
        if (x > 0 && y > 0 && buttonRef.current && tooltipRef.current) {
          // Direct DOM manipulation - no React state updates
          buttonRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          tooltipRef.current.style.transform = `translate3d(${x + 45}px, ${
            y - 35
          }px, 0)`;

          // Show button only after first valid position
          if (!isShown) {
            buttonRef.current.style.opacity = "1";
            tooltipRef.current.style.opacity = "1";
            isShown = true;
          }
        }
      });
    };

    // Fallback positioning
    const fallbackTimer = setTimeout(() => {
      if (!isShown && buttonRef.current && tooltipRef.current) {
        const x = window.innerWidth - 180;
        const y = window.innerHeight - 80;
        buttonRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        tooltipRef.current.style.transform = `translate3d(${x + 45}px, ${
          y - 35
        }px, 0)`;
        buttonRef.current.style.opacity = "1";
        tooltipRef.current.style.opacity = "1";
        isShown = true;
      }
    }, 300);

    window.addEventListener("mousemove", updatePosition, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      clearTimeout(fallbackTimer);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [canShow]);

  // 10-second countdown timer - only start when button can show
  useEffect(() => {
    if (!canShow) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsVisible(false);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [canShow]);

  const handleClick = () => {
    window.open(
      "mailto:contact@danielmitka.com?subject=Recruitment Inquiry",
      "_blank"
    );
    setIsVisible(false);
  };

  if (!isMounted || !canShow || !isVisible) return null;

  return (
    <>
      {/* Main button */}
      <div
        ref={buttonRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "150px",
          height: "50px",
          backgroundColor: "#9333ea",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: "bold",
          borderRadius: "25px",
          zIndex: 9999,
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          gap: "8px",
          willChange: "transform",
          opacity: 0, // Start invisible
          pointerEvents: "auto",
        }}
        onClick={handleClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#7c3aed";
          e.currentTarget.style.transform += " scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#9333ea";
          e.currentTarget.style.transform =
            e.currentTarget.style.transform.replace(" scale(1.05)", "");
        }}
      >
        <Users size={16} />
        Recruit Me!
      </div>

      {/* Countdown tooltip */}
      <div
        ref={tooltipRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          backgroundColor: "black",
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "12px",
          zIndex: 10000,
          whiteSpace: "nowrap",
          willChange: "transform",
          opacity: 0, // Start invisible
          pointerEvents: "none",
        }}
      >
        Catch me! {timeLeft}s
      </div>
    </>
  );
};

export default RecruitButton;
