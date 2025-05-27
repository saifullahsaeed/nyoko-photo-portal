
const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Browse Photographers",
      description: "Explore our curated collection of professional photographers and their portfolios.",
      icon: "🔍"
    },
    {
      step: "02", 
      title: "Request a Quote",
      description: "Share your vision and requirements to receive personalized quotes from photographers.",
      icon: "💬"
    },
    {
      step: "03",
      title: "Book Your Session",
      description: "Choose your preferred photographer and schedule your perfect photography session.",
      icon: "📅"
    },
    {
      step: "04",
      title: "Capture Memories",
      description: "Work with your photographer to create stunning images that tell your story.",
      icon: "📸"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Getting the perfect photographer for your needs is simple with our streamlined process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto group-hover:bg-gray-200 transition-colors duration-300">
                  {step.step}
                </div>
                <div className="absolute -top-2 -right-2 text-3xl">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
