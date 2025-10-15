
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);
  
  const handleLanguageChange = (newLanguage: 'en' | 'es') => {
    setLanguage(newLanguage);
    closeDropdown();
  };

  // Effect para cerrar el menú cuando se hace clic fuera del componente
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  const buttonClasses = `
    flex items-center justify-center px-2 py-1 rounded text-sm font-medium 
    transition-colors duration-150 relative
    hover:bg-white/20 dark:hover:bg-gray-700
  `;
  
  return (
    <div className="relative" ref={dropdownRef}>
      {/* Current Language Button */}
      <button 
        onClick={toggleDropdown}
        className={buttonClasses}
        aria-label="Switch language"
      >
        <Globe className="h-4 w-4 mr-1" />
        {language === 'en' ? 'EN' : 'ES'}
      </button>
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white dark:bg-gray-800 rounded shadow-lg w-32 overflow-hidden border border-gray-200 dark:border-gray-700 z-50">
          {[
            { code: 'en', label: 'English', flag: '🇬🇧' },
            { code: 'es', label: 'Español', flag: '🇪🇸' }
          ].map((lang) => (
            <button
              key={lang.code}
              className={`
                flex items-center justify-between w-full px-4 py-2 text-left text-sm text-gray-800
                ${language === lang.code ? 'bg-gray-100 dark:bg-gray-700' : ''}
                hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
              `}
              onClick={() => handleLanguageChange(lang.code as 'en' | 'es')}
            >
              <span className="flex items-center">
                <span className="mr-2 text-base">{lang.flag}</span>
                {lang.label}
              </span>
              {language === lang.code && <Check className="h-4 w-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
