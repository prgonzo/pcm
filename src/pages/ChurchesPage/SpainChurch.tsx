import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Youtube, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { useIsMobile } from '@/hooks/use-mobile';
import ChurchCarousel from '@/components/ChurchCarousel';
import PageTitle from '@/components/PageTitle';

const SpainChurch = () => {
  const [activeTab, setActiveTab] = useState("about");
  const { language } = useTranslation();
  const isMobile = useIsMobile();
  
  const content = {
    en: {
      title: "The Gathering Place Barcelona",
      subtitle: "International Church",
      welcomeText: "We invite you to join us for a worship service! We are a family of believers who love Jesus and want to grow in our understanding of God's Word. Our church is built on loving one another, so you'll feel at home the moment you arrive. We look forward to seeing you!",
      serviceTimes: "Service Times",
      location: "Location",
      watchLive: "WATCH LIVE",
      tabs: {
        about: "About",
        pastors: "Pastors",
        contact: "Contact"
      },
      aboutSection: {
        title: "About Our Church",
        content: "The Gathering Place Barcelona is an international, multicultural church in the heart of Barcelona, Spain. We are a community of believers from different countries and backgrounds, united by our love for Jesus Christ and our desire to grow in faith together."
      },
      pastorsSection: {
        title: "Senior Pastors",
        content: "Ralph and Wendi Gonzales are the Senior Pastors and overseers of Praise Chapel Ministries, a network of churches they pioneered in Northern California that has since grown into an international movement. Ralph is the author of several books and the founder of Equipping the Saints Bible School. He and his wife Wendi have been married for over 25 years and have six children."
      },
      contactSection: {
        title: "Get In Touch",
        address: "Address",
        email: "General Enquiries",
        connectWithUs: "Connect With Us",
        phone: "Phone"
      },
      givingSection: {
        title: "A Simple Way To Give",
        button: "Give Now",
        content: "Your generous support helps us continue to spread the Gospel and serve our community."
      },
      services: {
        wednesday: "",
        friday: "Friday Bible Study @ 7:00 PM",
        sunday: "Sunday Service @ 11:00 AM"
      },
      location_address: "Hotel Sercotel Caspe: C/ de Casp, 103, L'Eixample, 08013 Barcelona"
    },
    es: {
      title: "The Gathering Place Barcelona",
      subtitle: "Iglesia Internacional",
      welcomeText: "Te invitamos a asistir a uno de nuestros servicios de adoración. Somos una familia de creyentes que ama a Jesús con pasión y busca profundizar nuestro entendimiento de la Palabra de Dios. Nuestra iglesia se basa en amarnos unos a otros, así que te sentirás como en familia desde el momento en que llegues. ¡Esperamos verte pronto!",
      serviceTimes: "Horarios de Servicio",
      location: "Ubicación",
      watchLive: "VER EN VIVO",
      tabs: {
        about: "Sobre Nosotros",
        pastors: "Pastores",
        contact: "Contacto"
      },
      aboutSection: {
        title: "Sobre Nuestra Iglesia",
        content: "The Gathering Place Barcelona es una iglesia internacional y multicultural en el corazón de Barcelona, España. Somos una comunidad de creyentes de diferentes países y orígenes, unidos por nuestro amor por Jesucristo y nuestro deseo de crecer juntos en nuestro camino de fe."
      },
      pastorsSection: {
        title: "Pastores Principales",
        content: "Ralph y Wendi Gonzales son los Pastores Principales y supervisores de Praise Chapel Ministries, una red de iglesias que ellos fundaron en el norte de California y que desde entonces ha crecido hasta convertirse en un movimiento internacional. Ralph es autor de varios libros y fundador de la Escuela Bíblica Equipping the Saints. Él y su esposa Wendi han estado casados por más de 25 años y tienen seis hijos."
      },
      contactSection: {
        title: "Ponte en Contacto",
        address: "Dirección",
        email: "Consultas Generales",
        connectWithUs: "Conéctate con Nosotros",
        phone: "Teléfono"
      },
      givingSection: {
        title: "Una Manera Simple de Dar",
        button: "Donar Ahora",
        content: "Tu generoso apoyo nos ayuda a continuar difundiendo el Evangelio y servir a nuestra comunidad."
      },
      services: {
        wednesday: "",
        friday: "Friday Bible Study @ 7:00 PM",
        sunday: "Sunday Service @ 11:00 AM"
      },
      location_address: "Hotel Sercotel Caspe: C/ de Casp, 103, L'Eixample, 08013 Barcelona"
    }
  };
  
  const currentContent = language === 'es' ? content.es : content.en;
  
  return (
    <>
      <PageTitle title="Spain Church" />
      <Header />
      
      <main>
        <Hero 
          title={currentContent.title}
          subtitle={currentContent.subtitle}
          backgroundImage="/lovable-uploads/hero-spain.webp"
          backgroundPosition="center"
          height="min-h-[60vh]"
          showScrollArrow={true}
        />
        
        <section className="section-padding bg-white">
          <div className="container-praise">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="section-title mb-6">{language === 'es' ? "Horario de nuestros servicios" : "Time of Our Services"}</h2>
              
              <p className="text-lg mb-8">
                {currentContent.welcomeText}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="p-6 bg-praise-bg rounded-lg shadow-sm flex flex-col items-center">
                  <Clock className="h-8 w-8 text-praise-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{currentContent.serviceTimes}</h3>
                  <ul className="text-center">
                    <li className="mb-2">{content[language].services.sunday}</li>
                    <li className="mb-2">{content[language].services.wednesday}</li>
                    <li className="mb-2">
                      {content[language].services.friday}
                    </li>
                    <li className="text-sm">
                      <button 
                        onClick={() => {
                          setActiveTab("contact");
                          setTimeout(() => {
                            document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                          }, 100);
                        }}
                        className="text-praise-primary hover:text-praise-primaryHover underline"
                      >
                        {language === 'es' ? "(Contactar para ubicación)" : "Contact for location"}
                      </button>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-praise-bg rounded-lg shadow-sm flex flex-col items-center">
                  <MapPin className="h-8 w-8 text-praise-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{currentContent.location}</h3>
                  <p>{content[language].location_address}</p>
                </div>
              </div>
              
              <a href="https://www.youtube.com/results?search_query=praise+chapel+ministries" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-praise-primary hover:bg-praise-primaryHover text-white">
                  {currentContent.watchLive}
                </Button>
              </a>
            </div>
            
            <div className="mt-16">
              {/* Individual tab buttons */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <Button
                  onClick={() => setActiveTab("about")}
                  variant={activeTab === "about" ? "default" : "outline"} 
                  className={`flex items-center gap-2 py-2 px-4 rounded-full ${activeTab === "about" ? "bg-praise-primary text-white" : "border-praise-primary/30 text-praise-primary hover:bg-praise-primary/5"}`}
                >
                  {currentContent.tabs.about}
                </Button>
                
                <Button
                  onClick={() => setActiveTab("pastors")}
                  variant={activeTab === "pastors" ? "default" : "outline"}
                  className={`flex items-center gap-2 py-2 px-4 rounded-full ${activeTab === "pastors" ? "bg-praise-primary text-white" : "border-praise-primary/30 text-praise-primary hover:bg-praise-primary/5"}`}
                >
                  {currentContent.tabs.pastors}
                </Button>
                
                <Button
                  onClick={() => setActiveTab("contact")}
                  variant={activeTab === "contact" ? "default" : "outline"}
                  className={`flex items-center gap-2 py-2 px-4 rounded-full ${activeTab === "contact" ? "bg-praise-primary text-white" : "border-praise-primary/30 text-praise-primary hover:bg-praise-primary/5"}`}
                >
                  {currentContent.tabs.contact}
                </Button>
              </div>
              
              {/* Tab content */}
              <div className="p-4">
                {activeTab === "about" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">{currentContent.aboutSection.title}</h2>
                      <p className="mb-4">
                        {currentContent.aboutSection.content}
                      </p>
                      <div className="flex space-x-4 mt-6">
                        <a 
                          href="https://www.instagram.com/tgp.barcelona/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-praise-bg rounded-full hover:bg-praise-primary/10 transition-colors"
                        >
                          <Instagram className="h-6 w-6 text-praise-primary" />
                        </a>
                        <a 
                          href="https://www.facebook.com/tgp.barcelona" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-praise-bg rounded-full hover:bg-praise-primary/10 transition-colors"
                        >
                          <Facebook className="h-6 w-6 text-praise-primary" />
                        </a>
                        <a 
                          href="https://www.youtube.com/results?search_query=praise+chapel+ministries" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-praise-bg rounded-full hover:bg-praise-primary/10 transition-colors"
                        >
                          <Youtube className="h-6 w-6 text-praise-primary" />
                        </a>
                      </div>
                    </div>
                    <div className="h-full">
                      <ChurchCarousel
                        images={[
                          "/lovable-uploads/bar 1.jpg",
                          "/lovable-uploads/DSCF9742.jpg",
                          "/lovable-uploads/barc 2.jpg",
                          "/lovable-uploads/bar 4.jpg",
                          "/lovable-uploads/IMG_1868 2.JPG",
                          "/lovable-uploads/spain1.jpg",
                          "/lovable-uploads/spain2.jpg",
                          "/lovable-uploads/pastor-praying.webp"
                        ]}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                )}
                
                {activeTab === "pastors" && (
                  <div className="max-w-3xl mx-auto text-center">
                    <div className="flex justify-center mb-8">
                      <div style={{ width: 'min(45vw, 16rem)', height: 'min(45vw, 16rem)' }} className="overflow-hidden rounded-full shadow-md">
                        <img 
                          src="/lovable-uploads/ralphandwendy.jpg" 
                          alt="Ralph & Wendi Gonzales" 
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-700">{currentContent.pastorsSection.title}</h2>
                    <h3 className="text-2xl md:text-3xl font-medium mb-4 md:mb-6 text-gray-600">Ralph & Wendi Gonzales</h3>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                      {currentContent.pastorsSection.content}
                    </p>
                  </div>
                )}
                
                {activeTab === "contact" && (
                  <div id="contact-section" className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center">{currentContent.contactSection.title}</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="flex flex-col space-y-6">
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 text-praise-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="font-bold mb-1">{currentContent.contactSection.address}</h3>
                            <p>{content[language].location_address}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Mail className="h-5 w-5 text-praise-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="font-bold mb-1">{currentContent.contactSection.email}</h3>
                            <p>pcm.thegatheringplace@gmail.com</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Phone className="h-5 w-5 text-praise-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="font-bold mb-1">{currentContent.contactSection.phone || "Phone"}</h3>
                            <p>+34 691 79 65 94 - {language === 'es' ? "llamar o enviar mensaje" : "call or text"}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-6">
                        <h3 className="font-bold mb-1">{currentContent.contactSection.connectWithUs}</h3>
                        <div className="flex space-x-4">
                          <a 
                            href="https://www.instagram.com/tgp.barcelona/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-praise-bg rounded-full hover:bg-praise-primary/10 transition-colors"
                          >
                            <Instagram className="h-6 w-6 text-praise-primary" />
                          </a>
                          <a 
                            href="https://www.facebook.com/tgp.barcelona" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-praise-bg rounded-full hover:bg-praise-primary/10 transition-colors"
                          >
                            <Facebook className="h-6 w-6 text-praise-primary" />
                          </a>
                          <a 
                            href="https://www.youtube.com/results?search_query=praise+chapel+ministries" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-praise-bg rounded-full hover:bg-praise-primary/10 transition-colors"
                          >
                            <Youtube className="h-6 w-6 text-praise-primary" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.6390263085497!2d2.1841818772532387!3d41.3941988947697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3159c8df8f9%3A0x1c3ea6c1daf1a5c2!2sC%2F%20de%20Casp%2C%20103%2C%20L&#39;Eixample%2C%2008013%20Barcelona%2C%20Spain!5e0!3m2!1sen!2ses!4v1650458863648!5m2!1sen!2ses" 
                        width="100%" 
                        height="300" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Spain Church Map"
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Simple Way to Give Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <img 
              src="/lovable-uploads/simplewaytogive.png" 
              alt="Simple Way to Give" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container-praise relative z-10 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">{currentContent.givingSection.title}</h2>
              <p className="text-white/90 mb-8 text-lg">
                {currentContent.givingSection.content}
              </p>
              <a 
                href="https://www.paypal.com/paypalme/PCBAYAREAIMPACT?locale.x=en_US&fbclid=IwZXh0bgNhZW0CMTAAAR1cf--WTKtRWIZ1-CiAB84eBSjM9YiM9fHW32ziss_e6A5_58uzeeVmuUU_aem_hch5DpLcSxoQJCh9R3t4AA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-praise-primary hover:bg-praise-primaryHover text-white font-medium rounded"
              >
                <Heart className="h-5 w-5 mr-2" /> {currentContent.givingSection.button}
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default SpainChurch;
