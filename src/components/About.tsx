export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              About Code Orbit
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              We are a team of passionate developers, designers, and innovators dedicated to 
              creating exceptional digital experiences that drive business growth.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              With years of experience in software development and a commitment to excellence, 
              we help businesses transform their ideas into reality through cutting-edge technology 
              and innovative solutions.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  100+
                </div>
                <div className="text-gray-600 dark:text-gray-300">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  50+
                </div>
                <div className="text-gray-600 dark:text-gray-300">Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  5+
                </div>
                <div className="text-gray-600 dark:text-gray-300">Years</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 absolute inset-0 blur-3xl"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and success in the digital age.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Values
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Innovation & Excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Client-Centric Approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">Continuous Learning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

