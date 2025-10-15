import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { useTranslation } from '@/hooks/useTranslation';
import PageTitle from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, Users, Target, SendIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const OurVision = () => {
  const { language } = useTranslation();
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  
  const visionItems = language === 'es' ? [
    {
      title: "Ganar",
      description: "Ganar almas",
      imageSrc: "/lovable-uploads/win2.jpeg",
      details: "Ganamos a los perdidos a través del evangelismo.",
      icon: Users,
      color: "bg-praise-primary/10 text-praise-primary"
    },
    {
      title: "Edificar",
      description: "Equipando discípulos",
      imageSrc: "/lovable-uploads/build2.jpg",
      details: "Edificamos a aquellos que son ganados para el Señor a través del discipulado, ayudándoles a crecer como seguidores comprometidos de Cristo. Nuestro objetivo es equiparlos para someterse a la autoridad de Dios, fortalecer su relación personal con Él y reflejar a Cristo en cada área de sus vidas. Este proceso los prepara para caminar en sus llamados y convertirse en ganadores de almas y hacedores de discípulos.",
      icon: Target,
      color: "bg-blue-600/10 text-blue-600"
    },
    {
      title: "Enviar",
      description: "Enviando personas discipuladas",
      imageSrc: "/lovable-uploads/send2.jpg",
      details: "Una vez que una persona ha sido discipulada, la enviamos a cumplir su llamado, ya sea sirviendo en la iglesia local, plantando una iglesia o participando en misiones, tanto a corto como a largo plazo.",
      icon: SendIcon,
      color: "bg-amber-600/10 text-amber-600"
    }
  ] : [
    {
      title: "Win",
      description: "Winning Souls",
      imageSrc: "/lovable-uploads/win2.jpeg",
      details: "We win the lost through evangelism.",
      icon: Users,
      color: "bg-praise-primary/10 text-praise-primary"
    },
    {
      title: "Build",
      description: "Equipping Disciples",
      imageSrc: "/lovable-uploads/build2.jpg",
      details: "We build those who are won to the Lord through discipleship, helping them grow as committed followers of Christ. Our goal is to equip them to submit to God's authority, strengthen their personal relationship with Him, and reflect Christ in every area of their lives. This process prepares them to walk in their callings and become soul winners and disciple-makers.",
      icon: Target,
      color: "bg-blue-600/10 text-blue-600"
    },
    {
      title: "Send",
      description: "Sending Discipled Individuals",
      imageSrc: "/lovable-uploads/send2.jpg",
      details: "Once a person has been discipled, we send them to fulfill their calling—whether it's serving in the local church, planting a church, or participating in missions, both short-term and long-term.",
      icon: SendIcon,
      color: "bg-amber-600/10 text-amber-600"
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <>
      <PageTitle title="Our Vision" />
      <Header />
      
      <main className="bg-[#F3F1EB]">
        <Hero 
          title={language === 'es' ? "Nuestra Visión" : "Our Vision"}
          backgroundImage="/lovable-uploads/ourvision.jpeg"
          height="min-h-[60vh]"
        />
        
        <section className="py-16">
          <div className="container-praise">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-praise-title mb-6">{language === 'es' ? "Ganar. Edificar. Enviar." : "Win. Build. Send."}</h2>
              <p className="max-w-3xl mx-auto text-lg text-praise-text">
                {language === 'es' 
                  ? "Nuestra visión está centrada en la Gran Comisión, con una estrategia clara para ganar almas, edificar discípulos y enviarlos a impactar vidas local y globalmente."
                  : "Our vision is centered on the Great Commission, with a clear strategy to win souls, build disciples, and send them to impact lives locally and globally."}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {visionItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card 
                    key={index} 
                    className="overflow-hidden bg-white shadow-md hover:shadow-lg transition-all h-full"
                  >
                    <div className="flex flex-col h-full">
                      <div className="h-60 relative overflow-hidden">
                        <img 
                          src={item.imageSrc} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center mb-4">
                          <div className={cn("p-2 rounded-full mr-3", item.color)}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="text-2xl font-bold text-praise-title">{item.title}</h3>
                        </div>
                        
                        <p className="text-lg mb-4 text-praise-primary">{item.description}</p>
                        
                        <div 
                          className="cursor-pointer mt-auto flex items-center justify-between pt-4"
                          onClick={() => toggleExpand(index)}
                        >
                          <span className="font-medium text-praise-text">
                            {expandedItem === index 
                              ? (language === 'es' ? "Mostrar menos" : "Show less") 
                              : (language === 'es' ? "Leer más" : "Read more")}
                          </span>
                          <ChevronDown 
                            className={`h-5 w-5 text-praise-primary transition-transform duration-300 ${
                              expandedItem === index ? 'rotate-180' : ''
                            }`} 
                          />
                        </div>
                        
                        <AnimatePresence>
                          {expandedItem === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="text-praise-text mt-4 pt-4 border-t">
                                {item.details}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </CardContent>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default OurVision;
