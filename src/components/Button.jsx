const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-green-500 text-white rounded-lg px-5 py-2.5 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
