const PauseIndicatorSVG = (props) => (
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
      r={window.innerWidth < 768 ? 15 : 20}
      fill="#E90516"
    />
    <circle
      cx={window.innerWidth < 768 ? 20 : 25}
      cy={window.innerWidth < 768 ? 20 : 25}
      r={window.innerWidth < 768 ? 19 : 24}
      stroke="#F9F9F9"
      strokeWidth={2}
    />
  </svg>
);
export default PauseIndicatorSVG;
