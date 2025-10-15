import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

const ContactUs = () => {
  const { language } = useTranslation();
  
  const churches = [
    {
      name: "Pittsburg",
      address: "293 Alves Ln, Bay Point, CA 94565",
      phone: "(925) 248-3250",
      email: "getconnected.pcbai@gmail.com",
      pastors: "Scott & Raquel Fosenburg",
      serviceTimes: language === 'es' ? "Domingo @ 10 AM, Miércoles @ 7 PM" : "Sunday @ 10 AM, Wednesday @ 7 PM",
      link: "/churches/pittsburg",
      flag: "🇺🇸"
    },
    {
      name: "San Francisco",
      address: "San Juan Ave, San Francisco, CA 94112",
      phone: "(415) 282-9173",
      email: "jesusmovementsf@gmail.com",
      pastors: "Nick & Angelica Bogdanoff",
      serviceTimes: language === 'es' ? "Domingo @ 4:15 PM" : "Sunday @ 4:15 PM",
      link: "/churches/san-francisco",
      flag: "🇺🇸"
    },
    {
      name: "Oakley",
      address: "Contact for more info",
      phone: "(925) 949-3202",
      email: "Nic93r@gmail.com",
      pastors: "Nic & Paola Rosales",
      serviceTimes: language === 'es' ? "Domingo @ 5:00 PM" : "Sunday @ 5:00 PM",
      link: "/churches/oakley",
      flag: "🇺🇸"
    },
    {
      name: language === 'es' ? "España" : "Spain",
      address: "Hotel Sercotel Caspe: C/ de Casp, 103, L'Eixample, 08013 Barcelona",
      phone: "+34 691 79 65 94",
      email: "pcm.thegatheringplace@gmail.com",
      pastors: "Ralph & Wendi Gonzales",
      serviceTimes: language === 'es' ? "Domingo @ 11 AM" : "Sunday @ 11 AM",
      link: "/churches/spain",
      flag: "🇪🇸"
    },
    {
      name: "India",
      address: "Lakkuvarithota, mogalthur or Linepallavapalem, perupalem South",
      phone: "(+91) 6300183809",
      email: "satishkondeti99@gmail.com",
      pastors: "Satish & Laffi Kumar",
      serviceTimes: language === 'es' ? "Domingo @ 10:00 AM, 11:00 AM, 7:00 PM" : "Sunday @ 10:00 AM, 11:00 AM, 7:00 PM",
      link: "/churches/india",
      flag: "🇮🇳"
    }
  ];

  return (
    <>
      <Header />
      
      <main className="bg-white">
        <div className="container-praise py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            {language === 'es' ? 'Contáctanos' : 'Contact Us'}
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">
                {language === 'es' ? 'Oficina Internacional' : 'International Office'}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mt-1 mr-4 h-5 w-5 text-praise-primary flex-shrink-0" />
                  <p className="text-lg">293 Alves Ln Bay Point, CA 94565</p>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mt-1 mr-4 h-5 w-5 text-praise-primary flex-shrink-0" />
                  <p className="text-lg">(925) 248-3250</p>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mt-1 mr-4 h-5 w-5 text-praise-primary flex-shrink-0" />
                  <p className="text-lg">getconnected.pcbai@gmail.com</p>
                </div>
                
                <div className="flex items-start">
                  <Clock className="mt-1 mr-4 h-5 w-5 text-praise-primary flex-shrink-0" />
                  <div>
                    <p className="text-lg font-medium">
                      {language === 'es' ? 'Horario de Oficina:' : 'Office Hours:'}
                    </p>
                    <p className="text-lg">
                      {language === 'es' 
                        ? 'Lunes a Viernes de 8 a.m. a 5 p.m.' 
                        : 'Monday-Friday from 8 a.m. to 5 p.m.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    {language === 'es' ? 'Nombre' : 'Name'}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-praise-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    {language === 'es' ? 'Correo electrónico' : 'Email'}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-praise-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    {language === 'es' ? 'Asunto' : 'Subject'}
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-praise-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    {language === 'es' ? 'Mensaje' : 'Message'}
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-praise-primary"
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="bg-praise-primary hover:bg-praise-primaryHover text-white font-medium px-6 py-3 rounded transition-colors duration-300"
                >
                  {language === 'es' ? 'Enviar mensaje' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
          
          {/* Our Churches Section */}
          <div className="my-16">
            <h2 className="text-3xl font-bold text-center mb-10">
              {language === 'es' ? 'Nuestras Iglesias' : 'Our Churches'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {churches.map((church, index) => (
                <div key={index} className="bg-praise-bg p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2">{church.flag}</span>
                    <h3 className="text-xl font-bold">Praise Chapel {church.name}</h3>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-praise-primary mt-1 mr-2 flex-shrink-0" />
                      <p className="text-sm">{church.address}</p>
                    </div>
                    
                    {church.phone && (
                      <div className="flex items-start">
                        <Phone className="h-4 w-4 text-praise-primary mt-1 mr-2 flex-shrink-0" />
                        <p className="text-sm">{church.phone}</p>
                      </div>
                    )}
                    
                    {church.email && (
                      <div className="flex items-start">
                        <Mail className="h-4 w-4 text-praise-primary mt-1 mr-2 flex-shrink-0" />
                        <p className="text-sm">{church.email}</p>
                      </div>
                    )}
                    
                    <div className="flex items-start">
                      <Clock className="h-4 w-4 text-praise-primary mt-1 mr-2 flex-shrink-0" />
                      <p className="text-sm">{church.serviceTimes}</p>
                    </div>
                  </div>
                  
                  <Link to={church.link} className="text-praise-primary hover:underline flex items-center text-sm">
                    {language === 'es' ? 'Visitar página de la iglesia' : 'Visit Church Page'} 
                    <ExternalLink className="h-3.5 w-3.5 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Google Map */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-6">
              {language === 'es' ? 'Encuéntranos' : 'Find Us'}
            </h2>
            
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.9040225798835!2d-122.02308668400997!3d38.02914517971083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808560861e5e904f%3A0x6a3b95f06b6a15c0!2s293%20Alves%20Ln%2C%20Bay%20Point%2C%20CA%2094565%2C%20USA!5e0!3m2!1sen!2ses!4v1650458863648!5m2!1sen!2ses" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Praise Chapel Location"
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ContactUs;
