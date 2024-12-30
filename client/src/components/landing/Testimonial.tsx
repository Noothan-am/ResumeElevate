import { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Search and find your dream job is now easier than ever. Just browse a job and apply if you need to.",
    author: "Mas Parjono",
    position: "UI Designer at Google",
  },
  {
    quote:
      "The platform made job hunting a breeze. Found my dream role in just weeks!",
    author: "Sarah Chen",
    position: "Frontend Developer at Meta",
  },
];

export const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-400 rounded-[2rem] p-8 text-white relative overflow-hidden h-full flex flex-col justify-between">
      <div className="relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">
          What's our
          <br />
          Jobseekers Said.
        </h2>

        <div className="mb-8 md:mb-12">
          <blockquote className="text-base md:text-lg mb-4 md:mb-6">
            "{testimonials[currentIndex].quote}"
          </blockquote>

          <div>
            <h3 className="text-lg font-semibold">
              {testimonials[currentIndex].author}
            </h3>
            <p className="text-white/80">
              {testimonials[currentIndex].position}
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={previous}
            className="p-2 md:p-3 rounded-xl bg-white text-blue-400 hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            onClick={next}
            className="p-2 md:p-3 rounded-xl bg-white text-blue-400 hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-2xl p-6 relative">
        <div className="absolute -top-4 right-6 bg-white rounded-full p-3">
          <Sparkles className="w-8 h-8 text-blue-400" />
        </div>
        <div className="mt-4">
          <h4 className="text-lg md:text-xl font-bold mb-2 text-gray-800">
            Get your right job and right place apply now
          </h4>
          <p className="text-sm md:text-base text-gray-600">
            Be among the first founders to experience the easiest way to start
            run a business.
          </p>
        </div>
      </div>
    </div>
  );
};
