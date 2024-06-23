const VectorSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={window.innerWidth < 768 ? 44 : 60}
    height={window.innerWidth < 768 ? 18 : 25}
    fill="none"
    {...props}
  >
    <path
      fill="#30B94D"
      fillOpacity={0.2}
      d={
        window.innerWidth < 768
          ? "M44 1 1 6.965V18h43V1Z"
          : "M60 1 1 9.421V25h59V1Z"
      }
    />
    <rect
      width={window.innerWidth < 768 ? 43.514 : 60}
      height={window.innerWidth < 768 ? 2.176 : 3}
      fill="#30B94D"
      rx={1}
      transform={
        window.innerWidth < 768
          ? "scale(-1 1) rotate(9.184 -21.624 -269.225)"
          : "scale(-1 1) rotate(9.184 -29.76 -370.536)"
      }
    />
  </svg>
);
export default VectorSVG;
