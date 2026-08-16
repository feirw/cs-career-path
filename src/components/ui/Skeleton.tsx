import { cn } from "@/lib/cn";

/** Placeholder με shimmer — το ίδιο σχήμα με το περιεχόμενο που περιμένουμε. */
export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("skeleton rounded-full", className)} aria-hidden />;
}

export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          className={cn("h-3.5", index === lines - 1 ? "w-2/3" : "w-full")}
        />
      ))}
    </div>
  );
}
