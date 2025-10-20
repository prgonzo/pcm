import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

type Event = {
  id: number;
  titleKey: string;
  date: string;
  location: string;
  time: string;
  image: string;
  categoryKey: string;
  link: string;
};

const EventsPreviewSection = () => {
  const { t, language } = useTranslation();
  
  const events: Event[] = [
    {
      id: 1,
      titleKey: "etsSchoolEvangelism",
      date: language === 'es' ? "16-31 de Marzo 2026" : "March 16–31, 2026",
      location: "Barcelona, Spain",
      time: "TBA",
      image: "/lovable-uploads/etspraying.webp",
      categoryKey: "school",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeA6f3JtgfbH34sjbzjQZwjFlWgdEu36GG4aS1vGOHuWEtLiA/viewform"
    },
    {
      id: 2,
      titleKey: "pcmIndiaNationalConference",
      date: language === 'es' ? "Febrero 2026" : "February 2026",
      location: "India, TBA",
      time: "TBA",
      image: "/lovable-uploads/indiaevent.webp",
      categoryKey: "conference",
      link: "/events"
    },
    {
      id: 3,
      titleKey: "pcmAnnualConferences",
      date: language === 'es' ? "6-8 de Noviembre" : "November 6-8",
      location: "293 Alves Lane, Bay Point",
      time: language === 'es' ? "6-8 de Noviembre, 2025" : "November 6-8, 2025",
      image: "/lovable-uploads/womenconference.jpeg",
      categoryKey: "conference",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdh7_fV1_UNDnvnUrVqfXSv4RoekIYaluqNtKVyO0HuhryUSQ/viewform?usp=send_form"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-praise">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#240908]">
          {language === 'es' ? 'Próximos Eventos' : t('upcomingEvents')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white h-full flex flex-col cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <div className="block w-full h-full cursor-pointer">
                  <img 
                    src={event.image} 
                    alt={t(event.titleKey as any)}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-white/90 text-xs font-medium rounded-full text-[#D4201A]">
                    {t(event.categoryKey as any)}
                  </span>
                </div>
              </div>
              <CardContent className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-[#240908]">{t(event.titleKey as any)}</h3>
                
                <div className="space-y-3 mb-4 flex-grow">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-[#D4201A] mr-2 mt-0.5 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#D4201A] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[#D4201A] mr-2 mt-0.5 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                </div>
                
                <Button className="mt-auto w-full bg-[#240908] hover:bg-[#321614] text-white" asChild>
                  <a 
                    href={event.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full text-center"
                  >
                    {language === 'es' ? 'Inscripción' : t('registration' as any)}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/events"
            className="inline-block px-8 py-3 bg-[#D4201A] hover:bg-[#B91D18] text-white rounded transition-colors duration-300"
          >
            {language === 'es' ? 'Ver Todos los Eventos' : t('viewAllEvents')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsPreviewSection;

