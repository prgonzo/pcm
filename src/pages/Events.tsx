import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'react-router-dom';

interface Event {
  id: number;
  titleKey: string;
  date: string;
  location: string;
  time: string;
  image: string;
  categoryKey: string;
  link: string;
  isPast?: boolean;
}

const Events = () => {
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
      link: "/events"
    }
  ];

  const categories = language === 'es' 
    ? ["Todos", "Conferencia", "Escuela", "Niños"] 
    : ["All", "Conference", "School", "Kids"];
  
  const [selectedCategory, setSelectedCategory] = useState(language === 'es' ? "Todos" : "All");

  const filteredUpcomingEvents = (selectedCategory === "All" || selectedCategory === "Todos") 
    ? events 
    : events.filter(event => {
        if (selectedCategory === "Conference" || selectedCategory === "Conferencia") {
          return event.categoryKey === "conference";
        } else if (selectedCategory === "School" || selectedCategory === "Escuela") {
          return event.categoryKey === "school";
        } else if (selectedCategory === "Kids" || selectedCategory === "Niños") {
          return event.categoryKey === "kids";
        }
        return false;
      });

  const EventCard = ({ event }: { event: Event }) => (
    <Card key={event.id} className="overflow-hidden bg-white shadow-md hover:shadow-lg transition-all h-full cursor-pointer">
      <div className="flex flex-col h-full">
        <div className="h-48 relative overflow-hidden">
          <img 
            src={event.image} 
            alt={language === 'es' ? t(event.titleKey as any) : t(event.titleKey as any)}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <span className="px-3 py-1 bg-white/90 text-sm rounded-full text-[#D4201A] font-medium">
              {language === 'es' ? t(event.categoryKey as any) : t(event.categoryKey as any)}
            </span>
          </div>
        </div>
        
        <CardContent className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-4 text-[#240908]">{language === 'es' ? t(event.titleKey as any) : t(event.titleKey as any)}</h3>
          
          <div className="space-y-3 mb-6 flex-grow">
            <div className="flex items-start">
              <Calendar className="h-5 w-5 text-[#D4201A] mr-3 mt-0.5 flex-shrink-0" />
              <span>{event.date}</span>
            </div>
            
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-[#D4201A] mr-3 mt-0.5 flex-shrink-0" />
              <span>{event.location}</span>
            </div>
            
            <div className="flex items-start">
              <Clock className="h-5 w-5 text-[#D4201A] mr-3 mt-0.5 flex-shrink-0" />
              <span>{event.time}</span>
            </div>
          </div>
          
          <Button className="self-start mt-auto bg-[#240908] hover:bg-[#321614] w-full">
            <a 
              href={event.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full text-center"
            >
              {language === 'es' ? 'Inscripción' : t('registration')}
            </a>
          </Button>
        </CardContent>
      </div>
    </Card>
  );

  return (
    <>
      <Header />
      
      <main className="py-12 bg-[#F3F1EB] min-h-screen">
        {/* Upcoming Events Section */}
        <section className="mb-16">
          <div className="container-praise">
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[#240908] mb-6">
                {language === 'es' ? 'Próximos Eventos' : 'Upcoming Events'}
              </h1>
              <p className="text-lg max-w-2xl mx-auto text-[#222222] mb-8">
                {language === 'es' 
                  ? 'Únete a nosotros para estos emocionantes eventos en Ministerios Praise Chapel. ¡Nos encantaría verte allí!'
                  : 'Join us for these exciting events at Praise Chapel Ministries. We\'d love to see you there!'}
              </p>

              {/* Filter Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-[#D4201A] text-white'
                        : 'bg-white border border-gray-300 text-[#222222] hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredUpcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Events;
