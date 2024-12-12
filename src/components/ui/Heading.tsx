type Props = {
  children: React.ReactNode;
};

export default function Heading({ children }: Props) {
  return <h1 className="text-xl uppercase font-medium my-2">{children}</h1>;
}
