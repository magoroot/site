import React from "react";

function FeelingProud() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="800"
      height="600"
      viewBox="0 0 600 450"
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "900px",
        display: "block",
        margin: "0 auto",
      }}
    >
      <defs>
        <filter id="cc7137b887" x="0%" y="0%" width="100%" height="100%">
          <feColorMatrix
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            colorInterpolationFilters="sRGB"
          />
        </filter>
        <filter id="a26411504a" x="0%" y="0%" width="100%" height="100%">
          <feColorMatrix
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.2126 0.7152 0.0722 0 0"
            colorInterpolationFilters="sRGB"
          />
        </filter>
      </defs>
      {/* conteúdo principal do seu SVG */}
      <image
        x="0"
        y="0"
        width="600"
        height="450"
        xlinkHref="data:image/png;base64,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"
      />
    </svg>
  );
}

export default FeelingProud;
