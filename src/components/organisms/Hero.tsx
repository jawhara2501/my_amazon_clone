const Hero = () => {
  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1607083206968-13611e3d76db"
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute bottom-10 left-10 bg-white p-6 shadow-lg text-black">
        <h2 className="text-xl font-bold">
          Welcome to Amazon Clone
        </h2>
        <p>Big deals. Best prices.</p>
      </div>
    </div>
  );
};

export default Hero;
