import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { Church, Users, Globe } from 'lucide-react';
import Hero from '@/components/Hero';
import PageTitle from '@/components/PageTitle';

const PraiseChapelGlobal = () => {
  const { t, language } = useTranslation();
  
  return (
    <>
      <PageTitle title="Praise Chapel Global" />
      <Header />
      
      <main>
        <Hero 
          title={language === 'es' ? 'Praise Chapel Global' : 'Praise Chapel Global'}
          buttonText={language === 'es' ? 'Visitar página' : 'Visit Site'}
          buttonLink="https://www.pcglobalnetwork.com/"
          videoSource="mp4"
          videoUrl="https://video.wixstatic.com/video/021863_c56fc4f169464a208b829299133d4610/1080p/mp4/file.mp4"
          height="min-h-[50vh]"
        />
        
        {/* Global Impact Section */}
        <section className="section-padding bg-white">
          <div className="container-praise">
            <div className="text-center mb-16">
              <h2 className="section-title">{language === 'es' ? 'Impacto Global' : 'Global Impact'}</h2>
              <p className="max-w-3xl mx-auto text-lg">
                {language === 'es'
                  ? 'Praise Chapel Global tiene más de 4,300 iglesias en todo el mundo en su red.'
                  : 'Praise Chapel Global has over 4,300 churches worldwide in its network.'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-praise-bg rounded-lg shadow-sm flex flex-col items-center">
                <Church className="h-12 w-12 text-praise-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-praise-title">
                  {language === 'es' ? 'Plantación de Iglesias' : 'Church Planting'}
                </h3>
                <p className="text-praise-text">
                  {language === 'es'
                    ? 'Estamos dedicados a establecer iglesias vibrantes y llenas de vida en comunidades de todo el mundo.'
                    : 'We are dedicated to establishing vibrant, life-giving churches in communities around the world.'}
                </p>
              </div>
              
              <div className="p-6 bg-praise-bg rounded-lg shadow-sm flex flex-col items-center">
                <Users className="h-12 w-12 text-praise-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-praise-title">
                  {language === 'es' ? 'Desarrollo de Liderazgo' : 'Leadership Development'}
                </h3>
                <p className="text-praise-text">
                  {language === 'es'
                    ? 'Equipando y capacitando líderes para servir eficazmente a sus iglesias y comunidades locales.'
                    : 'Equipping and training leaders to effectively serve their local churches and communities.'}
                </p>
              </div>
              
              <div className="p-6 bg-praise-bg rounded-lg shadow-sm flex flex-col items-center">
                <Globe className="h-12 w-12 text-praise-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-praise-title">
                  {language === 'es' ? 'Misiones Globales' : 'Global Missions'}
                </h3>
                <p className="text-praise-text">
                  {language === 'es'
                    ? 'Enviando trabajadores y recursos para apoyar nuestra red de iglesias internacionales y establecer nuevas iglesias.'
                    : 'Sending workers and resources to support our international church network and establish new churches.'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default PraiseChapelGlobal;
