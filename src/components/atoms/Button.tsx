interface Props {                 
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, onClick, className = "" }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`bg-yellow-400 hover:bg-yellow-500 px-4 py-2 font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
