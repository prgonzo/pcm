import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import TeamSection from '@/components/TeamSection';
import { useTranslation } from '@/hooks/useTranslation';
import PageTitle from '@/components/PageTitle';

const MeetPastors = () => {
  const { t, language } = useTranslation();
  
  const pastors = [
    {
      name: "Ralph & Wendi Gonzales",
      role: language === 'es' ? "Pastores Senior Internacionales" : "International Senior Pastors",
      email: "prgonzo316@gmail.com",
      imageSrc: "/lovable-uploads/ralphandwendy.jpg"
    },
    {
      name: "Scott & Raquel Fosenburg",
      role: language === 'es' ? "Pastores Principales PCBAI" : "PCBAI Lead Pastors",
      phone: "(925) 584-9169",
      imageSrc: "/lovable-uploads/scottanraquel.webp"
    },
    {
      name: "Nick & Angelica Bogdanoff",
      role: language === 'es' ? "Pastores Principales SF" : "SF Lead Pastors",
      phone: "(415) 282-9173",
      imageSrc: "/lovable-uploads/pastornick.jpg"
    },
    {
      name: "Satish & Laffi Kumar",
      role: language === 'es' ? "Pastores Supervisores de India" : "India Overseeing Pastors",
      email: "Kumarsatishkondeti99@gmail.com",
      imageSrc: "/lovable-uploads/pastorsindia.jpg"
    },
    {
      name: "Nic & Paola Rosales",
      role: language === 'es' ? "Pastores de Campus Oakley" : "Oakley Campus Pastors",
      phone: "925-949-3202",
      imageSrc: "/lovable-uploads/nicandpaola.webp"
    },

  ];

  return (
    <>
      <PageTitle title="Meet Our Pastors" />
      <Header />
      
      <main>
        <Hero 
          title={language === 'es' ? "Conoce a Nuestros Pastores" : "Meet Our Pastors"}
          subtitle={language === 'es' ? "Nuestro Equipo de Liderazgo" : "Our Leadership Team"}
          backgroundImage="/lovable-uploads/meetthepastors.jpeg"
          height="min-h-[60vh]"
        />
        
        <section className="py-12 bg-white">
          <div className="container-praise">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="section-title">
                {language === 'es' ? "Equipo Pastoral" : "Pastoral Team"}
              </h2>
              <p className="text-lg text-praise-text/80">
                {language === 'es'
                  ? "Nuestro equipo de liderazgo reconoce la autoridad de Dios y comprende que servimos como pastores bajo el Pastor Principal, Jesucristo. Estamos comprometidos con la oración y el ministerio de la Palabra. Nuestra pasión es equipar a los creyentes para el ministerio, ayudando a todos a crecer hasta la madurez en Cristo."
                  : "Our leadership team acknowledges God's authority and understands that we serve as shepherds under the Chief Shepherd, Jesus Christ. We are committed to prayer and the ministry of the Word. Our passion is to equip believers for ministry, helping everyone grow to maturity in Christ."}
              </p>
            </div>
          </div>
        </section>
        
        <TeamSection 
          title={language === 'es' ? "Nuestros Pastores" : "Our Pastors"}
          members={pastors}
        />
        
        <section className="py-12 bg-white">
          <div className="container-praise">
            <div className="max-w-3xl mx-auto">
              <div className="bg-praise-bg p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">
                  {language === 'es' ? "Información de Contacto" : "Contact Information"}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">{language === 'es' ? "Dirección:" : "Address:"}</p>
                    <p>293 Alves Ln, Bay Point, CA 94565</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">{language === 'es' ? "Correo electrónico:" : "Email:"}</p>
                    <a 
                      href="mailto:getconnected.pcbai@gmail.com"
                      className="text-praise-primary hover:underline"
                    >
                      getconnected.pcbai@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <p className="font-medium">{language === 'es' ? "Horario de oficina:" : "Office Hours:"}</p>
                    <p>{language === 'es' ? "Lunes a Viernes 8 a.m. – 5 p.m." : "Monday-Friday 8 a.m. – 5 p.m."}</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">{language === 'es' ? "Teléfono:" : "Phone:"}</p>
                    <a 
                      href="tel:9252483250"
                      className="text-praise-primary hover:underline"
                    >
                      (925) 248-3250
                    </a>
                  </div>
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

export default MeetPastors;
