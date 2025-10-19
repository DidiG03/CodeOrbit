export default function Products() {
  const products = [
    {
      name: "OrbitCMS",
      description: "A powerful content management system for modern websites.",
      status: "Available Now",
      color: "blue",
    },
    {
      name: "DataFlow",
      description: "Advanced data analytics and visualization platform.",
      status: "Coming Soon",
      color: "purple",
    },
    {
      name: "ConnectAPI",
      description: "Seamless API integration and management solution.",
      status: "Beta",
      color: "green",
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Innovative solutions designed to accelerate your digital transformation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-${product.color}-100 text-${product.color}-800 dark:bg-${product.color}-900 dark:text-${product.color}-200`}>
                  {product.status}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {product.description}
              </p>
              <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

