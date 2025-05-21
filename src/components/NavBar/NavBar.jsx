import { ChevronDown, Search } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
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
            <div className='col-span-2 items-center text-center'> 
                <h1 className="text-6xl justify-baseline font-bold text-primary">ALAMOCITYPULSE</h1>

            </div>


            <div className="col-span-1 flex flex-col items-end justify-center">
              <div className="flex gap-1">
                <Link className="border py-3 px-6 rounded-2xl text-white text-base bg-[#00254A] mr-2">Sign in</Link>
                <Link className="border border-[#00254A] py-3 px-6 rounded-2xl text-base">Sign up</Link>
              </div>
              <div className="">
                {/* Now this will work with the custom utility class */}
                <p className="text-textColor border border-[#F6D5D5] rounded-2xl p-3 mt-4 text-base">SAVE 50% ON Membership</p>
              </div>
            </div>

          </div>
        </header>

        {/* Navigation */}
        <nav className="border-t  text-primary border-[#e2e2e2] py-6">
          <ul className="flex gap-12 justify-center text-2xl space-x-12">
            <li>
              <Link href="#" className=" hover:text-[#505050]">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center  hover:text-[#505050]">
                News <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </li>
            <li>
              <Link href="#" className=" hover:text-[#505050]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className=" hover:text-[#505050]">
                Make Advertise
              </Link>
            </li>
          </ul>
        </nav>
        <div className='py-0.5 border-t border-b border-primary'>

        </div>
    </div>
  )
}

export default NavBar