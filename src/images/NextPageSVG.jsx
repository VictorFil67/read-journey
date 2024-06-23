const NextPageSVG = ({ disabled, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={window.innerWidth < 768 ? 32 : 40}
    height={window.innerWidth < 768 ? 32 : 40}
    fill="none"
    {...props}
  >
    <circle
      cx={window.innerWidth < 768 ? 16 : 20}
      cy={window.innerWidth < 768 ? 16 : 20}
      r={window.innerWidth < 768 ? 15.5 : 19.5}
      stroke="#F9F9F9"
      strokeOpacity={0.2}
    />
    <path
      stroke="#F9F9F9"
      strokeOpacity={disabled ? 0.2 : 1}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d={window.innerWidth < 768 ? "m14 12 4 4-4 4" : "m17.5 15 5 5-5 5"}
    />
  </svg>
);
export default NextPageSVG;
