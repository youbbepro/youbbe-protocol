import React from 'react';
import { cn } from '@/src/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ className, showText = true, size = 'md' }: LogoProps) {
  const sizes = {
    sm: 24,
    md: 40,
    lg: 56,
    xl: 96
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {showText && (
        <div className="flex flex-col">
          <h1 className={cn(
            "font-display font-black tracking-tight text-white leading-none select-none",
            size === 'xl' ? 'text-6xl md:text-8xl' : size === 'lg' ? 'text-4xl' : 'text-2xl'
          )}>
            you<span className="text-ybb-pink">b</span>be<span className="text-ybb-pink">.</span>
          </h1>
          <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold ml-1">Protocol</span>
        </div>
      )}
    </div>
  );
}
