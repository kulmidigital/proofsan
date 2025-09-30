import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BsCheckCircle, BsCalendarEvent, BsEmojiSmile } from "react-icons/bs";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#053d62] via-[#053d62]/90 to-[#042a40] pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/magical.jpg"
          alt="Waterproofing Solutions Background"
          fill
          className="object-cover opacity-15"
          priority
        />
      </div>

      <div className="relative z-10 text-white px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight text-white">
                Proofsan
              </h1>
              <div className="text-xl md:text-2xl lg:text-3xl font-medium text-white leading-tight">
                Products & Waterproofing Services
              </div>
            </div>

            <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/90 font-light max-w-xl">
              Premium waterproofing products and professional installation services, delivering
              complete solutions for lasting protection in all environments.
            </p>

            <div className="flex justify-center lg:justify-start">
              <a href="mailto:info@proofsan.com">
                <Button
                  size="lg"
                  className="bg-white text-[#053d62] hover:bg-white/90 hover:scale-105 text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300"
                >
                  Get Quote
                </Button>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="relative">

              <div className="space-y-8">

                <div className="flex items-center group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <BsCheckCircle className="w-8 h-8 text-[#053d62]" />
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="text-3xl font-bold text-white mb-1">500+</div>
                      <div className="text-sm text-white/80 font-medium">Projects Completed</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center group ml-12">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-white/30 to-white/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                    <BsCalendarEvent className="w-6 h-6 text-[#053d62]" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                      <div className="text-2xl font-bold text-white mb-1">15+</div>
                      <div className="text-xs text-white/70 font-medium">Years Experience</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center group ml-20">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-white/30 to-white/10 rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                    <BsEmojiSmile className="w-5 h-5 text-[#053d62]" />
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="bg-white/5 backdrop-blur-sm rounded-md p-2 border border-white/10">
                      <div className="text-xl font-bold text-white mb-0.5">100%</div>
                      <div className="text-xs text-white/70 font-medium">Satisfaction</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
