const ReadingIndicatorSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={window.innerWidth < 768 ? 40 : 50}
    height={window.innerWidth < 768 ? 40 : 50}
    fill="none"
    {...props}
  >
    <circle
      cx={window.innerWidth < 768 ? 20 : 25}
      cy={window.innerWidth < 768 ? 20 : 25}
      r={window.innerWidth < 768 ? 19 : 24}
      stroke="#F9F9F9"
      strokeWidth={2}
    />
    <rect
      width={window.innerWidth < 768 ? 15 : 20}
      height={window.innerWidth < 768 ? 15 : 20}
      x={window.innerWidth < 768 ? 12 : 15}
      y={window.innerWidth < 768 ? 13 : 15}
      fill="#E90516"
      rx={3}
    />
  </svg>
);
export default ReadingIndicatorSVG;
