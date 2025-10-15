
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

interface MobileAccordionMenuProps { 
  title: string; 
  items: { label: string; path: string }[];
  closeMenu: () => void;
}

const MobileAccordionMenu = ({ 
  title, 
  items, 
  closeMenu 
}: MobileAccordionMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useTranslation();
  
  return (
    <div className="py-3 border-b border-gray-800">
      <button 
        className="flex items-center justify-between w-full py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[14px] capitalize">{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="pl-4 mt-2 space-y-2">
          {items.map((item) => (
            <Link 
              key={item.label}
              to={item.path}
              className="block py-2 text-[13px] text-gray-300 hover:text-[#D4201A] capitalize"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileAccordionMenu;
