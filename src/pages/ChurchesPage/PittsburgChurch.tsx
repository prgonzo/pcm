import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Youtube, Heart } from 'lucide-react';
import { InformationCircleIcon, UserGroupIcon, AcademicCapIcon, EnvelopeIcon } from '@/components/ui/custom-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { useIsMobile } from '@/hooks/use-mobile';
import ChurchCarousel from '@/components/ChurchCarousel';
import TeamSection from '@/components/TeamSection';
import PageTitle from '@/components/PageTitle';

const PittsburgChurch = () => {
  const [activeTab, setActiveTab] = useState("about");
  const { language } = useTranslation();
  const isMobile = useIsMobile();
  
  const content = {
    en: {
      title: "Praise Chapel Pittsburg",
      subtitle: "Welcome Home",
      welcomeText: "We invite you to join us for a worship service! We are a family of believers who love Jesus and want to grow in our understanding of God's Word. Our church is built on loving one another, so you'll feel at home the moment you arrive. We look forward to seeing you!",
      serviceTimes: "Service Times",
      timeOfServices: "Time of Our Services",
      sundayService: "Sunday Service @ 10 AM",
      wednesdayService: "Wednesday Service @ 7 PM",
      location: "Location",
      watchLive: "WATCH LIVE",
      tabs: {
        about: "About",
        team: "Team",
        youth: "Impact Youth",
        contact: "Contact"
      },
      aboutSection: {
        title: "About Our Church",
        serviceTitle: "Time of our Services",
        content1: "Praise Chapel Pittsburg is a vibrant, Bible-believing church community dedicated to sharing the love of Jesus Christ with everyone we encounter.",
        content2: "Our services are filled with passionate worship, practical Bible teaching, and a warm, family atmosphere where everyone is welcome."
      },
      teamSection: {
        title: "Our Team",
        leadPastors: "Lead Pastors",
        assistantPastor: "Assistant Pastor",
        staff: "Staff",
        worshipLeaders: "Worship Leaders",
        youthLeaders: "Youth Leaders",
        adminAssistant: "Admin / Assistant Pastor",
        scottDesc: "They are the Lead Pastors of Praise Chapel Pittsburg and oversee Praise Chapel Bay Area Impact (our Bay Area churches)."
      },
      youthSection: {
        title: "Impact Youth",
        mission: "Mission",
        missionText: "At Impact Youth, our goal is to help middle school and high school students build a personal relationship with Jesus Christ. We believe that God loves this generation and has an incredible plan for each one of them.",
        services: "Services",
        servicesText: "We meet on Friday nights at 7:30 PM for worship, a relevant message, and fellowship. In addition, we organize fun activities like movie nights, beach days, BBQs, concerts, and more—all centered around the Lord.",
        meetingTimes: "Meeting Times:",
        fridays: "Fridays @ 7:30 PM",
        meetingLocation: "Location:"
      },
      contactSection: {
        title: "Get In Touch",
        address: "Address",
        phone: "Phone",
        email: "Email",
        hours: "Hours",
        mondayToFriday: "Monday to Friday from 8:00 a.m. to 5:00 p.m.",
        connectWithUs: "Connect With Us"
      },
      givingSection: {
        title: "A Simple Way to Give",
        content: "Your generous support helps us continue to spread the Gospel and serve our community.",
        button: "Give Now"
      }
    },
    es: {
      title: "Praise Chapel Pittsburg",
      subtitle: "Bienvenido a Casa",
      welcomeText: "¡Te invitamos a unirte a nosotros para un servicio de adoración! Somos una familia de creyentes que ama a Jesús y desea crecer en nuestra comprensión de la Palabra de Dios. Nuestra iglesia se construye sobre el amor mutuo, por lo que te sentirás como en casa desde el momento en que llegues. ¡Esperamos verte pronto!",
      serviceTimes: "Horarios de Servicio",
      timeOfServices: "Tiempo de Nuestro Servicio",
      sundayService: "Domingo: 10:00 AM",
      wednesdayService: "Miércoles: 7:00 PM",
      location: "Ubicación",
      watchLive: "VER EN VIVO",
      tabs: {
        about: "Sobre Nosotros",
        team: "El Equipo",
        youth: "Ministerio Juvenil",
        contact: "Contacto"
      },
      aboutSection: {
        title: "Sobre Nuestra Iglesia",
        serviceTitle: "Horario de nuestros servicios",
        content1: "Praise Chapel Pittsburg es una comunidad eclesiástica vibrante que cree en la Biblia y está dedicada a compartir el amor de Jesucristo con todos los que encontramos.",
        content2: "Nuestros servicios están llenos de adoración apasionada, enseñanza bíblica práctica y un ambiente familiar cálido donde todos son bienvenidos."
      },
      teamSection: {
        title: "Nuestro Equipo",
        leadPastors: "Pastores Principales",
        assistantPastor: "Pastor Asistente",
        staff: "Personal",
        worshipLeaders: "Líderes de Adoración",
        youthLeaders: "Líderes Juveniles",
        adminAssistant: "Administración / Pastor Asistente",
        scottDesc: "Son los Pastores Principales de Praise Chapel Pittsburg y supervisan Praise Chapel Bay Area Impact (nuestras iglesias del Área de la Bahía)."
      },
      youthSection: {
        title: "Ministerio Juvenil",
        mission: "Misión",
        missionText: "En Impact Youth, nuestro enfoque es guiar a los estudiantes de secundaria y preparatoria hacia una relación personal con Jesucristo. Creemos que el Señor ama a esta generación y tiene un plan increíble para cada uno de ellos.",
        services: "Servicios",
        servicesText: "Nos reunimos los viernes a las 7:30 PM en 293 Alves Ln, Bay Point. Hay adoración, mensaje relevante y tiempo de comunión. También organizamos noches de cine, días de playa, barbacoas, conciertos y muchas otras actividades divertidas en el Señor.",
        meetingTimes: "Horarios de Reunión:",
        fridays: "Viernes a las 7:30 PM",
        meetingLocation: "Ubicación:"
      },
      contactSection: {
        title: "Ponte en Contacto",
        address: "Dirección",
        phone: "Teléfono",
        email: "Correo Electrónico",
        hours: "Horario",
        mondayToFriday: "Lunes a Viernes de 8:00 a.m. a 5:00 p.m.",
        connectWithUs: "Conéctate con Nosotros"
      },
      givingSection: {
        title: "Una Manera Simple de Dar",
        content: "Tu generoso apoyo nos ayuda a continuar difundiendo el Evangelio y servir a nuestra comunidad.",
        button: "Donar Ahora"
      }
    }
  };
  
  const currentContent = language === 'es' ? content.es : content.en;

  const teamMembers = [
    {
      name: "Scott & Raquel Fosenburg",
      role: currentContent.teamSection.leadPastors,
      imageSrc: "/lovable-uploads/scottanraquel.webp",
      phone: "(925) 584-9169",
      description: currentContent.teamSection.scottDesc
    },
    {
      name: "Al & Ambar Aroz",
      role: language === 'es' ? 'Pastores Asistentes' : 'Assistant Pastors',
      imageSrc: "/lovable-uploads/alandambar.webp"
    },
    {
      name: "Betty Williams",
      role: currentContent.teamSection.assistantPastor,
      imageSrc: "/lovable-uploads/pastorbetty.jpg"
    },
    {
      name: "Vince and Sophia Gonzales",
      role: currentContent.teamSection.worshipLeaders,
      imageSrc: "/lovable-uploads/vinceandsophia.jpg"
    },
    {
      name: "Frankie & Kahliya Guzman",
      role: currentContent.teamSection.youthLeaders,
      imageSrc: "/lovable-uploads/frankieandkahliya.webp"
    }
  ];
  
  return (
    <>
      <PageTitle title="Pittsburg Church" />
      <Header />
      
      <main>
        <Hero 
          title={currentContent.title}
          subtitle={currentContent.subtitle}
          backgroundImage="/lovable-uploads/pittsburghero.jpg"
          backgroundPosition="center"
          height="min-h-[60vh]"
          showScrollArrow={true}
        />
        
        <section className="section-padding bg-white">
          <div className="container-praise">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="section-title mb-6">{currentContent.timeOfServices}</h2>
              
              <p className="text-lg mb-8">
                {currentContent.welcomeText}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="p-6 bg-praise-bg rounded-lg shadow-sm flex flex-col items-center">
                  <Clock className="h-8 w-8 text-praise-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{currentContent.serviceTimes}</h3>
                  <ul className="text-center">
                    <li className="mb-2">{currentContent.sundayService}</li>
                    <li>{currentContent.wednesdayService}</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-praise-bg rounded-lg shadow-sm flex flex-col items-center">
                  <MapPin className="h-8 w-8 text-praise-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{currentContent.location}</h3>
                  <p>293 Alves Ln Bay Point, CA 94565</p>
                </div>
              </div>
              
              <a href="https://www.youtube.com/user/praisechapelpittsbur" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-praise-primary hover:bg-praise-primaryHover text-white">
                  {currentContent.watchLive}
                </Button>
              </a>
            </div>
            
            <div className="mt-16">
              {/* Tabs navigation */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <Button
                  onClick={() => setActiveTab("about")}
                  variant={activeTab === "about" ? "default" : "outline"} 
                  className={`rounded-full flex items-center gap-2 py-3 px-4 ${activeTab === "about" ? "bg-praise-primary text-white" : "border-praise-primary/30 text-praise-primary hover:bg-praise-primary/5"}`}
                >
                  <InformationCircleIcon className="h-5 w-5" />
                  <span>{currentContent.tabs.about}</span>
                </Button>
                
                <Button
                  onClick={() => setActiveTab("team")}
                  variant={activeTab === "team" ? "default" : "outline"}
                  className={`rounded-full flex items-center gap-2 py-3 px-4 ${activeTab === "team" ? "bg-praise-primary text-white" : "border-praise-primary/30 text-praise-primary hover:bg-praise-primary/5"}`}
                >
                  <UserGroupIcon className="h-5 w-5" />
                  <span>{currentContent.tabs.team}</span>
                </Button>
                
                <Button
                  onClick={() => setActiveTab("youth")}
                  variant={activeTab === "youth" ? "default" : "outline"}
                  className={`rounded-full flex items-center gap-2 py-3 px-4 ${activeTab === "youth" ? "bg-praise-primary text-white" : "border-praise-primary/30 text-praise-primary hover:bg-praise-primary/5"}`}
                >
                  <AcademicCapIcon className="h-5 w-5" />
                  <span>{currentContent.tabs.youth}</span>
                </Button>
                
                <Button
                  onClick={() => setActiveTab("contact")}
                  variant={activeTab === "contact" ? "default" : "outline"}
                  className={`rounded-full flex items-center gap-2 py-3 px-4 ${activeTab === "contact" ? "bg-praise-primary text-white" : "border-praise-primary/30 text-praise-primary hover:bg-praise-primary/5"}`}
                >
                  <EnvelopeIcon className="h-5 w-5" />
                  <span>{currentContent.tabs.contact}</span>
                </Button>
              </div>
              
              {/* Tab content */}
              <div className="p-4">
                {activeTab === "about" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">{currentContent.aboutSection.title}</h2>
                      <h3 className="text-xl font-bold mb-4">{currentContent.aboutSection.serviceTitle}</h3>
                      <p className="mb-4">
                        {currentContent.aboutSection.content1}
                      </p>
                      <p className="mb-6">
                        {currentContent.aboutSection.content2}
                      </p>
                    </div>
                    <div className="h-full">
                      <ChurchCarousel
                        images={[
                          "/lovable-uploads/pittsburg1.jpeg",
                          "/lovable-uploads/pittsburg2.jpg",
                          "/lovable-uploads/pittsburg3.jpg"
                        ]}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                )}
                
                {activeTab === "team" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-center">{currentContent.teamSection.title}</h2>
                    <TeamSection 
                      members={teamMembers}
                    />
                  </div>
                )}
                
                {activeTab === "youth" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-2xl font-bold mb-6">{currentContent.youthSection.title}</h2>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">{currentContent.youthSection.mission}</h3>
                        <p className="mb-4">
                          {currentContent.youthSection.missionText}
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">{currentContent.youthSection.services}</h3>
                        <p className="mb-4">
                          {currentContent.youthSection.servicesText}
                        </p>
                      </div>
                      
                      <div className="bg-praise-bg p-4 rounded-md mb-4">
                        <p className="font-medium mb-1 flex items-center">
                          <span className="mr-2">🕒</span>
                          {currentContent.youthSection.meetingTimes}
                        </p>
                        <p className="ml-6">{currentContent.youthSection.fridays}</p>
                      </div>
                      
                      <div className="bg-praise-bg p-4 rounded-md">
                        <p className="font-medium mb-1 flex items-center">
                          <span className="mr-2">📍</span>
                          {currentContent.youthSection.meetingLocation}
                        </p>
                        <p className="ml-6">293 Alves Ln, Bay Point</p>
                      </div>
                    </div>
                    <div>
                      <img 
                        src="/lovable-uploads/youth-pittsburg.webp" 
                        alt={currentContent.youthSection.title} 
                        className="rounded-lg shadow-md w-full h-auto object-cover object-center"
                      />
                    </div>
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
                            <p>293 Alves Ln Bay Point, CA 94565</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Phone className="h-5 w-5 text-praise-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="font-bold mb-1">{currentContent.contactSection.phone}</h3>
                            <p>(925) 248-3250</p>
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
                          <Clock className="h-5 w-5 text-praise-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="font-bold mb-1">{currentContent.contactSection.hours}</h3>
                            <p>{currentContent.contactSection.mondayToFriday}</p>
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
                            href="https://www.youtube.com/user/praisechapelpittsbur" 
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.9040225798835!2d-122.02308668400997!3d38.02914517971083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808560861e5e904f%3A0x6a3b95f06b6a15c0!2s293%20Alves%20Ln%2C%20Bay%20Point%2C%20CA%2094565%2C%20USA!5e0!3m2!1sen!2ses!4v1650458863648!5m2!1sen!2ses" 
                        width="100%" 
                        height="300" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Pittsburg Church Map"
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
              alt="Worship" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container-praise relative z-10 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">{currentContent.givingSection.title}</h2>
              <p className="text-white/90 mb-8 text-lg">{currentContent.givingSection.content}</p>
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

export default PittsburgChurch;
