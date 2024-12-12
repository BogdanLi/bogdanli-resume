type Props = {
  variant?: "solid" | "dotted";
};

export default function Divider({ variant = "solid" }: Props) {
  return (
    <div
      className={`h-px border-black w-full ${
        variant === "solid" ? "border-t" : "border-dotted border-t-2"
      }`}
    />
  );
}
