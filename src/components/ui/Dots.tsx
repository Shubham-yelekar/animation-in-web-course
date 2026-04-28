import React from "react";

const Dots = () => {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="h-1 max-h-1 w-1 max-w-1 animate-pulse rounded-full bg-current"
          style={{
            animationDelay: `${index * 300}ms`,
            animationDuration: "900ms",
          }}
        />
      ))}
    </div>
  );
};

export default Dots;
