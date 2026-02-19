interface Props {                 
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 font-semibold"
    >
      {children}
    </button>
  );
};

export default Button;
