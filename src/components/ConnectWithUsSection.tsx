import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

const ConnectWithUsSection = () => {
  const { t, language } = useTranslation();
  
  const scrollToChurches = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById('churches-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative py-32 text-white" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/lovable-uploads/conect\\ with\\ us.jpeg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="container-praise text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          {language === 'es' ? 'Conecta Con Nosotros' : t('connectWithUs')}
        </h2>
        
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-white">
          {language === 'es' 
            ? 'Únete a una de nuestras comunidades, donde te sentirás como en familia desde el primer momento.' 
            : 'Join one of our communities, where you\'ll feel like family as soon as you arrive.'}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact-us" className="inline-block">
            <button className="px-8 py-3 bg-[#D4201A] hover:bg-[#B91D18] text-white rounded transition-colors text-lg">
              {language === 'es' ? 'Contacto' : t('contacta')}
            </button>
          </Link>

          <button 
            onClick={scrollToChurches}
            className="px-8 py-3 bg-transparent hover:bg-white/10 border border-white text-white rounded transition-colors text-lg"
          >
            {language === 'es' ? 'Iglesias' : t('churches')}
          </button>

          <Link to="/meet-the-pastors" className="inline-block">
            <button className="px-8 py-3 bg-transparent hover:bg-white/10 border border-white text-white rounded transition-colors text-lg">
              {language === 'es' ? 'Conoce a los Pastores' : t('meetThePastors')}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUsSection;
