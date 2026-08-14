import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex flex-col md:block w-full bg-brand-charcoal md:bg-brand-champagne overflow-hidden">
      {/* Mobile Text Content (Top) */}
      <div className="md:hidden pt-12 pb-8 px-4 text-white">
        <h1 className="font-serif text-4xl font-medium leading-tight mb-4 tracking-wide">
          Everyday Elegance, Elevated.
        </h1>
        <p className="text-base text-gray-200 mb-8 font-light leading-relaxed">
          Premium fabrics. Exquisite craftsmanship. Designed to make you feel beautiful in every moment.
        </p>
        <div className="flex flex-col gap-4">
          <Link href="/shop?filter=new" className="bg-white text-brand-charcoal px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-brand-champagne transition-colors text-center">
            Shop New Arrivals
          </Link>
          <Link href="/shop?filter=best-seller" className="bg-transparent border border-white text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-brand-charcoal transition-colors text-center flex items-center justify-center gap-2">
            Explore Best Sellers
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Image (Bottom on mobile, Background on desktop) */}
      <div className="relative h-[60vh] md:h-[85vh] md:min-h-[600px] w-full">
        <Image
          src="/images/banners/hero.jpg"
          alt="Treasure Trove Traditional Wear, Elevated"
          fill
          priority
          className="object-cover object-top md:object-center"
        />
        {/* Desktop Overlay & Text */}
        <div className="hidden md:block absolute inset-0 bg-black/30" />
        <div className="hidden md:flex absolute inset-0 items-center">
          <div className="container mx-auto px-8">
            <div className="max-w-xl text-white">
              <h1 className="font-serif text-7xl font-medium leading-tight mb-6 tracking-wide">
                Everyday Elegance, Elevated.
              </h1>
              <p className="text-xl text-gray-200 mb-10 max-w-md font-light leading-relaxed">
                Premium fabrics. Exquisite craftsmanship. Designed to make you feel beautiful in every moment.
              </p>
              <div className="flex flex-row gap-4">
                <Link href="/shop?filter=new" className="bg-white text-brand-charcoal px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-brand-champagne transition-colors text-center">
                  Shop New Arrivals
                </Link>
                <Link href="/shop?filter=best-seller" className="bg-transparent border border-white text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-white hover:text-brand-charcoal transition-colors text-center flex items-center justify-center gap-2">
                  Explore Best Sellers
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
