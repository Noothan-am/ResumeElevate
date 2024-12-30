import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="relative bg-slate-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 flex flex-col space-y-8 md:flex-row md:items-center md:justify-between md:space-y-0 lg:px-8">
        <div className="flex flex-col items-center md:items-start md:order-1">
          <p className="text-center md:text-left text-xs leading-5 text-gray-400">
            &copy; 2024 Resume Builder. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start md:order-2">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <a href="#" className="text-gray-400 transition-colors hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 transition-colors hover:text-gray-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 transition-colors hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
        <div className="w-full md:w-auto md:order-3">
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0">
            <Input
              type="email"
              placeholder="Get weekly career tips"
              className="min-w-0 flex-auto border-gray-800 bg-gray-900/50 text-white backdrop-blur-sm placeholder:text-gray-400"
            />
            <Button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
};