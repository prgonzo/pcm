import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

const FlagSection = () => {
  const { t, language } = useTranslation();
  
  const churches = [
    {
      name: 'Pittsburg',
      flag: '🇺🇸',
      description: 'Praise Chapel Pittsburg',
      path: '/churches/pittsburg'
    },
    {
      name: 'San Francisco',
      flag: '🇺🇸',
      description: 'Jesus Movement San Francisco',
      path: '/churches/san-francisco'
    },
    {
      name: 'Oakley',
      flag: '🇺🇸',
      description: 'Praise Chapel Oakley',
      path: '/churches/oakley'
    },
    {
      name: language === 'es' ? 'Barcelona' : 'Barcelona',
      flag: '🇪🇸',
      description: 'The Gathering Place',
      path: '/churches/spain'
    },
    {
      name: 'India',
      flag: '🇮🇳',
      description: 'Praise Chapel India',
      path: '/churches/india'
    }
  ];
  
  return (
    <section className="py-16 bg-[#F3F1EB] text-[#240908]" id="churches-section">
      <div className="container-praise text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          {language === 'es' ? 'Únete a nosotros' : t('joinUsForWorship')}
        </h2>
        
        <h3 className="text-xl mb-12 text-gray-600">
          {language === 'es' ? 'Encuentra una iglesia' : t('findAChurch')}
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-12">
          {churches.map((church, index) => (
            <Link key={index} to={church.path} className="block">
              <div className="bg-white rounded-lg shadow-md h-full p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-5xl mb-4">{church.flag}</div>
                <h3 className="text-xl font-bold mb-2">{church.name}</h3>
                <p className="text-gray-600">{church.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <Link to="/contact-us">
          <button className="inline-block px-6 py-2 bg-[#240908] hover:bg-[#321614] text-white rounded transition-colors">
            {language === 'es' ? 'Contacto' : t('contact')}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FlagSection;
