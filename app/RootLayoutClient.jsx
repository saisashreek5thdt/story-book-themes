"use client";

import React, { useEffect, useState } from "react";
import "./globals.css";

export default function RootLayoutClient({ children }) {
    const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

    useEffect(() => {
        const handleOrientationChange = () => {
          setIsLandscape(window.innerWidth > window.innerHeight);
        };
        
        window.addEventListener('resize', handleOrientationChange);
        return () => window.removeEventListener('resize', handleOrientationChange);
      }, []);

  return (
    <>
        <div div className={isLandscape ? "" : "force-landscape"}>
          { children }
        </div>
    </>
  );
}