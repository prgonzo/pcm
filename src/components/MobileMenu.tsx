import React from 'react';
import { Heart, X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileAccordionMenu from './MobileAccordionMenu';
import { useTranslation } from '@/hooks/useTranslation';

interface MobileMenuProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
  churchLocations: { label: string; path: string }[];
}

const MobileMenu = ({ isMenuOpen, closeMenu, churchLocations }: MobileMenuProps) => {
  const { t } = useTranslation();
  
  return (
    <div className={`${isMenuOpen ? 'block' : 'hidden'}`}>
      {/* Backdrop with blur effect */}
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out"
        onClick={closeMenu}
      ></div>
      
      {/* Sidebar Menu with different widths based on screen size */}
      <div 
        className="fixed top-0 left-0 h-full bg-[#240908] text-white z-50 overflow-y-auto transform animate-slide-in-right w-[85%] sm:w-[80%] md:w-[70%] lg:w-[40%] xl:w-[35%] max-w-md"
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <Link to="/" onClick={closeMenu} className="flex items-center">
            <span className="text-xl font-bold uppercase">
              <span className="text-white">PRAISE</span>
              <span className="text-[#D4201A]">CHAPEL</span>
            </span>
          </Link>
          <button onClick={closeMenu}>
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="p-4">
          <MobileAccordionMenu 
            title={t('welcome')}
            items={[
              { label: t('newHere'), path: '/welcome/new-here' },
              { label: t('newBeliever'), path: '/welcome/new-believer' }
            ]}
            closeMenu={closeMenu}
          />
          
          <MobileAccordionMenu 
            title={t('about')}
            items={[
              { label: t('aboutUs'), path: '/about-us' },
              { label: t('ourVision'), path: '/our-vision' },
              { label: t('weBelieve'), path: '/we-believe' },
              { label: t('praiseChapelGlobal'), path: '/praise-chapel-global' },
              { label: t('meetThePastors'), path: '/meet-the-pastors' }
            ]}
            closeMenu={closeMenu}
          />
          
          <MobileAccordionMenu 
            title={t('ministries')}
            items={[
              { label: t('connectGroups'), path: '/ministries/connect-groups' },
              { label: t('outreachMinistry'), path: '/ministries/outreach' },
              { label: t('kidsForJesus'), path: '/ministries/kids' }
            ]}
            closeMenu={closeMenu}
          />
          
          <MobileAccordionMenu 
            title={t('churches')}
            items={churchLocations.map(location => ({ 
              label: location.label, 
              path: location.path 
            }))}
            closeMenu={closeMenu}
          />
          
          <div className="py-3 border-b border-gray-800">
            <a 
              href="https://www.ets412.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center py-2 text-[14px] hover:text-[#D4201A]"
              onClick={closeMenu}
            >
              {t('etsBibleSchool')} <ExternalLink className="ml-2 h-3.5 w-3.5" />
            </a>
          </div>
          
          <div className="py-3 border-b border-gray-800">
            <Link 
              to="/events"
              className="block py-2 text-[14px] hover:text-[#D4201A]"
              onClick={closeMenu}
            >
              {t('events')}
            </Link>
          </div>
          
          <div className="py-3 border-b border-gray-800">
            <Link 
              to="/contact-us"
              className="block py-2 text-[14px] hover:text-[#D4201A]"
              onClick={closeMenu}
            >
              {t('contactUs')}
            </Link>
          </div>
          
          <div className="py-6">
            <a 
              href="https://app.sharefaith.com/app/giving/halopays-4221"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 rounded bg-[#D4201A] hover:bg-[#B91D18] transition-colors"
              onClick={closeMenu}
            >
              <Heart className="mr-2 h-4 w-4" /> {t('give')}
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
