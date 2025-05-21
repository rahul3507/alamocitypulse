import { ChevronDown, Search } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <header className="py-4">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#838383] h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 w-[300px] rounded-full border border-[#e2e2e2] focus:outline-none"
                />
              </div>
              <div className="text-sm">
                <p className="font-medium">Monday, November 20, 2023</p>
                <p className="text-[#838383]">Today's Paper</p>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-[#142335]">ALAMOCITYPULSE</h1>

            <div className="flex items-center gap-2">
              <span>Profile</span>
              <div className="h-8 w-8 bg-[#142335] rounded-full flex items-center justify-center">
                <span className="text-white text-xs">U</span>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="border-t border-b border-[#e2e2e2] py-4">
          <ul className="flex justify-center space-x-12">
            <li>
              <Link href="#" className="text-[#142335] hover:text-[#505050]">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center text-[#142335] hover:text-[#505050]">
                News <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#142335] hover:text-[#505050]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#142335] hover:text-[#505050]">
                Make Advertise
              </Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBar