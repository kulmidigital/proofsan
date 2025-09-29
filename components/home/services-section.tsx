import Image from "next/image";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const serviceCategories = [
  {
    title: "Wet Area Waterproofing",
    description: "Specially designed for kitchens, bathrooms, and internal moisture-heavy zones. Creates an impenetrable shield that prevents seepage through floors and walls.",
    image: "/bathroom-painting.jpg",
    features: ["Moisture Protection", "Seamless Finish", "Long-lasting"]
  },
  {
    title: "Wall Waterproofing Systems",
    description: "Advanced wall coating solutions that provide superior protection against moisture penetration and weather damage for interior and exterior walls.",
    image: "/wall-painting.jpg",
    features: ["Wall Protection", "Weather Resistant", "Durable Finish"]
  },
  {
    title: "Industrial Roof Waterproofing",
    description: "Moisture control, insulation, and acoustic comfort come together in Industrial roof Waterproofing. Extends building life and enhances energy efficiency.",
    image: "/top-floor-painting.jpg",
    features: ["Weather Resistant", "Energy Efficient", "Long-lasting"]
  },
  {
    title: "Container Waterproofing",
    description: "Specialized waterproofing solutions for water tanks, containers, and cylindrical structures using advanced coating technologies.",
    image: "/cylinder-painting.jpg",
    features: ["Tank Protection", "Chemical Resistant", "Structural Integrity"]
  }
];

export function ServicesSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": serviceCategories.map((service, index) => ({
      "@type": "Service",
      "name": service.title,
      "description": service.description,
      "provider": {
        "@type": "Organization",
        "name": "Proofsan"
      }
    }))
  };

  return (
    <section id="services" className='py-8 md:py-12 bg-white'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className='container mx-auto px-4'>
        <div className='text-center mb-4 md:mb-12'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#053d62]'>
            Our Services
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {serviceCategories.map((category, index) => (
            <Card
              key={index}
              className='overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group'>
              <div className='relative h-56 overflow-hidden'>
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
              </div>
              <div className='p-6'>
                <CardTitle className='text-xl text-[#053d62] mb-3'>
                  {category.title}
                </CardTitle>
                <CardDescription className='mb-4 leading-relaxed'>
                  {category.description}
                </CardDescription>
                <div className='flex flex-wrap gap-2'>
                  {category.features.map((feature, idx) => (
                    <Badge
                      key={idx}
                      variant='secondary'
                      className='bg-[#053d62]/10 text-[#053d62] hover:bg-[#053d62]/20'>
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className='mt-16'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
            <div className='bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 text-center hover:scale-105 transition-transform duration-300'>
              <img
                src='/organix-paint.jpg'
                alt='Waterproofing Services'
                className='w-full h-32 object-cover rounded-lg mb-3'
              />
              <h4 className='text-sm font-semibold text-[#053d62]'>
                Quality Coatings
              </h4>
            </div>
            <div className='bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 text-center hover:scale-105 transition-transform duration-300'>
              <img
                src='/organix-paint-bucket.jpg'
                alt='Industrial Services'
                className='w-full h-32 object-cover rounded-lg mb-3'
              />
              <h4 className='text-sm font-semibold text-[#053d62]'>
                Industrial Solutions
              </h4>
            </div>
            <div className='bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 text-center hover:scale-105 transition-transform duration-300'>
              <img
                src='/wall-painting2.jpg'
                alt='Wall Services'
                className='w-full h-32 object-cover rounded-lg mb-3'
              />
              <h4 className='text-sm font-semibold text-[#053d62]'>
                Wall Solutions
              </h4>
            </div>
            <div className='bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4 text-center hover:scale-105 transition-transform duration-300'>
              <img
                src='/floor-painting2.jpg'
                alt='Floor Services'
                className='w-full h-32 object-cover rounded-lg mb-3'
              />
              <h4 className='text-sm font-semibold text-[#053d62]'>
                Floor Solutions
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}