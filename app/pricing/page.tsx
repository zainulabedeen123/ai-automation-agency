import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingTiers } from "@/components/pricing/PricingTiers";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { PricingCTA } from "@/components/pricing/PricingCTA";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";

export default function PricingPage() {
  return (
    <main className="pt-20">
      <PricingHero />
      <PricingTiers />
      <ComparisonTable />
      <PricingFAQ />
      <PricingCTA />
    </main>
  );
} 
