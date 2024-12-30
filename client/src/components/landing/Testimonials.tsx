import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    content: "This platform helped me land interviews at 3 top tech companies! The one-click optimization saved me hours of work per application.",
    author: "Sarah Johnson",
    role: "Software Engineer at Google",
  },
  {
    content: "I was amazed by how quickly I could customize my resume for different roles. Landed my dream job after just 2 weeks of using this tool!",
    author: "Michael Chen",
    role: "Product Manager at Microsoft",
  },
  {
    content: "The ATS optimization feature is a game-changer. I got more callbacks in one month than I did in six months of job hunting before.",
    author: "Emily Rodriguez",
    role: "Marketing Director at Adobe",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative bg-slate-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-lg font-semibold text-transparent">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            See what our users are saying
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <div className="relative overflow-hidden rounded-xl bg-white/5 p-6 backdrop-blur-lg shadow-lg ring-1 ring-white/10">
            <Quote className="absolute right-6 top-6 h-8 w-8 text-gray-500" />
            <div className="relative">
              <p className="text-lg leading-8 text-gray-300">
                {testimonials[currentIndex].content}
              </p>
              <div className="mt-6">
                <p className="font-semibold text-white">{testimonials[currentIndex].author}</p>
                <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={previous}
              className="h-8 w-8 rounded-full border-gray-700 bg-gray-800/50 hover:bg-gray-700/50"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="h-8 w-8 rounded-full border-gray-700 bg-gray-800/50 hover:bg-gray-700/50"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};