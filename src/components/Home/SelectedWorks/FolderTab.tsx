interface Props {
  className?: string;
}

const FolderTab = ({ className }: Props) => {
  return (
    <svg
      width="360"
      height="60"
      viewBox="0 0 360 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M276.833 0C318.166 0 318.167 60 360 60H0V40C0 17.9086 17.9086 0 40 0H276.833Z"
        fill="white"
      />
    </svg>
  );
};

export default FolderTab;
