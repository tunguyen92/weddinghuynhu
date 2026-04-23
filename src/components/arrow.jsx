export const Arrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} items-center justify-center after:static! opacity-50 hover:opacity-100`}
      style={{
        ...style,
        background: "rgba(255, 255, 255, 0.3)",
        borderRadius: "60px",
        display: "flex",
        width: "60px",
        height: "60px",
        border: "2px solid #fff",
      }}
      onClick={onClick}
    />
  );
};
