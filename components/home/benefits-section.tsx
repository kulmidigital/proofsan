import { BsShield, BsWrench, BsPeople } from "react-icons/bs";
import { AiOutlineDollar, AiOutlineGlobal } from "react-icons/ai";

const benefits = [
  {
    text: "Prevents leaks and moisture penetration",
    icon: BsShield
  },
  {
    text: "Protects against cracks and structural deterioration",
    icon: BsShield
  },
  {
    text: "Minimizes costly repairs and ongoing maintenance",
    icon: AiOutlineDollar
  },
  {
    text: "Shields interiors from mold and health risks",
    icon: BsShield
  },
  {
    text: "Ensures durability in challenging weather conditions",
    icon: BsShield
  }
];

const applications = [
  "Roofs and terraces",
  "Foundations and basements",
  "Water tanks and swimming pools",
  "Bathrooms, kitchens, and wet areas",
  "Balconies, podiums, and decks",
  "Parking areas and industrial floors",
  "Retaining walls, tunnels, and substructures"
];

const features = [
  {
    title: "Leading Brand",
    description: "Advanced waterproofing solutions with proven track record",
    icon: BsShield
  },
  {
    title: "Expert Team",
    description: "Experienced professionals dedicated to quality and customer satisfaction",
    icon: BsPeople
  },
  {
    title: "Innovative Protection",
    description: "Long-lasting systems engineered for maximum performance",
    icon: BsWrench
  },
  {
    title: "Eco-Conscious",
    description: "Cost-efficient solutions with environmental responsibility",
    icon: AiOutlineGlobal
  }
];

export function BenefitsSection() {
  return (
    <section id="benefits" className='py-8 md:py-12 bg-[#053d62] relative overflow-hidden'>
      <div className='absolute inset-0 opacity-5'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}></div>
      </div>

      <div className='container mx-auto px-4 relative'>
        <div className='text-left md:text-center mb-16 lg:mb-20'>
          <h2 className='text-xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight'>
            Why Proofsan Waterproofing Systems are Essential
          </h2>
          <p className='text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            Whether you need premium waterproofing products or professional installation services,
            trust Proofsan to secure the future of your structure.
          </p>
        </div>

        <div className='mb-20 lg:mb-24'>
          <div className='text-center mb-12'>
            <h3 className='text-2xl md:text-3xl font-semibold text-white mb-4'>
              Key Benefits
            </h3>
            <div className='w-24 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6'>
            {benefits.map((benefit, index) => (
              <div key={index} className='group'>
                <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 h-full hover:bg-white/15 transition-all duration-300 hover:scale-105'>
                  <div className='flex items-start space-x-4'>
                    <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                      <benefit.icon className='w-6 h-6 text-white' />
                    </div>
                    <p className='text-gray-300 leading-relaxed flex-1'>
                      {benefit.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 mb-20'>
          <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden'>
            <div className='bg-gradient-to-r from-white/10 to-transparent p-6 md:p-8 border-b border-white/10'>
              <h3 className='text-2xl md:text-3xl font-bold text-white mb-2'>
                Areas of excellence
              </h3>
              <p className='text-gray-300 text-sm'>
                Comprehensive coverage across all areas
              </p>
            </div>
            <div className='p-6 md:p-8'>
              <div className='space-y-4'>
                {applications.map((application, index) => (
                  <div key={index} className='flex items-start space-x-3 group'>
                    <div className='flex-shrink-0 w-2 h-2 bg-white/60 rounded-full mt-2 group-hover:bg-white transition-colors duration-200'></div>
                    <span className='text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-200'>
                      {application}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden'>
            <div className='bg-gradient-to-r from-white/10 to-transparent p-6 md:p-8 border-b border-white/10'>
              <h3 className='text-2xl md:text-3xl font-bold text-white mb-2'>
                Why Choose Proofsan?
              </h3>
              <p className='text-gray-300 text-sm'>
                Excellence in every aspect of waterproofing
              </p>
            </div>
            <div className='p-6 md:p-8 space-y-6'>
              {features.map((feature, index) => (
                <div key={index} className='flex items-start space-x-4 group'>
                  <div className='flex-shrink-0 w-14 h-14 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300'>
                    <feature.icon className='w-7 h-7 text-white' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors'>
                      {feature.title}
                    </h4>
                    <p className='text-gray-300 leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}