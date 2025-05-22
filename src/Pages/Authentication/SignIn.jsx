import { ChevronDown, Search, User, X, Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DialogHeader, DialogTitle, DialogClose } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useForm } from 'react-hook-form';

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Add your sign-in logic here (e.g., API call)
  };

  return (
    <div>
      <div>
        <div className='lg:w-1/2 md:w-2/3 w-full bg-[rgba(161,161,161,0.2)] border text-center rounded-4xl py-5 px-12 m-auto'>
          <DialogHeader className='text-center items-center mb-9 relative'>
            <DialogTitle className="text-4xl font-semibold">Sign In Account</DialogTitle>
            <p className="text-2xl text-gray-100">Have an Account? <a href="#" className='text-primary underline underline-offset-1'>Sign In Please</a></p>
            <DialogClose className="absolute bg-transparent top-2 right-1">
              <X className="h-8 w-9 font-bold text-white hover:text-gray-300 cursor-pointer" />
            </DialogClose>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email or Phone */}
            <div className="space-y-2">
              <Label htmlFor="emailOrPhone" className='text-lg font-normal'>E-mail or Phone</Label>
              <Input
                id="emailOrPhone"
                className='py-7 px-4 text-2xl bg-[#F2F2F2]'
                placeholder="Enter your E-mail or phone number"
                {...register("emailOrPhone", {
                  required: "Email or phone is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.emailOrPhone && <p className="text-red-500 text-left text-xs">{errors.emailOrPhone.message}</p>}
            </div>
            {/* Password with Eye Icon */}
            <div className="space-y-2 relative">
              <Label htmlFor="password" className='text-lg font-normal'>Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  className='py-7 px-4 pr-10 text-2xl bg-[#F2F2F2]'
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters" },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 bg-transparent top-6 transform -translate-y-1/2 text-[#838383] h-6 w-6 cursor-pointer"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-left text-xs">{errors.password.message}</p>}
            </div>
            {/* Terms & Conditions */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className='w-4 h-5 mt-1 justify-baseline'
                id="terms"
                {...register("terms", { required: true })}
              />
              <Label htmlFor="terms" className='text-lg text-secondary'>Remember for 30 Days</Label>
            </div>
            {/* Submit Button */}
            <Button type="submit" className="w-full p-8 rounded-2xl bg-[#00254A] text-white hover:bg-[#003366]">
              Sign In
            </Button>
            {/* Social Sign-Up Options */}
            <div className="text-center text-2xl text-secondary pt-3 mx-8 border-t-2">Or Sign In with</div>
            <div className="flex gap-2">
              <Button variant="outline" className="w-full flex gap-2 p-8 text-lg text-black rounded-2xl">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="h-6 w-6" />
                Google
              </Button>
              <Button variant="outline" className="w-full flex gap-2 p-8 text-lg text-black rounded-2xl">
                <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="h-6 w-6" />
                Facebook
              </Button>
            </div>
            {/* Sign In Link */}
            <div className="text-center text-2xl mb-4 text-white">
              Don't have an account?{" "}
              <Link to="#" className="text-black hover:underline">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;