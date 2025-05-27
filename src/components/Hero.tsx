
const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Capture Your Perfect
            <span className="block text-gray-600">Moments</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with professional photographers who bring your vision to life. 
            From weddings to portraits, find the perfect artist for your special moments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Request a Quote
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
              Explore Photographers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
