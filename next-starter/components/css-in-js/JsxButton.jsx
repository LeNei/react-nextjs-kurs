export function JsxButton({ className, size = "medium", ...props }) {
  return (
    <>
      <button {...props} className={`btn ${size} ${className}`} />
      <style jsx>{`
        .btn {
          border-radius: 4px;
          background-color: rgb(99, 102, 241);
          font-weight: 600;
          color: white;

          &:hover {
            background-color: rgb(129, 140, 248);
          }

          &.small {
            padding: 4px 8px;
            font-size: 12px;
            line-height: 16px;
          }

          &.medium {
            padding: 6px 10px;
            font-size: 14px;
            line-height: 20px;
          }

          &.large {
            padding: 10px 14px;
            font-size: 16px;
            line-height: 24px;
          }
        }
      `}</style>
    </>
  );
}
