export default function OrangeBlockSVG({ width = 70, height = 35, fill = "#FFA216" }) {
    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={`
            M0,0 
            H${width - height * 0.60} 
            Q${width + height * 0.001},0 ${width},${height / 2} 
            Q${width + height * 0.001},${height} ${width - height * 0.60},${height} 
            H0 
            Z
          `}
          fill={fill}
        />
      </svg>
    );
  }