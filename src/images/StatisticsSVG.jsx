const StatisticsSVG = ({ active, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g
      stroke={active ? "#f9f9f9" : "#686868"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path
        d="M11.466 9.333c.185 0 .277 0 .352.041.062.034.12.097.147.162.033.079.025.162.008.33a5.332 5.332 0 1 1-5.84-5.84c.168-.016.252-.025.33.009a.354.354 0 0 1 .162.146c.041.075.041.167.041.352V8.8c0 .186 0 .28.037.351a.333.333 0 0 0 .145.146c.072.036.165.036.352.036h4.266Z"
        opacity={0.8}
      />
      <path d="M9.333 1.867c0-.185 0-.277.041-.352a.354.354 0 0 1 .162-.146c.079-.034.162-.025.33-.009a5.333 5.333 0 0 1 4.774 4.775c.016.167.025.25-.008.329a.353.353 0 0 1-.147.162c-.075.041-.167.041-.352.041H9.866c-.186 0-.28 0-.351-.036a.333.333 0 0 1-.146-.146c-.036-.071-.036-.165-.036-.351V1.867Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default StatisticsSVG;
