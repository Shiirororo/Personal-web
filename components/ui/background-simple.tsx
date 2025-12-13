"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundSimple = React.memo(({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 flex items-center justify-center overflow-hidden",
        className,
      )}
    >
      {/* Gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-background/30 to-background" />

      {/* Soft blurred orbs for a gentle sparkle */}
      <div
        aria-hidden
        className="absolute left-[-10%] top-[-10%] w-[40vmin] h-[40vmin] rounded-full bg-indigo-600/10 blur-[80px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute right-[-10%] bottom-[-10%] w-[30vmin] h-[30vmin] rounded-full bg-purple-600/8 blur-[100px] pointer-events-none"
      />

      {/* Slight noise / vignette via CSS pseudo-elements could be more complex; keep it simple */}
      <div className="absolute inset-0 bg-background/20 backdrop-blur-sm pointer-events-none" />
    </div>
  );
});

BackgroundSimple.displayName = "BackgroundSimple";
