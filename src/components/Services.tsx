export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      icon: "🌐",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions for iOS and Android.",
      icon: "📱",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment strategies.",
      icon: "☁️",
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love.",
      icon: "🎨",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow bg-white dark:bg-gray-800"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

