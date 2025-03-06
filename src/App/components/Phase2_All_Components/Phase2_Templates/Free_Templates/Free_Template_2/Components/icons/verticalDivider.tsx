const VerticalDivider = (props: any) => {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4"
      height="82"
      viewBox="0 0 4 82"
      fill="none"
      {...props}
    >
      <path
        d="M2.625 1L1.62508 80.9937"
        stroke={color || "#007AFF"}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default VerticalDivider;
