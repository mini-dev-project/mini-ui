export const MiniSpacer = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => {
  return <div className={`${className}`} style={{ height: `${size}px` }} />;
};
