
const Features = () => {
  const features = [
    {
      title: "Verified Professionals",
      description: "All photographers are carefully vetted and verified to ensure quality and reliability.",
      icon: "✓"
    },
    {
      title: "Instant Quotes",
      description: "Get competitive quotes from multiple photographers within hours of your request.",
      icon: "⚡"
    },
    {
      title: "Secure Booking",
      description: "Safe and secure payment processing with full booking protection and insurance.",
      icon: "🔒"
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you.",
      icon: "💬"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Nyoko?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We make finding and booking the perfect photographer effortless and secure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
