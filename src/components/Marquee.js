import { cn } from "@/lib/utils";

export function Marquee({
  children,
  reverse = false,
  pauseOnHover = false,
  className,
  duration = "20s",
}) {
  return (
    <div
      className={cn(
        "marquee relative flex w-full flex-col items-center justify-center overflow-hidden",
        pauseOnHover && "pause-on-hover",
        className
      )}
      style={{ "--duration": duration }}
    >
      <div className={cn("marquee-track flex min-w-full shrink-0 items-stretch gap-4 px-2", reverse && "reverse")}>
        {children}
        {children}
      </div>
    </div>
  );
}


