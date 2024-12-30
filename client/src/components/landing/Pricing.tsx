import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Free Trial",
    id: "tier-free",
    price: "$0",
    description: "Perfect for testing our platform",
    features: [
      "3 resume optimizations",
      "Basic ATS keywords",
      "PDF downloads",
      "Email support",
    ],
    cta: "Start Free Trial",
    mostPopular: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    price: "$19",
    description: "For serious job seekers",
    features: [
      "Unlimited optimizations",
      "Advanced ATS optimization",
      "Priority support",
      "Multiple resume versions",
      "Real-time job matching",
    ],
    cta: "Get Started",
    mostPopular: true,
  },
];

export const Pricing = () => {
  return (
    <div className="relative bg-slate-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-lg font-semibold text-transparent">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, transparent pricing
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-800 bg-gray-900/50 p-8 backdrop-blur-sm transition-all hover:border-gray-700 hover:bg-gray-800/50 xl:p-10 ${
                tier.mostPopular ? "relative" : ""
              }`}
            >
              {tier.mostPopular && (
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl" />
              )}
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-white">{tier.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">{tier.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-300">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-blue-400" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                className={`mt-8 w-full ${
                  tier.mostPopular
                    ? "relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                {tier.cta}
                {tier.mostPopular && (
                  <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};