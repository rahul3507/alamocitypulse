import { Edit, Outdent } from 'lucide-react';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Dashboard = () => {
  // Get the current route
  const location = useLocation();

  return (
    <div className="flex mt-8 gap-8">
      {/* Sidebar */}
      <div className="w-1/5 bg-[#f2f2f2] h-screen p-6">
        <h2 className="text-xl font-bold text-[#142335] mb-4">My Account</h2>
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className={`block py-3 px-4 font-medium transition-colors duration-200 ${
                location.pathname === '/dashboard'
                  ? 'bg-[#00254a] text-white'
                  : 'text-[#505050] hover:bg-[#e2e2e2] bg-transparent'
              }`}
            >
              My Profile
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/advertise"
              className={`block py-3 px-4 font-medium transition-colors duration-200 ${
                location.pathname === '/dashboard/advertise'
                  ? 'bg-[#00254a] text-white'
                  : 'text-[#505050] hover:bg-[#e2e2e2] bg-transparent'
              }`}
            >
              Advertise
            </Link>
          </li>
        </ul>
      </div>

      {/* Profile Content */}
      <Outlet />
    </div>
  );
};

export default Dashboard;