import { ChevronDown, Search, User, X, Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DialogHeader, DialogTitle, DialogClose } from "../../components/ui/dialog"; // Added DialogClose
import { Button } from "../../components/ui/button"; // ShadCN Button
import { Input } from "../../components/ui/input"; // ShadCN Input
import { Label } from "../../components/ui/label"; // ShadCN Label
import { useForm } from 'react-hook-form'; // React Hook Form

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // You can add your sign-up logic here (e.g., API call)
  };

  return (
    <div>
      <div className='lg:w-1/2 md:w-2/3 w-full bg-[#A1A1A1] border text-center rounded-4xl py-5 px-12 m-auto'>
        <DialogHeader className='text-center items-center mb-9 relative'>
          <DialogTitle className="text-4xl font-semibold">Sign Up Account</DialogTitle>
          <p className="text-2xl text-gray-100">Don't have an Account? <a href="#" className='text-primary underline underline-offset-1'>Sign Up Free</a></p>
          {/* Close Button */}
          <DialogClose className="absolute bg-transparent top-2 right-1">
            <X className="h-8 w-9 font-bold text-white hover:text-gray-300 cursor-pointer" />
          </DialogClose>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* First Name with Icon */}
            <div className="space-y-2 relative">
              <Label htmlFor="firstName" className='text-lg font-normal'>First Name</Label>
              <div className="relative">
                <Input
                  className='py-7 px-4 pr-10 text-2xl bg-[#F2F2F2]'
                  id="firstName"
                  placeholder="First name"
                  {...register("firstName", { required: "First name is required" })}
                />
                <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#838383] h-6 w-6" />
              </div>
              {errors.firstName && <p className="text-red-500 text-left text-xs">{errors.firstName.message}</p>}
            </div>
            {/* Last Name with Icon */}
            <div className="space-y-2 relative">
              <Label htmlFor="lastName" className='text-lg font-normal'>Last Name</Label>
              <div className="relative">
                <Input
                  id="lastName"
                  className='py-7 px-4 pr-10 text-2xl bg-[#F2F2F2]'
                  placeholder="Last name"
                  {...register("lastName", { required: "Last name is required" })}
                />
                <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#838383] h-6 w-6" />
              </div>
              {errors.lastName && <p className="text-red-500 text-left text-xs">{errors.lastName.message}</p>}
            </div>
          </div>
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
            <Label htmlFor="terms" className='text-lg text-secondary'>I agree to the Terms & Conditions</Label>
          </div>
          {/* Submit Button */}
          <Button type="submit" className="w-full p-8 rounded-2xl bg-[#00254A] text-white hover:bg-[#003366]">
            Sign up
          </Button>
          {/* Social Sign-Up Options */}
          <div className="text-center text-2xl text-secondary pt-3 mx-8 border-t-2">Or Sign Up with</div>
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
            Already I have an account?{" "}
            <Link to="#" className="text-black hover:underline">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;