
import React from 'react';
import { Link } from 'react-router-dom';

interface ChurchLocationsBarProps {
  churchLocations: { label: string; path: string }[];
  isScrolled: boolean;
  isMobile: boolean;
}

const ChurchLocationsBar = ({ churchLocations, isScrolled, isMobile }: ChurchLocationsBarProps) => {
  return (
    <div 
      className={`bg-[#D4201A] text-white transition-all duration-300 ${
        isScrolled || isMobile ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'
      }`}
    >
      <div className="container-praise py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="font-semibold">FIND A CHURCH</span>
            <div className="hidden md:flex space-x-4">
              {churchLocations.map((location) => (
                <Link 
                  key={location.label} 
                  to={location.path}
                  className="hover:underline text-sm"
                >
                  {location.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChurchLocationsBar;
