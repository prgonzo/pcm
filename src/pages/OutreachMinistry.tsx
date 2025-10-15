import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { useTranslation } from '@/hooks/useTranslation';
import PageTitle from '@/components/PageTitle';

const OutreachMinistry = () => {
  const { language } = useTranslation();
  
  const content = {
    en: {
      title: "Outreach Ministry",
      subtitle: "Going into All the World",
      quote: "Jesus said, \"Go into all the world and preach the gospel to all creation.\" - Mark 16:15",
      description: "At PCM, our passion is to fulfill the Great Commission by sharing the love and message of Jesus Christ, from each of our local communities to the ends of the earth.",
      description2: "Our outreach ministry is dedicated to being the hands and feet of Jesus, meeting both spiritual and practical needs of people wherever they are.",
      getInvolved: "Ways to Get Involved",
      communityOutreach: "Community Outreach",
      evangelism: "Evangelism",
      globalMissions: "Global Missions",
      joinTeam: "Join Our Team",
      contactText: "Want to get involved? Contact us to learn more about our different outreach programs."
    },
    es: {
      title: "Ministerio de Alcance",
      subtitle: "Yendo a Todo el Mundo",
      quote: "Jesús dijo: \"Id por todo el mundo y predicad el evangelio a toda criatura.\" - Marcos 16:15",
      description: "En PCM, nuestra pasión es cumplir la Gran Comisión compartiendo el amor y el mensaje de Jesucristo, con cada iglesia local comprometida a alcanzar a los perdidos, desde sus comunidades hasta los confines de la tierra.",
      description2: "Nuestro ministerio de alcance está dedicado a ser las manos y los pies de Jesús, satisfaciendo tanto las necesidades espirituales como prácticas de las personas dondequiera que estén.",
      getInvolved: "Formas de Participar",
      communityOutreach: "Alcance Comunitario",
      evangelism: "Evangelismo",
      globalMissions: "Misiones Globales",
      joinTeam: "Únete a Nuestro Equipo",
      contactText: "¿Quieres involucrarte? Contáctanos para obtener más información sobre nuestros diferentes programas de alcance."
    }
  };
  
  const currentContent = language === 'es' ? content.es : content.en;
  
  return (
    <>
      <PageTitle title="Outreach Ministry" />
      <Header />
      
      <main>
        <Hero 
          title={currentContent.title}
          subtitle={currentContent.subtitle}
          backgroundImage="/lovable-uploads/hero-outreach-ministry.webp"
          height="min-h-[60vh]"
        />
        
        <section className="section-padding bg-white">
          <div className="container-praise">
            <div className="max-w-4xl mx-auto mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
                <div className="prose prose-lg">
                  <blockquote className="text-xl italic mb-6 text-praise-title">
                    {currentContent.quote}
                  </blockquote>
                  
                  <p className="mb-4">
                    {language === 'es'
                      ? 'En PCM, nuestra pasión es cumplir la Gran Comisión compartiendo el amor y el mensaje de Jesucristo, con cada iglesia local comprometida a alcanzar a los perdidos, desde sus comunidades hasta los confines de la tierra.'
                      : 'At PCM, we\'re passionate about fulfilling the Great Commission by sharing the love and message of Jesus Christ. Our network of local churches is united in the mission to reach the lost—starting in their own communities and extending to the ends of the earth.'}
                  </p>
                  
                  <p>
                    {language === 'es'
                      ? currentContent.description2
                      : 'Our outreach ministries exist to be the hands and feet of Jesus, meeting both spiritual and practical needs wherever people are.'}
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <img 
                    src="/lovable-uploads/outreachministry.jpg" 
                    alt="Outreach Ministry" 
                    className="rounded-lg shadow-md w-full max-h-80 object-cover object-center"
                  />
                </div>
              </div>
            </div>
            
            {/* Image Grid */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src="/lovable-uploads/outreach1.jpeg" 
                      alt="Community Outreach" 
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 bg-praise-bg">
                    <h3 className="text-lg font-semibold text-praise-title">{currentContent.communityOutreach}</h3>
                  </div>
                </div>
                
                <div className="group overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src="/lovable-uploads/outreach2.jpg" 
                      alt="Evangelism" 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 bg-praise-bg">
                    <h3 className="text-lg font-semibold text-praise-title">{currentContent.evangelism}</h3>
                  </div>
                </div>
                
                <div className="group overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src="/lovable-uploads/outreach3.jpg" 
                      alt="Global Missions" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 bg-praise-bg">
                    <h3 className="text-lg font-semibold text-praise-title">{currentContent.globalMissions}</h3>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6 text-praise-title">{currentContent.joinTeam}</h2>
              <p className="mb-8">
                {currentContent.contactText}
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default OutreachMinistry;
