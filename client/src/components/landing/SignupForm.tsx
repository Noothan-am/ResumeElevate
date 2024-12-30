import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export const SignupForm = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="w-full max-w-sm">
      <div className="mb-4">
        <h2 className="text-sm text-white mb-1">Create your Account</h2>
      </div>

      <form className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-white text-xs">First Name</label>
            <Input
              type="text"
              placeholder="John"
              className="bg-white border-none h-8"
            />
          </div>
          <div className="space-y-1">
            <label className="text-white text-xs">Last Name</label>
            <Input
              type="text"
              placeholder="Doe"
              className="bg-white border-none h-8"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-white text-xs">Username</label>
          <Input
            type="text"
            placeholder="johndoe123"
            className="bg-white border-none h-8"
          />
        </div>

        <div className="space-y-1">
          <label className="text-white text-xs">Phone Number</label>
          <Input
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="bg-white border-none h-8"
          />
        </div>

        <div className="space-y-1">
          <label className="text-white text-xs">Email</label>
          <Input
            type="email"
            placeholder="johndoe@gmail.com"
            className="bg-white border-none h-8"
          />
        </div>

        <div className="space-y-1">
          <label className="text-white text-xs">Password</label>
          <Input
            type="password"
            placeholder="Enter your password"
            className="bg-white border-none h-8"
          />
        </div>

        <div className="space-y-1">
          <label className="text-white text-xs">Confirm Password</label>
          <Input
            type="password"
            placeholder="Confirm your password"
            className="bg-white border-none h-8"
          />
        </div>

        <div className="flex items-center space-x-1">
          <Checkbox
            id="terms"
            className="border-white data-[state=checked]:bg-white data-[state=checked]:text-black"
          />
          <label htmlFor="terms" className="text-xs text-white">
            I agree to the Terms and Conditions
          </label>
        </div>

        <Button className="w-full bg-gradient-to-r from-blue-400 to-purple-400 hover:opacity-90 text-white h-8">
          Sign up
        </Button>

        <div className="flex items-center gap-3 my-3">
          <div className="h-px bg-white/20 flex-1" />
          <span className="text-white/60 text-xs">or</span>
          <div className="h-px bg-white/20 flex-1" />
        </div>

        <div className="flex justify-center gap-3">
          <button className="p-1 bg-white rounded-full hover:bg-gray-100 transition-colors">
            <Github className="w-3 h-3 text-gray-700" />
          </button>
          <button className="p-1 bg-white rounded-full hover:bg-gray-100 transition-colors">
            <Linkedin className="w-3 h-3 text-blue-500" />
          </button>
          <button className="p-1 bg-white rounded-full hover:bg-gray-100 transition-colors">
            <img
              src="/lovable-uploads/e1058a96-1170-4655-821f-160824dd1ceb.png"
              alt="Google"
              className="w-3 h-3"
            />
          </button>
        </div>

        <div className="text-center mt-3">
          <button className="text-white/60 hover:text-white text-xs">
            Already have an account? Sign in
          </button>
        </div>
      </form>
    </div>
  );
};
