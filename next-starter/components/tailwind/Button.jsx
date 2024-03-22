import classNames from "classnames";
export function Button({ className, size = "medium", ...props }) {
  return (
    <button
      {...props}
      className={classNames(
        `rounded bg-indigo-500 font-semibold text-white hover:bg-indigo-400`,
        className,
        {
          "px-2 py-1 text-xs": size === "small",
          "px-2.5 py-1.5 text-sm": size === "medium",
          "px-3.5 py-2.5 text-base": size === "large",
        }
      )}
    />
  );
}
