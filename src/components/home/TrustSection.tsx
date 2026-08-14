import { TrustBadge } from "@/components/ui/TrustBadge";
import { Shield, Droplets, Sparkles, Gem } from "lucide-react";

export function TrustSection() {
  const trusts = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Premium Fabrics",
      description: "Soft, breathable, and luxurious.",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Easy Care",
      description: "Made for everyday wear.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Skin Friendly",
      description: "Comfortable for sensitive skin.",
    },
    {
      icon: <Gem className="w-6 h-6" />,
      title: "Everyday Luxury",
      description: "Premium style without the premium price.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {trusts.map((trust, idx) => (
            <TrustBadge key={idx} {...trust} />
          ))}
        </div>
      </div>
    </section>
  );
}
