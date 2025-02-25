import colors from "../../../colors";

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
}

const ILetter = ({
  color = colors["base-03"] ?? "black",
  className,
  ...props
}: Props) => {
  return (
    <svg
      width="22"
      height="72"
      className={className}
      viewBox="0 0 22 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M22 0V72H0V0H22Z" fill={color} />
    </svg>
  );
};

export default ILetter;
