import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-50 py-16" id="home">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Professional Appliance Repair Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We provide reliable, fast, and affordable repair services for all your home appliances.
            Our experienced technicians are ready to help you get your appliances back to working order.
          </p>
          <a
            href="tel:+19874242881"
            className="inline-flex items-center space-x-2 bg-teal-500 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-teal-600 transition-colors shadow-lg"
          >
            <img
              src="https://ext.same-assets.com/3600845335/1555677543.svg"
              alt="Phone"
              className="w-5 h-5"
            />
            <span>Call Now for Service</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero