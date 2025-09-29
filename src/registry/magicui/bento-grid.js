import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = forwardRef(function BentoGrid(
  { className = "", children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "grid gap-4 sm:gap-6",
        "sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

export function BentoCard({
  icon,
  name,
  description,
  background,
  className = "",
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm",
        "transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5",
        className
      )}
    >
      {background}
      <div className="relative z-10">
        {icon && (
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full [background:var(--btn-primary-gradient)] text-white">
            {icon}
          </div>
        )}
        <div className="text-lg font-bold text-gray-900">{name}</div>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
        )}
      </div>
    </div>
  );
}


