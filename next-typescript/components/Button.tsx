type ButtonProps = {
  onClick?: () => void;
  size?: "small" | "medium" | "large";
} & React.HTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return <button {...props} />;
}
