import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import PageTitle from '@/components/PageTitle';

const NewHere = () => {
  const { t, language } = useTranslation();

  // Content translations based on current language
  const content = {
    en: {
      heroTitle: "New Here?",
      heroSubtitle: "We would love to connect with you",
      welcomeTitle: "Welcome to PCM",
      welcomeText1: "We would like to invite you to one of our churches. Our meetings are filled with life and the power of God! We believe the church is a spiritual hospital where JESUS CHRIST is the Great Physician.",
      welcomeText2: "No matter what your struggles or problems are He can bring healing and deliverance into your life! So come just as you are and find the freedom and joy you have always been searching for.",
      connectWithUsTitle: "Connect With Us",
      connectWithUsText: "Connect with us on social media! Stay updated with our latest posts on Facebook and Instagram, and watch our Sunday services at our different churches on YouTube.",
      whatBringsYouTitle: "What Brings You Here",
      whatBringsYouText: "What brings you here today? Looking for a new church? New to the area? Want to know more about God? Whatever your need is, we'd love to assist you.",
      contactText: "Contact us at:",
      textUs: "Text:"
    },
    es: {
      heroTitle: "¿Nuevo Aquí?",
      heroSubtitle: "Nos encantaría conectar contigo",
      welcomeTitle: "Bienvenido a PCM",
      welcomeText1: "Nos gustaría invitarte a una de nuestras iglesias. ¡Nuestras reuniones están llenas de vida y del poder de Dios! Creemos que la iglesia es un hospital espiritual donde JESUCRISTO es el Gran Médico.",
      welcomeText2: "No importa cuáles sean tus luchas o problemas, ¡Él puede traer sanidad y liberación a tu vida! Así que ven tal como eres y encuentra la libertad y la alegría que siempre has estado buscando.",
      connectWithUsTitle: "Conéctate Con Nosotros",
      connectWithUsText: "¡Conéctate con nosotros en las redes sociales! Mantente actualizado con nuestras últimas publicaciones en Facebook e Instagram, y mira nuestros servicios dominicales en nuestras diferentes iglesias en YouTube.",
      whatBringsYouTitle: "¿Qué Te Trae Aquí?",
      whatBringsYouText: "¿Qué te trae aquí hoy? ¿Buscas una nueva iglesia? ¿Eres nuevo en la zona? ¿Quieres saber más acerca de Dios? Cualquiera que sea tu necesidad, nos encantaría ayudarte.",
      contactText: "Contáctanos en:",
      textUs: "Texto:"
    }
  };

  // Use the appropriate content based on the current language
  const currentContent = language === 'es' ? content.es : content.en;

  return (
    <>
      <PageTitle title="New Here" />
      <Header />
      
      <main className="bg-[#F3F1EB]">
        {/* Hero Section */}
        <section 
          className="bg-cover bg-center min-h-[60vh] flex items-center justify-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(36, 9, 8, 0.5), rgba(36, 9, 8, 0.5)), url(/lovable-uploads/newhere.jpeg)` 
          }}
        >
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{currentContent.heroTitle}</h1>
            <p className="text-xl md:text-2xl">{currentContent.heroSubtitle}</p>
          </div>
        </section>
        
        {/* Welcome to PCM Section */}
        <section className="py-16">
          <div className="container-praise max-w-4xl">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
              {currentContent.welcomeTitle} <span className="text-[#D4201A]"></span>
            </h2>
            
            <div className="text-center text-[#222222] text-lg space-y-4">
              <p>
                {currentContent.welcomeText1}
              </p>
              <p>
                {currentContent.welcomeText2}
              </p>
            </div>
          </div>
        </section>
        
        {/* Connect With Us Section */}
        <section className="py-16 bg-[#240908] text-white">
          <div className="container-praise max-w-4xl">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 text-white">
              {currentContent.connectWithUsTitle}
            </h2>
            
            <div className="text-center text-lg mb-10">
              <p>
                {currentContent.connectWithUsText}
              </p>
            </div>
            
            <div className="flex justify-center space-x-8">
              <a 
                href="https://www.facebook.com/pcbayareaimpact" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#D4201A] transition-colors"
              >
                <Facebook className="h-10 w-10" />
              </a>
              <a 
                href="https://www.instagram.com/pcbayareaimpact/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#D4201A] transition-colors"
              >
                <Instagram className="h-10 w-10" />
              </a>
              <a 
                href="https://www.youtube.com/@pc.ministries" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#D4201A] transition-colors"
              >
                <Youtube className="h-10 w-10" />
              </a>
            </div>
          </div>
        </section>
        
        {/* What Brings You Here Section */}
        <section className="py-16">
          <div className="container-praise max-w-4xl">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
              {currentContent.whatBringsYouTitle}
            </h2>
            
            <div className="text-center text-[#222222] text-lg space-y-6 mb-10">
              <p>
                {currentContent.whatBringsYouText}
              </p>
              
              <div>
                <p>{currentContent.contactText} <a href="mailto:getconnected.pcbai@gmail.com" className="text-[#D4201A] hover:underline">getconnected.pcbai@gmail.com</a></p>
                <p>{currentContent.textUs} (925) 248-3250</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default NewHere;
