import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import DesktopNavigation from './DesktopNavigation';
import MobileMenu from './MobileMenu';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '@/hooks/useTranslation';

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen resize with new breakpoint (1185px)
  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setIsMobile(currentWidth < 1185); // Changed from 1024 to 1185
      
      // If we resize to desktop while menu is open, close it
      if (currentWidth >= 1185 && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
      }
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Handle scroll to apply blur effect and color change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // When menu is open, prevent scrolling on body
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Church locations for mobile menu
  const churchLocations = [
    { label: t('pittsburg'), path: '/churches/pittsburg' },
    { label: t('sanFrancisco'), path: '/churches/san-francisco' },
    { label: t('oakley'), path: '/churches/oakley' },
    { label: t('india'), path: '/churches/india' },
    { label: t('spain'), path: '/churches/spain' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[100]">
      {/* Main Navigation with color change and blur effect when scrolled */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#240908]/90 backdrop-blur-md text-white shadow-[0_2px_10px_rgba(0,0,0,0.1)]' 
            : 'bg-[#F3F1EB] text-[#240908]'
        }`}
      >
        <div className="container-praise py-3">
          <div className="flex justify-between items-center">
            {/* Logo - Left side */}
            <Link to="/" className="flex items-center cursor-pointer">
              <span className="text-xl font-bold uppercase">
                <span className={isScrolled ? 'text-white' : 'text-[#240908]'}>PRAISE</span>
                <span className="text-[#D4201A]">CHAPEL</span>
              </span>
            </Link>

            {/* Desktop Menu - Centered - Now hidden at 1185px instead of 1024px */}
            <div className="hidden xl:flex justify-center flex-1">
              <DesktopNavigation 
                churchLocations={churchLocations} 
                isScrolled={isScrolled}
              />
            </div>
            
            {/* Language Switcher - Right side - Now hidden at 1185px instead of 1024px */}
            <div className="hidden xl:flex items-center">
              <a 
                href="https://app.sharefaith.com/app/giving/halopays-4221"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-1.5 bg-[#D4201A] text-white rounded hover:bg-[#B91D18] transition-colors mr-3 text-sm"
              >
                <Heart className="mr-1 h-3.5 w-3.5" /> {t('give')}
              </a>
              <LanguageSwitcher />
            </div>

            <div className="flex items-center xl:hidden">
              {/* Mobile Give Button - Always using red color */}
              <a 
                href="https://app.sharefaith.com/app/giving/halopays-4221"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-1.5 bg-[#D4201A] hover:bg-[#B91D18] rounded transition-colors text-sm mr-2 cursor-pointer text-white sm:flex hidden"
              >
                <Heart className="mr-1 h-3.5 w-3.5" /> {t('give')}
              </a>
              
              {/* Language Switcher (visible on mobile) */}
              <div className="mr-2">
                <LanguageSwitcher />
              </div>
            
              {/* Mobile menu button */}
              <button 
                onClick={toggleMenu}
                className="p-2 cursor-pointer z-[110]"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Always render but conditionally show/hide based on isMenuOpen */}
      <MobileMenu 
        isMenuOpen={isMenuOpen} 
        closeMenu={closeMenu} 
        churchLocations={churchLocations} 
      />
    </header>
  );
};

export default Header;
