import cn from "../../util/cn";

const bars = Array(12).fill(0);
interface SpinnerProps {
  color?: string;
  size?: number;
  className?: string;
}
export function Spinner({
  color = "currentColor",
  size = 20,
  className,
}: SpinnerProps) {
  return (
    <div
      className={cn("relative", className)}
      style={{
        width: size,
        height: size,
        "--spinner-color": color,
      }}
    >
      {/* This wrapper is positioned absolutely in the center of the parent 
        so all the bars rotate around the true center point.
      */}
      <div className="absolute top-1/2 left-1/2 h-full w-full">
        {bars.map((_, i) => {
          // Math: Each bar is rotated 30 degrees more than the last (360 / 12 = 30)
          const rotation = i * 30;
          // Math: Each bar starts 0.1s after the last, starting from -1.2s
          const delay = -1.2 + i * 0.1;

          return (
            <div
              key={`spinner-bar-${i}`}
              // The Tailwind classes replace the standard `.bar` CSS
              className="animate-spinner-fade absolute -top-[3.9%] -left-[10%] h-[8%] w-[24%] rounded-md bg-[var(--spinner-color)]"
              style={{
                // We apply the dynamic math directly via inline styles
                transform: `rotate(${rotation}deg) translate(146%)`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
