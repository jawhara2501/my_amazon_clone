interface Props {
  placeholder?: string;
}

const Input = ({ placeholder }: Props) => {
  return (
    <input
      placeholder={placeholder}
      className="px-3 py-2 rounded w-full text-white"
    />
  );
};

export default Input;
