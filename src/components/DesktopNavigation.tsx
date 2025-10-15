import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

type ChurchLocation = {
  label: string;
  path: string;
};

interface DesktopNavigationProps {
  churchLocations: ChurchLocation[];
  isScrolled: boolean;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ 
  churchLocations,
  isScrolled
}) => {
  const { t, language } = useTranslation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const linkClass = isScrolled 
    ? 'text-white hover:text-[#D4201A] transition-colors px-3 py-2' 
    : 'text-[#240908] hover:text-[#D4201A] transition-colors px-3 py-2';

  const dropdownClass = 'bg-white border border-gray-200 shadow-lg';
    
  return (
    <nav className="flex items-center justify-center">
      <ul className="flex space-x-4 items-center">
        {/* Welcome */}
        <li 
          className="relative"
          onMouseEnter={() => handleMouseEnter('welcome')}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className={`${linkClass} flex items-center cursor-pointer`}
          >
            {language === 'es' ? 'Bienvenido' : 'Welcome'} 
            <ChevronDown 
              className={`ml-1 h-4 w-4 transition-transform duration-300 ${hoveredItem === 'welcome' ? 'rotate-180' : ''}`} 
            />
          </div>
          
          {hoveredItem === 'welcome' && (
            <div className={`absolute top-full left-0 min-w-[200px] py-2 ${dropdownClass} rounded-md z-10`}>
              <Link 
                to="/welcome/new-here" 
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-[#240908]"
              >
                {language === 'es' ? 'Nuevo Aquí' : t('newHere')}
              </Link>
              <Link 
                to="/welcome/new-believer" 
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-[#240908]"
              >
                {language === 'es' ? 'Nuevo Creyente' : t('newBeliever')}
              </Link>
            </div>
          )}
        </li>
        
        {/* About Us */}
        <li 
          className="relative"
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className={`${linkClass} flex items-center cursor-pointer`}
          >
            {language === 'es' ? 'Nosotros' : 'About'} 
            <ChevronDown 
              className={`ml-1 h-4 w-4 transition-transform duration-300 ${hoveredItem === 'about' ? 'rotate-180' : ''}`} 
            />
          </div>
          
          {hoveredItem === 'about' && (
            <div className={`absolute top-full left-0 min-w-[200px] py-2 ${dropdownClass} rounded-md z-10`}>
              <Link 
                to="/about-us" 
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-[#240908]"
              >
                {language === 'es' ? 'Sobre Nosotros' : t('aboutUs')}
              </Link>
              <Link 
                to="/our-vision" 
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-[#240908]"
              >
                {language === 'es' ? 'Nuestra Visión' : t('ourVision')}
              </Link>
              <Link 
                to="/we-believe" 
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-[#240908]"
              >
                {language === 'es' ? 'Creemos' : t('weBelieve')}
              </Link>
              <Link 
                to="/praise-chapel-global" 
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-[#240908]"
              >
                {language === 'es' ? 'Praise Chapel Global' : t('praiseChapelGlobal')}
              </Link>
              <Link 
                to="/meet-the-pastors" 
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-[#240908]"
              >
                {language === 'es' ? 'Conoce a los Pastores' : t('meetThePastors')}
              </Link>
            </div>
          )}
        </li>
        
        {/* Ministries */}
        <li 
          className="relative"
          onMouseEnter={() => handleMouseEnter('ministries')}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className={`${linkClass} flex items-center cursor-pointer`}
          >
            {language === 'es' ? 'Ministerios' : 'Ministries'} 
            <ChevronDown 
              className={`ml-1 h-4 w-4 transition-transform duration-300 ${hoveredItem === 'ministries' ? 'rotate-180' : ''}`} 
            />
          </div>
          
          {hoveredItem === 'ministries' && (
            <div className={`absolute top-full left-0 min-w-[200px] py-2 ${dropdownClass} rounded-md z-10`}>
              <Link 
                to="/ministries/connect-groups" 
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-[#240908]"
              >
                {language === 'es' ? 'Grupos de Conexión' : t('connectGroups')}
              </Link>
              <Link 
                to="/ministries/outreach" 
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-[#240908]"
              >
                {language === 'es' ? 'Ministerio de Alcance' : t('outreachMinistry')}
              </Link>
              <Link 
                to="/ministries/kids" 
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-[#240908]"
              >
                {language === 'es' ? 'Niños para Jesús' : t('kidsForJesus')}
              </Link>
            </div>
          )}
        </li>
        
        {/* Churches */}
        <li 
          className="relative"
          onMouseEnter={() => handleMouseEnter('churches')}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className={`${linkClass} flex items-center cursor-pointer`}
          >
            {language === 'es' ? 'Iglesias' : t('churches')} 
            <ChevronDown 
              className={`ml-1 h-4 w-4 transition-transform duration-300 ${hoveredItem === 'churches' ? 'rotate-180' : ''}`} 
            />
          </div>
          
          {hoveredItem === 'churches' && (
            <div className={`absolute top-full left-0 min-w-[200px] py-2 ${dropdownClass} rounded-md z-10`}>
              {churchLocations.map(church => (
                <Link 
                  key={church.path}
                  to={church.path} 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-[#240908]"
                >
                  {church.label}
                </Link>
              ))}
            </div>
          )}
        </li>
        
        {/* Bible School - External Link */}
        <li>
          <a 
            href="https://ets412.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${linkClass} flex items-center`}
          >
            {language === 'es' ? 'Escuela Bíblica' : t('etsBibleSchool')} 
            <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </li>
        
        {/* Events */}
        <li>
          <Link 
            to="/events" 
            className={linkClass}
          >
            {language === 'es' ? 'Eventos' : t('events')}
          </Link>
        </li>
        
        {/* Contact Us */}
        <li>
          <Link 
            to="/contact-us" 
            className={linkClass}
          >
            {language === 'es' ? 'Contacto' : t('contactUs')}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
