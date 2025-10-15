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

const OakleyChurch = () => {
  const [activeTab, setActiveTab] = useState("about");
  const { language } = useTranslation();
  const isMobile = useIsMobile();
  
  const content = {
    en: {
      title: "Praise Chapel Oakley",
      subtitle: "Welcome Home",
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
        content: "Praise Chapel Oakley is committed to building a loving community of believers who support one another in their walk with Christ. We focus on biblical teaching and worship to help everyone grow spiritually."
      },
      pastorsSection: {
        title: "Our Pastors",
        content: "Lead pastors Nic and Paola Rosales serve with passion and dedication, bringing a dynamic approach to ministry that connects with people of all ages. Their leadership focuses on building authentic relationships, fostering spiritual growth, and equipping the church to impact the community."
      },
      contactSection: {
        title: "Get In Touch",
        address: "Address",
        email: "General Enquiries",
        phone: "Phone",
        connectWithUs: "Connect With Us"
      },
      givingSection: {
        title: "A Simple Way to Give",
        content: "Your generous support helps us continue to spread the Gospel and serve our community.",
        button: "Give Now"
      },
      services: {
        sunday: "Sunday Service @ 5:00 PM",
        monday: "Monday Women's Bible Study @ 7:00 PM",
        friday: "Friday Bible Study @ 7:30 PM",
        location: "4666 Wente CT Oakley Ca 94561",
        location_info: "Contact for location"
      },
    },
    es: {
      title: "Praise Chapel Oakley",
      subtitle: "Bienvenido a Casa",
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
        content: "Praise Chapel Oakley está comprometida a construir una comunidad amorosa de creyentes que se apoyan mutuamente en su caminar con Cristo. Nos enfocamos en la enseñanza bíblica y la adoración para ayudar a todos a crecer espiritualmente."
      },
      pastorsSection: {
        title: "Nuestros Pastores",
        content: "Los pastores principales Nic y Paola Rosales sirven con pasión y dedicación, aportando un enfoque dinámico al ministerio que conecta con personas de todas las edades. Su liderazgo se centra en construir relaciones auténticas, fomentar el crecimiento espiritual y equipar a la iglesia para impactar a la comunidad."
      },
      contactSection: {
        title: "Ponte en Contacto",
        address: "Dirección",
        email: "Consultas Generales",
        phone: "Teléfono",
        connectWithUs: "Conéctate con Nosotros"
      },
      givingSection: {
        title: "Una Manera Simple de Dar",
        content: "Tu generoso apoyo nos ayuda a continuar difundiendo el Evangelio y servir a nuestra comunidad.",
        button: "Donar Ahora"
      },
      services: {
        sunday: "Domingo @ 5:00 PM",
        monday: "Lunes Estudio Bíblico de Mujeres @ 7:00 PM",
        friday: "Viernes Estudio Bíblico @ 7:30 PM",
        location: "4666 Wente CT Oakley Ca 94561",
        location_info: "Contact for location"
      },
    }
  };
  
  const currentContent = language === 'es' ? content.es : content.en;
  
  return (
    <>
      <PageTitle title="Oakley Church" />
      <Header />
      
      <main>
        <Hero 
          title={currentContent.title}
          subtitle={currentContent.subtitle}
          backgroundImage="/lovable-uploads/oakleyhero.jpeg"
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
                    <li className="mb-2">{content[language].services.monday}</li>
                    <li className="mb-2">{content[language].services.friday}</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-praise-bg rounded-lg shadow-sm flex flex-col items-center">
                  <MapPin className="h-8 w-8 text-praise-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{currentContent.location}</h3>
                  <p>{content[language].services.location}</p>
                  <button 
                    onClick={() => {
                      setActiveTab("contact");
                      setTimeout(() => {
                        document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="text-sm mt-2 text-praise-primary hover:text-praise-primaryHover underline"
                  >
                    {content[language].services.location_info}
                  </button>
                </div>
              </div>
              
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
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
                    </div>
                    <div className="h-full">
                      <ChurchCarousel
                        images={[
                          "/lovable-uploads/oakley1.jpg",
                          "/lovable-uploads/oakley2.jpg"
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
                          src="/lovable-uploads/nicandpaola.webp" 
                          alt="Nic & Paola Rosales" 
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-700">{currentContent.pastorsSection.title}</h2>
                    <h3 className="text-2xl md:text-3xl font-medium mb-4 md:mb-6 text-gray-600">Nic & Paola Rosales</h3>
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
                            <p>{content[language].services.location}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Mail className="h-5 w-5 text-praise-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="font-bold mb-1">{currentContent.contactSection.email}</h3>
                            <p>getconnected.pcbai@gmail.com</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Phone className="h-5 w-5 text-praise-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="font-bold mb-1">{currentContent.contactSection.phone}</h3>
                            <p>Monday-Friday from 8 a.m. to 5 p.m. (925) 248-3250</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-6">
                        <h3 className="font-bold mb-1">{currentContent.contactSection.connectWithUs}</h3>
                        <div className="flex space-x-4">
                          <a 
                            href="https://www.instagram.com/pcbayareaimpact/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-praise-bg rounded-full hover:bg-praise-primary/10 transition-colors"
                          >
                            <Instagram className="h-6 w-6 text-praise-primary" />
                          </a>
                          <a 
                            href="https://www.facebook.com/pcbayareaimpact" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-praise-bg rounded-full hover:bg-praise-primary/10 transition-colors"
                          >
                            <Facebook className="h-6 w-6 text-praise-primary" />
                          </a>
                          <a 
                            href="https://www.youtube.com/@pc.ministries" 
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.9040225798835!2d-122.02308668400997!3d38.02914517971083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808560861e5e904f%3A0x6a3b95f06b6a15c0!2s4666%20Wente%20Ct%2C%20Oakley%2C%20CA%2094561%2C%20USA!5e0!3m2!1sen!2ses!4v1650458863648!5m2!1sen!2ses" 
                        width="100%" 
                        height="300" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Oakley Church Map"
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
                href="https://app.sharefaith.com/app/giving/halopays-4221"
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

export default OakleyChurch;