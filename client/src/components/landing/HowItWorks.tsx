import { FileText, FileSearch, ListChecks, Download } from "lucide-react";

const steps = [
  {
    name: "Upload your resume once",
    description: "Simply upload your base resume and we'll handle the rest.",
    icon: FileText,
  },
  {
    name: "Paste the job description",
    description: "Add any job posting you're interested in applying for.",
    icon: FileSearch,
  },
  {
    name: "One-click optimization",
    description: "Get an ATS-friendly, keyword-optimized resume instantly.",
    icon: ListChecks,
  },
  {
    name: "Download your updated PDF",
    description: "Get your perfectly tailored resume ready to submit.",
    icon: Download,
  },
];

export const HowItWorks = () => {
  return (
    <div className="relative bg-slate-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-lg font-semibold text-transparent">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Four simple steps to your perfect resume
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {steps.map((step, stepIdx) => (
              <div key={step.name} className="relative flex flex-col items-start">
                <div className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-2">
                  <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="mt-4 flex items-center gap-x-2">
                  <div className="flex-none rounded-full bg-gray-700 p-1">
                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                  </div>
                  <p className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-sm font-medium text-transparent">Step {stepIdx + 1}</p>
                </div>
                <dt className="mt-4 font-semibold text-white">{step.name}</dt>
                <dd className="mt-2 leading-7 text-gray-300">{step.description}</dd>
                <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};