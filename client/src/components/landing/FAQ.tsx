import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How secure is my data?",
    answer: "Your data security is our top priority. We use enterprise-grade encryption to protect your information, and we never share your data with third parties without your explicit consent.",
  },
  {
    question: "What is ATS optimization?",
    answer: "ATS (Applicant Tracking System) optimization ensures your resume contains the right keywords and format to pass through automated screening systems used by employers. Our platform automatically optimizes your resume for these systems.",
  },
  {
    question: "Can I customize for multiple job descriptions?",
    answer: "Yes! You can customize your resume for as many different job descriptions as you want. Our Pro plan includes unlimited optimizations to help you apply to multiple positions.",
  },
  {
    question: "How long does the optimization process take?",
    answer: "The entire process takes just seconds. Upload your resume, paste the job description, and get your optimized version instantly - no waiting required.",
  },
];

export const FAQ = () => {
  return (
    <div className="relative bg-slate-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-lg font-semibold text-transparent">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-800 bg-white/5 backdrop-blur-lg rounded-lg px-4"
              >
                <AccordionTrigger className="text-left text-white hover:text-blue-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};