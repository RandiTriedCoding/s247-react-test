const Button = ({
  children,
  onClick,
  className,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`bg-green-500 text-white rounded-lg px-5 py-2.5 transition-colors duration-300 
                  ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
