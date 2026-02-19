const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white shadow p-4 rounded">
      {children}
    </div>
  );
};

export default Card;
