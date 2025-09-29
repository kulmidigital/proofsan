import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const featuredProducts = [
  {
    name: "DryTex® HB500",
    description: "High-build waterproofing and protection system designed for exposed structures. Forms a seamless and elastic coating that protects against rain, UV rays, and surface cracks.",
    applications: ["Concrete roofs and terraces", "Parapet walls and podiums", "Bridges, tanks, and industrial structures", "Exposed concrete areas needing durable protection"],
    features: ["Seamless and fully bonded finish", "Excellent flexibility to accommodate surface movements", "Resistant to weathering and UV degradation", "Long-lasting protection with minimal maintenance"]
  },
  {
    name: "DryTex® CW400",
    description: "Crystalline waterproofing technology that transforms concrete into a self-sealing barrier. By filling pores and capillaries within the surface, it provides deep and lasting protection.",
    applications: ["Foundations and basements", "Tunnels and subways", "Water tanks and reservoirs", "Swimming pools and podium slabs"],
    features: ["Integral waterproofing effect from within the concrete", "Long-term resistance to water ingress", "Ability to seal micro-cracks over time", "Works under both positive and negative water pressure"]
  },
  {
    name: "DryTex CEM HB",
    description: "High-build flexible cementitious waterproofing system that combines toughness with flexibility, making it ideal for surfaces exposed to stress and moisture.",
    applications: ["Bathrooms, kitchens, and wet areas", "Balconies and terraces", "Retaining walls and water tanks", "Basements and foundations"],
    features: ["Dual protection of cement-based strength and flexibility", "Effective crack-bridging capability", "Smooth, protective finish", "Durable barrier against water penetration"]
  },
  {
    name: "Hydroplug",
    description: "Instant water-stop compound specially developed for emergency use. It rapidly sets to block active water leaks and seepages.",
    applications: ["Basement leak repairs", "Water tanks and manholes", "Tunnels and retaining structures", "Active leak areas in concrete and masonry"],
    features: ["Extremely fast setting time", "Effective even under running water conditions", "Strong and durable sealing performance", "Easy to apply for immediate results"]
  }
];

export function ProductsSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": featuredProducts.map((product, index) => ({
      "@type": "Product",
      "name": product.name,
      "description": product.description,
      "application": product.applications.join(", "),
      "brand": {
        "@type": "Brand",
        "name": "Proofsan"
      }
    }))
  };

  return (
    <section id="products" className='py-4 md:py-12 bg-white'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className='container mx-auto px-4'>
        <div className='text-center mb-4 md:mb-12'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#053d62]'>
            Featured Products
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8'>
          {featuredProducts.map((product, index) => (
            <Card
              key={index}
              className='h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
              <div className='p-6'>
                <CardTitle className='text-xl text-[#053d62] mb-3'>
                  {product.name}
                </CardTitle>
                <CardDescription className='mb-6 leading-relaxed'>
                  {product.description}
                </CardDescription>
                <div className='space-y-4'>
                  <div>
                    <h4 className='font-semibold text-[#053d62] mb-3 text-sm uppercase tracking-wide'>
                      Applications
                    </h4>
                    <ul className='text-gray-600 space-y-1'>
                      {product.applications.map((app, idx) => (
                        <li key={idx} className='flex items-center'>
                          <div className='w-1.5 h-1.5 bg-[#053d62] rounded-full mr-2'></div>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold text-[#053d62] mb-3 text-sm uppercase tracking-wide'>
                      Key Features
                    </h4>
                    <ul className='text-gray-600 space-y-1'>
                      {product.features.map((feature, idx) => (
                        <li key={idx} className='flex items-center'>
                          <div className='w-1.5 h-1.5 bg-[#053d62] rounded-full mr-2'></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}