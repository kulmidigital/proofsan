import { BsBox, BsCheckCircle, BsPeople, BsClock } from "react-icons/bs";
import { MdFactory } from "react-icons/md";

const services = [
  {
    title: "Wide Range of Products",
    description: "Offers a diverse selection to meet specifications and preferences, providing customers with optimal solutions and enhanced profitability.",
    icon: BsBox,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Factory Direct Pricing",
    description: "Supplies products directly from the manufacturer, reducing costs and improving procurement efficiency.",
    icon: MdFactory,
    color: "from-green-500 to-green-600"
  },
  {
    title: "Quality Assurance",
    description: "Ensures all products meet stringent quality standards before delivery, guaranteeing reliability and customer satisfaction.",
    icon: BsCheckCircle,
    color: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Expert Support",
    description: "A dedicated team provides guidance on selecting the most suitable products, continuously aligning offerings with global quality standards.",
    icon: BsPeople,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Timely Delivery",
    description: "Maintains realistic timelines by partnering with dependable manufacturers and suppliers, while keeping customers informed about lead times.",
    icon: BsClock,
    color: "from-orange-500 to-orange-600"
  }
];

export function BenefitsWorkingWithUs() {
  return (
    <section id="benefitsworkingwithus" className='py-8 md:py-12 bg-gradient-to-br from-gray-50 to-white relative'>
      <div className='absolute inset-0 opacity-30'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(5,61,98,0.05) 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, rgba(5,61,98,0.05) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}></div>
      </div>

      <div className='container mx-auto px-4 relative'>
        <div className='text-center mb-4 md:mb-12'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#053d62] leading-tight'>
            Why Choose Us?
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8'>
          {services.map((service, index) => (
            <div key={index} className='group h-full'>
              <div className='bg-white rounded-3xl p-8 h-full shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#053d62]/20 transition-all duration-300 hover:-translate-y-2'>
                {/* Header with Icon and Title */}
                <div className='flex items-center space-x-3 mb-6'>
                  <div
                    className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <service.icon className='w-6 h-6 text-white' />
                  </div>
                  <h3 className='text-lg md:text-xl font-bold text-[#053d62] group-hover:text-[#053d62]/80 transition-colors leading-tight flex-1'>
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className='text-gray-600 leading-relaxed text-base md:text-lg'>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}