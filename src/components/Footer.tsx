import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Heart } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { TranslationKey } from '@/hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();
  
  const navigationLinks = [
    { labelKey: 'home' as TranslationKey, path: '/' },
    { labelKey: 'about' as TranslationKey, path: '/about-us' },
    { labelKey: 'newHereQuestion' as TranslationKey, path: '/welcome/new-here' },
    { labelKey: 'newBeliever' as TranslationKey, path: '/welcome/new-believer' },
    { labelKey: 'ourVisionFooter' as TranslationKey, path: '/our-vision' },
    { labelKey: 'meetThePastors' as TranslationKey, path: '/meet-the-pastors' },
  ];

  const churchesLinks = [
    { label: 'Pittsburg', path: '/churches/pittsburg' },
    { label: 'San Francisco', path: '/churches/san-francisco' },
    { label: 'Oakley', path: '/churches/oakley' },
    { label: 'India', path: '/churches/india' },
    { label: 'España', path: '/churches/spain' },
  ];

  const ministriesLinks = [
    { labelKey: 'connectGroups' as TranslationKey, path: '/ministries/connect-groups' },
    { labelKey: 'outreachMinistry' as TranslationKey, path: '/ministries/outreach' },
    { labelKey: 'kidsForJesus' as TranslationKey, path: '/ministries/kids' },
  ];

  return (
    <footer className="bg-[#240908] text-white">
      <div className="container-praise py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Media Column */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/pclogo.png" 
                alt="Praise Chapel" 
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-4 text-white text-center md:text-left">{t('getConnected')}</h3>
              <div className="flex space-x-6">
                <a href="https://www.facebook.com/pcbayareaimpact" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-6 w-6 hover:text-[#D4201A] transition-colors duration-300" />
                </a>
                <a href="https://www.instagram.com/pcbayareaimpact/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-6 w-6 hover:text-[#D4201A] transition-colors duration-300" />
                </a>
                <a href="https://www.youtube.com/@pc.ministries" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube className="h-6 w-6 hover:text-[#D4201A] transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">{t('navigation')}</h3>
            <ul className="space-y-3 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.labelKey}>
                  <Link 
                    to={link.path}
                    className="hover:text-[#D4201A] transition-colors duration-300"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Churches Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">{t('churches')}</h3>
            <ul className="space-y-3 text-sm">
              {churchesLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="hover:text-[#D4201A] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">{t('ministries')}</h3>
            <ul className="space-y-3 text-sm">
              {ministriesLinks.map((link) => (
                <li key={link.labelKey}>
                  <Link 
                    to={link.path}
                    className="hover:text-[#D4201A] transition-colors duration-300"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">{t('contactUsFooter')}</h3>
              <address className="not-italic space-y-2 text-sm">
                <p>293 Alves Ln Bay Point, CA 94565</p>
                <div>
                  <h4 className="font-medium mb-1">{t('officeHours')}</h4>
                  <p>{t('mondayToFriday')}</p>
                </div>
                <p>(925) 248-3250</p>
                <a 
                  href="mailto:getconnected.pcbai@gmail.com" 
                  className="text-[#D4201A] hover:underline block"
                >
                  getconnected.pcbai@gmail.com
                </a>
              </address>
            </div>
            <div className="text-sm text-gray-400 flex items-end justify-end">
              &copy; {new Date().getFullYear()} Praise Chapel Ministries. {t('allRightsReserved')}.
            </div>
          </div>
        </div>
      </div>
      
      {/* Designer credit line */}
      <div className="py-3 text-center text-xs text-gray-500">
        <a 
          href="https://bcnwebstudio.net" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center hover:text-white transition-colors duration-300"
        >
          Web Designed with <Heart className="mx-1 h-3 w-3 text-[#D4201A]" /> by bcnwebstudio.net
        </a>
      </div>
    </footer>
  );
};

export default Footer;

