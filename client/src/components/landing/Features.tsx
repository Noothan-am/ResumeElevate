import { FileText, Target, Key, Download } from "lucide-react";

const features = [
  {
    name: "One-Click Resume Updates",
    description: "Instantly adjust your resume to match any job description with a single click, saving hours of manual editing.",
    icon: FileText,
  },
  {
    name: "ATS Optimization Built-In",
    description: "Ensure your resume passes through Applicant Tracking Systems with our intelligent keyword optimization technology.",
    icon: Key,
  },
  {
    name: "Tailored Suggestions That Work",
    description: "Get actionable recommendations to improve your resume's effectiveness for specific roles and industries.",
    icon: Target,
  },
  {
    name: "Ready-to-Use PDFs",
    description: "Download your perfectly formatted, ATS-friendly resume instantly - no manual formatting needed.",
    icon: Download,
  },
];

export const Features = () => {
  return (
    <div className="relative bg-slate-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative z-10 sm:text-center">
          <h2 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-lg font-semibold text-transparent">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything you need to land that job</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Our AI-powered platform provides all the tools you need to create a winning resume that stands out from the crowd.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 rounded-2xl border border-gray-800 bg-gray-900/50 p-8 backdrop-blur-sm transition-all hover:border-gray-700 hover:bg-gray-800/50 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-white">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-300">{feature.description}</p>
                </div>
                <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};