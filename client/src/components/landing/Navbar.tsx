import { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { LoginForm } from "@/components/landing/LoginForm";
import { SignupForm } from "@/components/landing/SignupForm";
import { Testimonial } from "@/components/landing/Testimonial";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className="glass-panel bg-white/15 rounded-full px-6 py-4 flex items-center justify-between shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full"></div>
          <span className="text-xl font-semibold text-white">
            ResumeElevate
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-white hover:text-primary transition-colors font-medium"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-white hover:text-primary transition-colors font-medium"
          >
            Pricing
          </a>
          <a
            href="#about"
            className="text-white hover:text-primary transition-colors font-medium"
          >
            About
          </a>

          <div className="flex gap-4">
            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-400 to-purple-400 hover:opacity-90">
                  Sign In
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[85vw] max-w-6xl max-h-[90vh] overflow-y-auto glass-panel bg-white/15  p-4 md:p-8 border-none">
                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                  <div className="flex items-center justify-center">
                    <LoginForm onClose={() => setIsLoginOpen(false)} />
                  </div>
                  <div className="hidden md:flex items-center">
                    <Testimonial />
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-400 to-purple-400 hover:opacity-90">
                  Sign Up
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[85vw] max-w-6xl max-h-[90vh] overflow-y-auto glass-panel bg-white/15  p-4 md:p-8 border-none">
                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                  <div className="flex items-center justify-center">
                    <SignupForm onClose={() => setIsSignupOpen(false)} />
                  </div>
                  <div className="hidden md:flex items-center">
                    <Testimonial />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <button
          className="md:hidden p-2 hover:bg-neutral-200/50 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          className="md:hidden glass-panel bg-white/40 mt-2 rounded-xl p-4 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-4">
            <a
              href="#features"
              className="text-white hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-white hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-white hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg"
            >
              About
            </a>
            <hr className="border-neutral-200" />
            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-400 to-purple-400 hover:opacity-90">
                  Sign In
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[85vw] max-w-6xl max-h-[90vh] overflow-y-auto bg-white/20  p-4 md:p-8 border-none">
                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                  <div className="flex items-center justify-center">
                    <LoginForm onClose={() => setIsLoginOpen(false)} />
                  </div>
                  <div className="hidden md:flex items-center">
                    <Testimonial />
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-400 to-purple-400 hover:opacity-90">
                  Sign Up
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[85vw] max-w-6xl max-h-[90vh] overflow-y-auto bg-white/20  p-4 md:p-8 border-none">
                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                  <div className="flex items-center justify-center">
                    <SignupForm onClose={() => setIsSignupOpen(false)} />
                  </div>
                  <div className="hidden md:flex items-center">
                    <Testimonial />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
