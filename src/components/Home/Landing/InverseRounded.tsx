interface Props {
  fill: string;
  className?: string;
}

const InverseRounded = ({ fill, className }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M20 0C8.95431 0 0 8.95431 0 20V0H20Z" fill={fill} />
    </svg>
  );
};

export default InverseRounded;
