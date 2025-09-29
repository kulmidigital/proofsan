import Image from "next/image";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail, AiOutlineGlobal } from "react-icons/ai";
import { FiPhone, FiMapPin } from "react-icons/fi";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#053d62] text-white">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Proofsan Logo"
                width={120}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Complete range of high-performance waterproofing systems engineered
              to deliver lasting protection in demanding environments.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/ProofSan?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors"
              >
                <BsFacebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#products" className="hover:text-white transition-colors">DryTex® HB500</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">DryTex® CW400</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">DryTex CEM HB</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Hydroplug</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Wet Area Waterproofing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Wall Waterproofing Systems</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Industrial Roof Waterproofing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Container Waterproofing</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#benefitsworkingwithus" className="hover:text-white transition-colors">Why Us?</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <FiMapPin className="w-4 h-4 text-white flex-shrink-0 mt-1" />
                <span>Mogadishu, Somalia</span>
              </div>
              <div className="flex items-start space-x-3">
                <FiPhone className="w-4 h-4 text-white flex-shrink-0 mt-1" />
                <span>+254 719 543 569</span>
              </div>
              <div className="flex items-start space-x-3">
                <AiOutlineMail className="w-4 h-4 text-white flex-shrink-0 mt-1" />
                <span>info@proofsan.so</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-4 pt-4">
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Proofsan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}