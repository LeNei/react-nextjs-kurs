import styles from "./Button.module.scss";

export function ModuleButton({ className, size = "medium", ...props }) {
  return (
    <button
      {...props}
      className={`${styles.btn} ${styles[`btn--${size}`]} ${className}`}
    />
  );
}
