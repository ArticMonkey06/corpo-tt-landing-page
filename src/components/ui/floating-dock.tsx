"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import Link from "next/link";
import React, { PropsWithChildren, useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface DockProps {
  className?: string;
  mobileClassName?: string;

  items: {
    title: string;
    description?: string;
    icon: React.ReactNode;
    // Optional: items without a destination render as non-interactive (no link),
    // avoiding a dead "#" anchor that would jump to the top of the page.
    href?: string;
  }[];
}

export const FloatingDock = ({
  className,
  mobileClassName,
  items,
}: DockProps) => {
  const mouseX = useMotionValue(Infinity);

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <TooltipProvider>
      {/* Non-mobile dock */}
      <div
        ref={containerRef}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          "hidden md:flex items-end h-16 pb-3 px-4 rounded-full",
          className
        )}
      >
        <div className="flex items-end h-full gap-x-4">
          {items.map((item, idx) => (
            <DockItem key={`dock-item-${idx}`} mouseX={mouseX} item={item}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="w-full h-full rounded-full bg-neutral-700/50 flex items-center justify-center"
                >
                  {item.icon}
                </Link>
              ) : (
                <div className="w-full h-full rounded-full bg-neutral-700/50 flex items-center justify-center">
                  {item.icon}
                </div>
              )}
            </DockItem>
          ))}
        </div>
      </div>
      {/* Mobile dock */}
      <div
        className={cn(
          "flex md:hidden items-end h-16 pb-3 px-4 rounded-full",
          mobileClassName
        )}
      >
        <div className="flex items-end h-full gap-x-4">
          {items.map((item, idx) => (
             <Tooltip key={`mobile-dock-item-${idx}`}>
              <TooltipTrigger asChild>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="w-12 h-12 relative"
                  >
                    <div className="w-full h-full rounded-full bg-neutral-700/50 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </Link>
                ) : (
                  <div className="w-12 h-12 relative">
                    <div className="w-full h-full rounded-full bg-neutral-700/50 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                )}
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-bold">{item.title}</p>
                {item.description && <p>{item.description}</p>}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};

export const DockItem = ({
  children,
  mouseX,
  item,
}: PropsWithChildren<{
  mouseX: MotionValue<number>;
  item: { title: string; description?: string; icon: React.ReactNode; href?: string };
}>) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          ref={ref}
          style={{ width }}
          className="w-10 aspect-square rounded-full flex items-center justify-center"
        >
          {children}
        </motion.div>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-bold">{item.title}</p>
        {item.description && <p>{item.description}</p>}
      </TooltipContent>
    </Tooltip>
  );
};
