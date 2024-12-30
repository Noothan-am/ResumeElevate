import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, X } from "lucide-react";

export const LoginForm = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="w-full max-w-md">
      <div className="mb-8">
        <h2 className="text-base md:text-lg text-white mb-2">
          Please Enter your Account details
        </h2>
      </div>

      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-white">Email</label>
          <Input
            type="email"
            placeholder="johndoe@gmail.com"
            className="bg-white border-none h-10"
          />
        </div>

        <div className="space-y-2">
          <label className="text-white">Password</label>
          <Input
            type="password"
            placeholder="Enter your password"
            className="bg-white border-none h-10"
          />
          <div className="flex justify-end">
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Forgot Password
            </a>
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-blue-400 to-purple-400 hover:opacity-90 text-white h-10">
          Sign in
        </Button>

        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-white/20 flex-1" />
          <span className="text-white/60">or</span>
          <div className="h-px bg-white/20 flex-1" />
        </div>

        <div className="flex justify-center gap-4">
          <button className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors">
            <Github className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors">
            <Linkedin className="w-5 h-5 text-blue-500" />
          </button>
          <button className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors">
            <img
              src="/lovable-uploads/e1058a96-1170-4655-821f-160824dd1ceb.png"
              alt="Google"
              className="w-5 h-5"
            />
          </button>
        </div>

        <div className="text-center mt-6">
          <button className="text-white/60 hover:text-white text-sm">
            Create an account
          </button>
        </div>
      </form>
    </div>
  );
};
