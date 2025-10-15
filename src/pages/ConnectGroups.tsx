import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import PageTitle from '@/components/PageTitle';

const ConnectGroups = () => {
  const { language } = useTranslation();
  
  const content = {
    en: {
      title: "Connect Groups",
      subtitle: "Strengthening Faith, Building Relationships, and Making Disciples",
      quote: "They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer (Acts 2:42).",
      paragraph1: "The early disciples regularly met to study God's Word, pray, and fellowship. Our Connect Groups are designed to do the same. We invite you to take some time each week to relax, make new friends, and grow in your relationship with Christ through a Connect Group.",
      paragraph2: "We look forward to seeing you there! Each of our churches offers Connect Groups. To find one near you, please contact us.",
      buttonText: "Contact Us"
    },
    es: {
      title: "Grupos de Conexión",
      subtitle: "Fortaleciendo la Fe, Construyendo Relaciones y Haciendo Discípulos",
      quote: "Y perseveraban en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones (Hechos 2:42).",
      paragraph1: "Los primeros discípulos se reunían regularmente para estudiar la Palabra de Dios, orar y tener comunión. Nuestros Grupos de Conexión están diseñados para hacer lo mismo. Te invitamos a dedicar un tiempo cada semana para relajarte, hacer nuevos amigos y crecer en tu relación con Cristo a través de un Grupo de Conexión.",
      paragraph2: "¡Esperamos verte allí! Cada una de nuestras iglesias ofrece Grupos de Conexión. Para encontrar uno cerca de ti, por favor contáctanos.",
      buttonText: "Contactar"
    }
  };
  
  const currentContent = language === 'es' ? content.es : content.en;

  return (
    <>
      <PageTitle title="Connect Groups" />
      <Header />
      
      <main>
        <Hero 
          title={currentContent.title}
          subtitle={currentContent.subtitle}
          backgroundImage="/lovable-uploads/connectgroups.jpeg"
          height="min-h-[60vh]"
        />
        
        <section className="section-padding bg-white">
          <div className="container-praise">
            <div className="max-w-4xl mx-auto text-center">
              <div className="prose prose-lg mx-auto">
                <blockquote className="text-2xl font-semibold mb-8 text-praise-title">
                  {currentContent.quote}
                </blockquote>
                
                <p className="mb-6 text-lg">
                  {currentContent.paragraph1}
                </p>
                
                <p className="mb-8 text-lg">
                  {currentContent.paragraph2}
                </p>
                
                <div className="mt-10">
                  <Link to="/contact-us">
                    <Button className="bg-praise-primary hover:bg-praise-primaryHover text-white">
                      {currentContent.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ConnectGroups;
