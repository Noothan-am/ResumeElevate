import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Glowing orbs in background */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-500/30 blur-[100px]" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/30 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-32">
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center">
          <h1 className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            One-Click Resume Customization
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              for Every Job Application
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Save time and stand out with an ATS-optimized resume tailored to any
            job description in seconds.
          </p>
          <div className="mt-10">
            <Button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-6 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-blue-500/25">
              Customize My Resume Now
              <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-white/20 transition-opacity opacity-0 group-hover:opacity-100" />
            </Button>
          </div>

          {/* Floating mockup */}
          <div className="mt-20 w-full max-w-4xl animate-float">
            <div className="relative rounded-lg bg-white/10 backdrop-blur-lg p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="h-4 w-3/4 rounded bg-white/20"></div>
                <div className="h-4 w-1/2 rounded bg-white/20"></div>
                <div className="h-4 w-5/6 rounded bg-white/20"></div>
                <div className="h-4 w-2/3 rounded bg-white/20"></div>
              </div>
              <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-blue-500/30 blur-2xl" />
              <div className="absolute -bottom-3 -left-3 h-24 w-24 rounded-full bg-purple-500/30 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
