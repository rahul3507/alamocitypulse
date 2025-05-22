import { ChevronDown, Search } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"; // ShadCN Dialog
import { Button } from "../ui/button"; // ShadCN Button
import { Input } from "../ui/input"; // ShadCN Input
import { Label } from "../ui/label"; // ShadCN Label
import { Checkbox } from "../ui/checkbox"; // ShadCN Checkbox
import { useForm } from 'react-hook-form'; // React Hook Form

const NavBar = () => {
  // React Hook Form setup
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // You can add your sign-up logic here (e.g., API call)
  };

  return (
    <div>
      <header className="w-full mb-3">
        <div className="grid grid-cols-4 items-center justify-between">
          <div className="space-y-2 col-span-1">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#838383] h-4 w-4" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 p-4 w-74 text-[16px] bg-transparent rounded-[12px] border border-[#E2E2E2] focus:outline-none"
              />
            </div>
            <div className="text-lg">
              <p className="font-medium">Monday, November 20, 2023</p>
              <p className="text-secondary">Today's Paper</p>
            </div>
          </div>
          <div className="col-span-2 items-center text-center">
            <h1 className="text-6xl justify-baseline font-bold text-primary">ALAMOCITYPULSE</h1>
          </div>

          <div className="col-span-1 flex flex-col items-end justify-center">
            <div className="flex gap-1">
              <Link className="border py-3 px-6 rounded-2xl text-white text-base bg-[#00254A] mr-2">Sign in</Link>
              {/* Dialog Trigger for Sign Up */}
              <Dialog>
                <DialogTrigger asChild>
                  <Link className="border border-[#00254A] py-3 px-6 rounded-2xl text-base">Sign up</Link>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] rounded-xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold">Sing Up Account</DialogTitle>
                    <p className="text-sm text-gray-500">Don't have an Account? Sing Up Free</p>
                  </DialogHeader>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {/* First Name */}
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="First name"
                          {...register("firstName", { required: "First name is required" })}
                        />
                        {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
                      </div>
                      {/* Last Name */}
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Last name"
                          {...register("lastName", { required: "Last name is required" })}
                        />
                        {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
                      </div>
                    </div>
                    {/* Email or Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="emailOrPhone">E-mail or Phone</Label>
                      <Input
                        id="emailOrPhone"
                        placeholder="Enter your E-mail or phone number"
                        {...register("emailOrPhone", {
                          required: "Email or phone is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.emailOrPhone && <p className="text-red-500 text-xs">{errors.emailOrPhone.message}</p>}
                    </div>
                    {/* Password */}
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your Password"
                        {...register("password", {
                          required: "Password is required",
                          minLength: { value: 6, message: "Password must be at least 6 characters" },
                        })}
                      />
                      {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                    </div>
                    {/* Terms & Conditions */}
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        {...register("terms", { required: "You must agree to the terms" })}
                      />
                      <Label htmlFor="terms">I agree to the Terms & Conditions</Label>
                    </div>
                    {errors.terms && <p className="text-red-500 text-xs">{errors.terms.message}</p>}
                    {/* Submit Button */}
                    <Button type="submit" className="w-full bg-[#00254A] text-white hover:bg-[#003366]">
                      Login
                    </Button>
                    {/* Social Sign-Up Options */}
                    <div className="text-center text-sm text-gray-500">Or Sing Up with</div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="w-full flex gap-2">
                        <img src="https://www.google.com/favicon.ico" alt="Google" className="h-5 w-5" />
                        Google
                      </Button>
                      <Button variant="outline" className="w-full flex gap-2">
                        <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="h-5 w-5" />
                        Facebook
                      </Button>
                    </div>
                    {/* Sign In Link */}
                    <div className="text-center text-sm">
                      Already I have an account?{" "}
                      <Link to="#" className="text-blue-600 hover:underline">
                        Sign in
                      </Link>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            <div className="">
              <p className="text-textColor border border-[#F6D5D5] rounded-2xl p-3 mt-4 text-base">
                SAVE 50% ON Membership
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-t text-primary border-[#e2e2e2] py-6">
        <ul className="flex gap-12 justify-center text-2xl space-x-12">
          <li>
            <Link href="#" className="hover:text-[#505050]">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center hover:text-[#505050]">
              News <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[#505050]">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[#505050]">
              Make Advertise
            </Link>
          </li>
        </ul>
      </nav>
      <div className="py-0.5 border-t border-b border-primary"></div>
    </div>
  );
};

export default NavBar;