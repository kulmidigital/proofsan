import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const featuredProducts = [
  {
    name: "DryTex P2000",
    description:
      "High-performance, solvent-free polyurethane protective coating for seamless, UV-stable roof and surface waterproofing with excellent abrasion, impact, and chemical resistance.",
    applications: [
      "Thoroughly mix DRYTEX P2000 before use",
      "Apply by brush, roller, or airless spray; apply second coat if required",
      "Apply successive coats perpendicular to the previous coat for uniform coverage",
      "Ensure surfaces are uniformly coated and free from voids, pinholes, and blisters",
      "Allow each coat to dry tack-free before the next (minimum 4 hours)",
    ],
    features: [
      "High resistance to abrasion",
      "High resistance to impact",
      "Chemical resistance",
      "Impermeability to liquids",
      "Crack-bridging",
      "Slip resistance",
      "Electrical conductivity",
      "Weather stability and colour fastness",
      "Easy cleaning and care",
      "Good leveling",
      "UV resistant",
      "Low VOC",
    ],
  },
  {
    name: "DryTex CEM 2P",
    description:
      "Acrylic polymer-modified, flexible elastomeric cementitious waterproofing for positive and negative side protection of concrete and masonry.",
    applications: [
      "Wet the surface with water prior to application for optimal bonding",
      "Apply by brush, roller, or spray; first coat by brush for optimal adhesion",
      "High-build up to 2000 microns wet in one application",
      "Prefer two or more coats for quicker stage cures depending on weather",
      "Thicker applications require longer cure times",
    ],
    features: [
      "Bridges substrate cracks up to 2 mm",
      "Crack-resistant with superior flexibility",
      "Superior freeze/thaw resistance",
      "Excellent resistance to salts, acids, alkalis, and other chemicals",
      "Effective protection against acid rain",
      "Self-curing and breathable",
      "Resistant to UV exposure",
      "Continuous water immersion possible; ideal for swimming pools",
      "Superior negative and positive waterproofing",
      "Non-toxic and suitable for potable water",
      "Resistant to carbon dioxide and chloride ions",
      "Protection against acidic gases and alkalis",
    ],
  },
  {
    name: "Dry Tex CEM HB",
    description:
      "High-build cementitious waterproofing membrane with superior flexibility and chemical resistance for durable negative and positive waterproofing.",
    applications: [
      "Apply by brush, roller, or spray (first coat by brush for optimal adhesion)",
      "High-build up to 2000 microns wet in one application",
      "Prefer building membrane in two or more coats for quicker stage cures",
      "Note: Thicker applications require longer cure times",
    ],
    features: [
      "UV resistant",
      "Crack resistant with superior flexibility",
      "Superior freeze/thaw resistance",
      "Excellent resistance to salts, acids, alkalis, and other chemicals",
      "Effective protection against acid rain",
      "Self-curing and breathable",
      "Superior negative and positive waterproofing",
      "Continuous water immersion possible; ideal for swimming pools",
      "Suitable for potable water applications",
    ],
  },
  {
    name: "DRYBITUMEX R 650",
    description:
      "Rubberized bituminous waterproof and damp-proof coating with thixotropic performance that cures to a tough, highly flexible, seamless membrane. Cold-applied by brush, roller, trowel, or spray for air, vapor, and water protection on multiple substrates.",
    applications: [
      "Damp-proofing below-grade structures",
      "Waterproofing/damp-proofing of masonry, concrete, gypsum board, and wood",
      "Air, vapor and rain barrier for construction surfaces",
      "Protection of foundations, columns, and beams",
      "Waterproofing and vapor/air protection for retaining walls and facades",
      "Adhesive for wood blocks, wood mosaics, and polystyrene insulation boards",
      "Waterproofing for interior and exterior walls and wet areas",
      "Protection of substructures, superstructures, and manholes from corrosive soils",
    ],
    features: [
      "Forms a jointless membrane after curing",
      "Flexible, elastomeric, damage-resistant rubber-like film",
      "Single-component, cold-applied and ready to use",
      "Excellent adhesion to most building substrates",
      "Acts as an efficient curing membrane for fresh concrete",
      "Asbestos-free and non-hazardous",
      "Can be applied on damp substrates",
      "Excellent chemical resistance (chlorides, sulphates, acids, alkalis)",
      "Environmentally friendly; no flame hazard",
      "Prevents fungal growth",
      "Dual advantage: curing and long-term protection of concrete",
      "Water-based, ultra-low VOC, LEED compliant",
      "Crack-bridging up to 2 mm",
      "UV exposure resistance (minimum 1 year)",
      "Conforms to ASTM D1227 Type III Class I; ASTM D3747 Type I; BS 3416 Type 1; BS 3690 Part 2",
    ],
  },
  {
    name: "INGUARD",
    description:
      "Penetrating protective sealer for concrete and masonry. Details to be confirmed.",
    applications: [
      "Retaining walls",
      "Precast concrete elements",
      "External renderings",
      "Basement renderings",
      "Water treatment plants",
      "Elevator pits",
      "Tanks",
      "Tunnels",
      "Dams",
      "Potable water tanks",
      "Waste water tanks",
      "Swimming pools",
      "Water features",
    ],
    features: [
      "Avoids water condensation; allows passage of air",
      "Resistant to aggressive chemicals",
      "Non-toxic; recommended for potable water tanks",
      "Increases concrete strength and lifetime",
      "Effective against positive and negative water pressure",
      "Barrier to penetration of water and chemical agents from any direction",
      "Becomes an integral part of the concrete",
      "Negligible influence on air entrainment",
      "Not a vapor barrier – allows concrete to breathe",
      "No corrosive effect on reinforcing metal",
    ],
  },
  {
    name: "HIGHBOND SBR",
    description:
      "Styrene-butadiene rubber (SBR) latex bonding agent and mortar modifier. Details to be confirmed.",
    applications: [
      "Dampen hot, exposed or very absorbent surfaces prior to application or prime with 1:8 (SBR:water)",
      "Use washed aggregate and sand gradation matching mortar thickness and finish",
      "Compatible with manual mixing or rotating-blade mixers; minimize agitation to avoid entrained air",
      "Apply bonding primer 1:1 (HIGHBOND SBR:Water) and place fresh mortar wet-on-wet",
      "For water-resisting renders, apply two priming coats at right angles; minimum 1.5 mm thickness",
    ],
    features: [
      "Increases durability and flexibility",
      "Ensures bonding of floor toppings, renders and repairs",
      "Reduces shrinkage and cracking",
      "High resistance to water penetration",
      "Good abrasion resistance and proven performance",
      "Resistant to many chemicals, frost, salt and mineral oil",
      "Excellent adhesion to steel and concrete",
      "Adheres to brick, glass, asphalt, wood, expanded polystyrene, etc.",
      "Prolonged corrosion protection",
      "Thermal expansion and modulus similar to concrete (unlike resin mortars/primers)",
      "Non-toxic; suitable for potable water applications",
    ],
  },
  {
    name: "Corust GUARD HB",
    description:
      "High-build anti-corrosive protective coating. Details to be confirmed.",
    applications: [
      "Most sound substrates including concrete, wood, and metal floors",
      "Restoration of deteriorated steel and concrete structures",
      "High-build undercoat or sheen finish for steel and concrete",
      "Marine and sewage works; warehouse storage and industrial factory areas",
      "Anti-corrosion coating for steel in heavy-duty, food processing, sewage, farms, agricultural, chemical, oil & gas, beverage, and marine industries",
      "Protection of silos, steel bridges, iron roofs, pipes, fences, etc.",
      "Prevents ingress of water vapor during service life",
      "Horizontal and vertical damp-proof applications with high puncture and tear resistance",
    ],
    features: [
      "Excellent resistance to a wide range of chemicals",
      "High strength, durable, and superior abrasion resistance",
      "User-friendly; no noxious emissions during application",
      "Anti-corrosive and anti-rust protection for iron and steel",
      "Antimicrobial; inhibits up to 99.99% of bacteria",
      "Designed for heavy domestic or light industrial use",
      "VOC less than 50 g/L",
    ],
  },
  {
    name: "ALLWELD",
    description:
      "High-strength structural adhesive/anchoring system. Details to be confirmed.",
    applications: [
      "Watertight sealing of penetrations, laps, joints, and voids",
      "Roofing systems: polyurethane foam, EPDM, TPO, PVC, bituminous membranes, PP",
      "Instant bonding/repair of construction materials (cement, wood, drywall, ceramic, foamboard, metal, fiber marble, plastic, vinyl, brick, stone, granite)",
      "HVAC sealing and repairs; marine and automotive applications",
      "Paneling installation; sealing showers, pipes, baths; countertops and cabinets",
      "Window and door installation and sealing; masonry sealing; wall stone installation",
      "Pool tile fixing and repairs; underwater sealing, bonding and repairs",
      "Horizontal and vertical applications; wide application temperature 2°C to 50°C",
      "Ready-to-use by brush, roller, or trowel; standard caulking gun cartridges",
    ],
    features: [
      "Outstanding adhesion; bonds virtually all materials",
      "Faster, tougher with excellent adhesion",
      "Creates a tough, durable watertight seal for roofing and waterproofing",
      "Instantly bonds, seals, and repairs",
      "Low VOC, non-toxic, environmentally compliant",
      "Ideal for seam and roofing repair",
      "Water-borne; abrasion resistant",
      "Mildew resistant; energy-saving characteristics",
      "Superior weather resistance; UV and chemical resistant",
      "Accommodates high substrate/structure movement",
      "Skins over and suits various substrates",
      "Energy Star rated; saves energy",
      "Resistant to ponding water; bonds under water",
      "Health friendly; Green building construction grade",
      "Paintable and cleanable",
    ],
  },
];

export function ProductsSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: featuredProducts.map((product, index) => ({
      "@type": "Product",
      name: product.name,
      description: product.description,
      application: (product.applications ?? []).join(", "),
      brand: {
        "@type": "Brand",
        name: "Proofsan",
      },
    })),
  };

  return (
    <section id='products' className='py-4 md:py-12 bg-white'>
      <script
        type='application/ld+json'
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
                  {product.applications && product.applications.length > 0 && (
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
                  )}
                  {product.features && product.features.length > 0 && (
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
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
