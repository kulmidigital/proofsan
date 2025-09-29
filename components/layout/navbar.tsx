"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b shadow-sm"
          : "bg-transparent"
      }`}>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center'>
            <Image
              src='/logo.png'
              alt='Proofsan Logo'
              width={120}
              height={40}
              className={`h-10 w-auto transition-all duration-300 ${
                isScrolled ? "brightness-100" : "brightness-0 invert"
              }`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <a
              href='#services'
              className={`transition-colors hover:text-[#053d62] ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}>
              Services
            </a>
            <a
              href='#products'
              className={`transition-colors hover:text-[#053d62] ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}>
              Products
            </a>
            <a
              href='#benefits'
              className={`transition-colors hover:text-[#053d62] ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}>
              Benefits
            </a>
            <a
              href='#benefitsworkingwithus'
              className={`transition-colors hover:text-[#053d62] ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}>
              Why Us?
            </a>
            <a
              href='#contact'
              className={`transition-colors hover:text-[#053d62] ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}>
              Contact
            </a>
            <Button
              asChild
              className={`transition-colors ${
                isScrolled
                  ? "bg-[#053d62] hover:bg-[#053d62]/90 text-white"
                  : "bg-white hover:bg-gray-100 text-[#053d62]"
              }`}>
              <a href='mailto:info@proofsan.so'>Get Quote</a>
            </Button>
          </div>

          {/* Mobile Menu - Sheet */}
          <Sheet>
            <SheetTrigger asChild className='md:hidden'>
              <button className='p-2'>
                <div className='w-6 h-6 flex flex-col justify-center space-y-1'>
                  <div
                    className={`w-full h-0.5 transition-all ${
                      isScrolled ? "bg-[#053d62]" : "bg-white"
                    }`}></div>
                  <div
                    className={`w-full h-0.5 transition-all ${
                      isScrolled ? "bg-[#053d62]" : "bg-white"
                    }`}></div>
                  <div
                    className={`w-full h-0.5 transition-all ${
                      isScrolled ? "bg-[#053d62]" : "bg-white"
                    }`}></div>
                </div>
              </button>
            </SheetTrigger>
            <SheetContent
              side='right'
              className={`w-[320px] sm:w-[380px] p-0 ${
                isScrolled ? "bg-white" : "bg-white/98 backdrop-blur-md"
              }`}>
              {/* Header Section */}
              <div className='bg-gradient-to-r from-[#053d62] to-[#053d62]/90 text-white px-6 py-2'>
                <SheetTitle className='text-white text-2xl font-bold mb-2'>
                  Menu
                </SheetTitle>
              </div>

              {/* Navigation Items */}
              <div className='px-4 py-4 space-y-2'>
                <SheetClose asChild>
                  <a
                    href='#services'
                    className='flex items-center w-full p-4 text-left text-gray-700 hover:text-[#053d62] hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium text-lg group'>
                    <span className='flex-1'>Services</span>
                    <div className='w-2 h-2 bg-[#053d62] rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></div>
                  </a>
                </SheetClose>

                <SheetClose asChild>
                  <a
                    href='#products'
                    className='flex items-center w-full p-4 text-left text-gray-700 hover:text-[#053d62] hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium text-lg group'>
                    <span className='flex-1'>Products</span>
                    <div className='w-2 h-2 bg-[#053d62] rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></div>
                  </a>
                </SheetClose>

                <SheetClose asChild>
                  <a
                    href='#benefits'
                    className='flex items-center w-full p-4 text-left text-gray-700 hover:text-[#053d62] hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium text-lg group'>
                    <span className='flex-1'>Benefits</span>
                    <div className='w-2 h-2 bg-[#053d62] rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></div>
                  </a>
                </SheetClose>

                <SheetClose asChild>
                  <a
                    href='#contact'
                    className='flex items-center w-full p-4 text-left text-gray-700 hover:text-[#053d62] hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium text-lg group'>
                    <span className='flex-1'>Contact</span>
                    <div className='w-2 h-2 bg-[#053d62] rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></div>
                  </a>
                </SheetClose>
              </div>

              {/* CTA Section */}
              <div className='px-2 pb-8 mt-auto'>
                <div className='bg-gray-50 rounded-xl p-6 border border-gray-100'>
                  <h3 className='text-[#053d62] font-semibold text-lg mb-2'>
                    Ready to Get Started?
                  </h3>
                  <p className='text-gray-600 text-sm mb-4'>
                    Get expert consultation for your waterproofing needs
                  </p>
                  <Button
                    asChild
                    className='bg-[#053d62] hover:bg-[#053d62]/90 text-white w-full py-3 text-lg font-semibold rounded-lg shadow-sm'>
                    <a href='mailto:info@proofsan.so'>Get Free Quote</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}