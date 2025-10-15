import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { useTranslation } from '@/hooks/useTranslation';
import PageTitle from '@/components/PageTitle';

const KidsForJesus = () => {
  const { language } = useTranslation();

  const content = {
    en: {
      title: "K4J (Kids for Jesus)",
      subtitle: "Nurturing Young Hearts for Christ",
      intro: "K4J (Kids for Jesus) is our Children's Ministry. Our churches provide a clean, safe space where kids can learn about Jesus.",
      description1: "We know that children are the future, so our teachers work hard to plan fun and exciting lessons and activities to help them grow in their faith.",
      description2: "K4J also has its own worship service while the adults are in the sanctuary. The kids love it! We take your children's future seriously, which is why we're dedicated to our Children's Ministry here at PCM.",
      safeEnvironment: "Safe Environment",
      funLearning: "Fun Learning",
      worship: "Kids Worship",
      bibleLearning: "Bible Learning",
      activities: "Fun Activities",
      mission: "Mission"
    },
    es: {
      title: "K4J (Niños para Jesús)",
      subtitle: "Nutriendo Corazones Jóvenes para Cristo",
      intro: "K4J (Niños para Jesús) es nuestro Ministerio de Niños. Nuestras iglesias proporcionan un espacio limpio y seguro donde los niños pueden aprender sobre Jesús.",
      description1: "Sabemos que los niños son el futuro, por lo que nuestros maestros trabajan arduamente para planificar lecciones y actividades divertidas y emocionantes para ayudarlos a crecer en su fe.",
      description2: "K4J también tiene su propio servicio de adoración mientras los adultos están en el santuario. ¡A los niños les encanta! Nos tomamos en serio el futuro de tus hijos, por eso estamos dedicados a nuestro Ministerio de Niños aquí en PCM.",
      safeEnvironment: "Ambiente Seguro",
      funLearning: "Aprendizaje Divertido",
      worship: "Adoración para Niños",
      bibleLearning: "Aprendizaje Bíblico",
      activities: "Actividades Divertidas",
      mission: "Misión"
    }
  };

  const currentContent = language === 'es' ? content.es : content.en;

  return (
    <>
      <PageTitle title="Kids For Jesus" />
      <Header />
      
      <main>
        <Hero 
          title={currentContent.title}
          subtitle={currentContent.subtitle}
          backgroundImage="/lovable-uploads/kids1.jpg"
          height="min-h-[60vh]"
        />
        
        <section className="section-padding bg-white">
          <div className="container-praise">
            <div className="max-w-4xl mx-auto">
              {/* Mission Section */}
              <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold mb-8">
                  {currentContent.mission}
                </h2>
                
                <div className="max-w-3xl mx-auto text-left">
                  <p className="text-lg mb-4">
                    {currentContent.intro} {currentContent.description1}
                  </p>
                  <p className="text-lg">
                    {currentContent.description2}
                  </p>
                </div>
              </div>
              
              {/* Image Gallery with hover effects */}
              <div className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group relative overflow-hidden rounded-lg shadow-md">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src="/lovable-uploads/kids2.jpg" 
                        alt={currentContent.bibleLearning} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-bold text-lg">{currentContent.bibleLearning}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative overflow-hidden rounded-lg shadow-md">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src="/lovable-uploads/kids3.jpg" 
                        alt={currentContent.activities} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-bold text-lg">{currentContent.activities}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Features Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="p-6 bg-[#E3F2FD] rounded-lg shadow-sm flex flex-col items-center">
                  <div className="rounded-full bg-[#BBDEFB] p-4 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#1976D2]">
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#1976D2]">{currentContent.safeEnvironment}</h3>
                </div>
                
                <div className="p-6 bg-[#F3E5F5] rounded-lg shadow-sm flex flex-col items-center">
                  <div className="rounded-full bg-[#E1BEE7] p-4 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#7B1FA2]">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#7B1FA2]">{currentContent.funLearning}</h3>
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

export default KidsForJesus;
