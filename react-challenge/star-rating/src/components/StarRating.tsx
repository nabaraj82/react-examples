import React from "react";

const StarRating = () => {
  const [fillPercent, setFillPercent] = React.useState<number>(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { width } = e.currentTarget.getBoundingClientRect();
    const x = e.nativeEvent.offsetX;
    const centerPoint = width / 2;

    if (x < centerPoint) {
      // Left side -> 50% fill
      setFillPercent(50);
    } else {
      // Right side -> 100% fill
      setFillPercent(100);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { width } = e.currentTarget.getBoundingClientRect();
    const x = e.nativeEvent.offsetX;
    const rating = x < width / 2 ? 0.5 : 1;
    console.log("Selected rating:", rating);
  };

  return (
    <div
      style={{
        display: "inline-block",
        cursor: "pointer",
        position: "relative",
        width: 40,
        height: 40,
      }}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {/* Empty Star Outline */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 1l5.93 12.23L40 16.87l-9.07 8.85L34.6 40 20 32.13 5.4 40l3.67-14.02L0 16.87l14.07-3.64z"
          stroke="#ccc"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Filled part of the star */}
      <svg
        width={`${fillPercent}%`}
        height="40"
        viewBox="0 0 40 40"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          overflow: "visible",
          pointerEvents: "none",
        }}
      >
        <path
          d="M20 2l5.6 12.2h13l-10.3 8.2 4.7 12.2L20 26.2l-10.3 5.4 4.7-12.2L4 14.2h13L22.6 2z"
          fill="gold"
        />
      </svg>
    </div>
  );
};

export default StarRating;
