import Image from 'next/image';

export function Mission() {
  return (
    <section className="py-24 bg-[#052659]">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-8 text-[#C1E8FF]">Our Mission</h2>
              <p className="text-lg text-[#C1E8FF]/90 mb-6">
                Our mission is to provide cutting-edge, customized software solutions and professional services that empower businesses to thrive in an increasingly digital world. We are committed to helping organizations optimize their operations, enhance customer experiences, and achieve sustainable growth through innovative technology and strategic expertise.
              </p>
              <p className="text-lg text-[#C1E8FF]/90">
                By leveraging the latest advancements in artificial intelligence, cloud computing, cybersecurity, and data analytics, we aim to transform complex challenges into valuable opportunities. Our approach is centered on understanding the unique needs of each client, delivering scalable and future-proof solutions, and fostering long-term partnerships built on trust, excellence, and measurable success.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center mt-16 md:mt-24">
              <Image 
                src="/images/Chart_Presantation.png" 
                alt="Mission Image" 
                width={1000} 
                height={1000} 
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
