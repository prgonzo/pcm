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

const IndiaChurch = () => {
  const [activeTab, setActiveTab] = useState("about");
  const { language } = useTranslation();
  const isMobile = useIsMobile();
  
  const content = {
    en: {
      title: "Praise Chapel India",
      subtitle: "Welcome Home",
      welcomeText: "We invite you to join us for a worship service! We are a family of believers who love Jesus and want to grow in our understanding of God's Word. Our church is built on loving one another, so you'll feel at home the moment you arrive. We look forward to seeing you!",
      welcomeTextTelugu: "మేము మీరు మా ప్రార్థనా సేవలో భాగస్వామ్యమయ్యేందుకు ఆహ్వానిస్తున్నాము! మేము యేసును ప్రేమించే మరియు దేవుని వాక్యాన్ని అర్థం చేసుకోవడంలో ఎదగాలని కోరుకునే విశ్వాసుల కుటుంబం. మా చర్చి ఒకరినొకరు ప్రేమించడం పైన ఆధారపడి ఉంటుంది, కాబట్టి మీరు వచ్చి వెంటనే ఇంట్లో ఉన్నట్లుగా అనిపిస్తుంది. మిమ్మల్ని చూడటానికి మేము ఎదురుచూస్తున్నాము!",
      serviceTimes: "Service Times",
      location: "Location",
      watchLive: "WATCH LIVE",
      lakkuvarithota: "Lakkuvarithota Church",
      linepallavapalem: "Linepallavapalem Church",
      tabs: {
        about: "About",
        pastors: "Pastors",
        contact: "Contact"
      },
      aboutSection: {
        title: "About Our Church",
        content: "Praise Chapel Ministries has 42 churches in India, all dedicated to sharing the gospel and making disciples. Each church is passionate about exalting the name of Jesus!"
      },
      pastorsSection: {
        title: "Overseeing Pastors",
        content: "Satish and Laffi Kumar are the overseeing pastors of the 42 churches we have in India."
      },
      contactSection: {
        title: "Get In Touch",
        address: "Address",
        email: "General Enquiries",
        phone: "Phone",
        connectWithUs: "Connect With Us"
      },
      givingSection: {
        title: "A Simple Way To Give",
        button: "Give Now",
        content: "Your generous support helps us continue to spread the Gospel and serve our community."
      },
      services: {
        lakkuvarithota: {
          sunday1: "Main church @ 10:00 AM",
          sunday2: "Branch church @ 11:00 AM",
          friday: "",
          firstTuesday: "",
          lordTable: "",
          location: "Lakkuvarithota, mogalthur"
        },
        linepallavapalem: {
          sunday: "Town church @ 7:00 PM",
          friday: "",
          location: "Linepallavapalem, perupalem South"
        }
      }
    },
    es: {
      title: "Praise Chapel India",
      subtitle: "Bienvenido a Casa",
      welcomeText: "Te invitamos a asistir a uno de nuestros servicios de adoración. Somos una familia de creyentes que ama a Jesús con pasión y busca profundizar nuestro entendimiento de la Palabra de Dios. Nuestra iglesia se basa en amarnos unos a otros, así que te sentirás como en familia desde el momento en que llegues. ¡Esperamos verte pronto!",
      welcomeTextTelugu: "మేము మీను మా పూజా సేవలలో ఒకదానిని సందర్శించడానికి ఆహ్వానిస్తున్నాము. మేము జేసస్‌ను ఆరాధించే విశ్వాసుల కుటుంబం, మరియు దేవుని వచనాన్ని మరింతగా అవగతం చేసేందుకు ప్రయత్నిస్తున్నాము. మా చర్చి పరస్పర ప్రేమపై స్థాపించబడింది, కాబట్టి మీరు రాగానే కుటుంబ సభ్యులలాగే భావించబడతారు. మేము మీను కలుసుకోవడానికి ఎదురుచూస్తున్నాము!",
      serviceTimes: "Horarios de Servicio",
      location: "Ubicación",
      watchLive: "VER EN VIVO",
      lakkuvarithota: "Iglesia Lakkuvarithota",
      linepallavapalem: "Iglesia Linepallavapalem",
      tabs: {
        about: "Sobre Nosotros",
        pastors: "Pastores",
        contact: "Contacto"
      },
      aboutSection: {
        title: "Sobre Nuestra Iglesia",
        content: "Praise Chapel India consta de 42 iglesias en el distrito de West Godavari. Nos apasiona compartir el evangelio en India y construir una comunidad de creyentes que se apoyen mutuamente en su camino de fe."
      },
      pastorsSection: {
        title: "Pastores Supervisores",
        content: "Satish y Laffi Kumar son los pastores supervisores de las 42 iglesias que tenemos en India."
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
        button: "Donar Ahora",
        content: "Tu generoso apoyo nos ayuda a continuar difundiendo el Evangelio y servir a nuestra comunidad."
      },
      services: {
        lakkuvarithota: {
          sunday1: "Iglesia principal @ 10:00 AM",
          sunday2: "Iglesia sucursal @ 11:00 AM",
          friday: "",
          firstTuesday: "",
          lordTable: "",
          location: "Lakkuvarithota, mogalthur"
        },
        linepallavapalem: {
          sunday: "Iglesia del pueblo @ 7:00 PM",
          friday: "",
          location: "Linepallavapalem, perupalem South"
        }
      }
    }
  };
  
  const currentContent = language === 'es' ? content.es : content.en;
  
  return (
    <>
      <PageTitle title="India Church" />
      <Header />
      
      <main>
        <Hero 
          title={currentContent.title}
          subtitle={currentContent.subtitle}
          backgroundImage="/lovable-uploads/hero-india.webp"
          backgroundPosition="center"
          height="min-h-[60vh]"
          showScrollArrow={true}
        />
        
        <section className="section-padding bg-white">
          <div className="container-praise">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="section-title mb-6">{language === 'es' ? "Horario de nuestros servicios" : "Time of Our Services"}</h2>
              
              <p className="text-lg mb-4">
                {currentContent.welcomeText}
              </p>
              
              <p className="text-lg mb-8 font-telugu">
                {currentContent.welcomeTextTelugu}
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                <div className="p-6 bg-praise-bg rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-center">{currentContent.lakkuvarithota}</h3>
                  <div className="space-y-2">
                    <p className="font-semibold">Sunday Service</p>
                    <p>{content[language].services.lakkuvarithota.sunday1}</p>
                    <p>{content[language].services.lakkuvarithota.sunday2}</p>
                    <p className="mt-4">{content[language].services.lakkuvarithota.friday}</p>
                    <p className="mt-4">{content[language].services.lakkuvarithota.firstTuesday}</p>
                    <p>{content[language].services.lakkuvarithota.lordTable}</p>
                    <p className="mt-4 font-semibold">{currentContent.location}</p>
                    <p>{content[language].services.lakkuvarithota.location}</p>
                  </div>
                </div>
                
                <div className="p-6 bg-praise-bg rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-center">{currentContent.linepallavapalem}</h3>
                  <div className="space-y-2">
                    <p>{content[language].services.linepallavapalem.sunday}</p>
                    <p className="mt-4">{content[language].services.linepallavapalem.friday}</p>
                    <p className="mt-4 font-semibold">{currentContent.location}</p>
                    <p>{content[language].services.linepallavapalem.location}</p>
                  </div>
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
                          "/lovable-uploads/india1.jpg",
                          "/lovable-uploads/india2.jpg",
                          "/lovable-uploads/india3.jpg"
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
                          src="/lovable-uploads/pastorsindia.jpg" 
                          alt="Satish & Laffi Kumar" 
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-700">{currentContent.pastorsSection.title}</h2>
                    <h3 className="text-2xl md:text-3xl font-medium mb-4 md:mb-6 text-gray-600">Satish & Laffi Kumar</h3>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                      {currentContent.pastorsSection.content}
                    </p>
                  </div>
                )}
                
                {activeTab === "contact" && (
                  <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center">{currentContent.contactSection.title}</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="flex flex-col space-y-6">
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 text-praise-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="font-bold mb-1">{currentContent.contactSection.address}</h3>
                            <p>Lakkuvarithota, mogalthur or Linepallavapalem, perupalem South</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Mail className="h-5 w-5 text-praise-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="font-bold mb-1">{currentContent.contactSection.email}</h3>
                            <p>satishkondeti99@gmail.com</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Phone className="h-5 w-5 text-praise-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="font-bold mb-1">{currentContent.contactSection.phone}</h3>
                            <p>Monday-Friday from 8 a.m. to 5 p.m. (+916300183809)</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-6">
                        <h3 className="font-bold mb-1">{currentContent.contactSection.connectWithUs}</h3>
                        <div className="flex space-x-4">
                          <a 
                            href="https://www.instagram.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-praise-bg rounded-full hover:bg-praise-primary/10 transition-colors"
                          >
                            <Instagram className="h-6 w-6 text-praise-primary" />
                          </a>
                          <a 
                            href="https://www.facebook.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-praise-bg rounded-full hover:bg-praise-primary/10 transition-colors"
                          >
                            <Facebook className="h-6 w-6 text-praise-primary" />
                          </a>
                          <a 
                            href="https://www.youtube.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-praise-bg rounded-full hover:bg-praise-primary/10 transition-colors"
                          >
                            <Youtube className="h-6 w-6 text-praise-primary" />
                          </a>
                        </div>
                      </div>
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

export default IndiaChurch;
