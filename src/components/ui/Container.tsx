type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Container({ className = "", children }: Props) {
  return <div className={`lg:px-12 ${className}`}>{children}</div>;
}
