import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';
import { Book, Heart, Star, Globe, RefreshCw, Users } from 'lucide-react';

const NewBeliever = () => {
  const { t, language } = useTranslation();

  const scriptureCards = [
    {
      reference: language === 'es' ? t('scripture1Reference') : "John 5:24",
      text: language === 'es' ? t('scripture1Text') : "You've been forgiven for all your sins and granted eternal life",
      icon: <Heart className="h-8 w-8 text-praise-primary mb-3" />
    },
    {
      reference: language === 'es' ? t('scripture2Reference') : "John 1:12-13",
      text: language === 'es' ? t('scripture2Text') : "You've become a child of God",
      icon: <Users className="h-8 w-8 text-praise-primary mb-3" />
    },
    {
      reference: language === 'es' ? t('scripture3Reference') : "Romans 10:13",
      text: language === 'es' ? t('scripture3Text') : "You've been saved",
      icon: <Star className="h-8 w-8 text-praise-primary mb-3" />
    },
    {
      reference: language === 'es' ? t('scripture4Reference') : "Ephesians 1:13-14",
      text: language === 'es' ? t('scripture4Text') : "You've been indwelt and sealed with the Holy Spirit of promise",
      icon: <Book className="h-8 w-8 text-praise-primary mb-3" />
    },
    {
      reference: language === 'es' ? t('scripture5Reference') : "John 3:3-5",
      text: language === 'es' ? t('scripture5Text') : "You've been born again",
      icon: <RefreshCw className="h-8 w-8 text-praise-primary mb-3" />
    },
    {
      reference: language === 'es' ? t('scripture6Reference') : "Philippians 3:17-20",
      text: language === 'es' ? t('scripture6Text') : "You've become a citizen of the Kingdom of God",
      icon: <Globe className="h-8 w-8 text-praise-primary mb-3" />
    }
  ];

  const nextSteps = [
    language === 'es' ? t('step1') : "Get water baptized.",
    language === 'es' ? t('step2') : "Be discipled by someone.",
    language === 'es' ? t('step3') : "Seek to be baptized with the Holy Spirit.",
    language === 'es' ? t('step4') : "Develop a strong personal walk with God by being spiritually disciplined in the following 5 areas: 1) Daily Bible reading and prayer. 2) Go to church. 3) Fellowship with other believers. 4) Share your faith. 5) Give unto the Lord."
  ];

  return (
    <>
      <Header />
      
      <main className="bg-[#F3F1EB]">
        {/* Hero Section */}
        <section 
          className="bg-cover bg-center min-h-[60vh] flex items-center justify-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(36, 9, 8, 0.7), rgba(36, 9, 8, 0.7)), url(/lovable-uploads/newbeliever.jpg)` 
          }}
        >
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {language === 'es' ? t('newBelieverTitle') : "New Believer"}
            </h1>
            <p className="text-xl md:text-2xl">
              {language === 'es' ? t('welcomeToFamily') : "Welcome to the family of God!"}
            </p>
          </div>
        </section>
        
        {/* Party Section */}
        <section className="py-16">
          <div className="container-praise max-w-4xl">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
              {language === 'es' ? t('youCausedAParty') : "You Caused a "} 
              <span className="text-[#D4201A]">
                {language === 'es' ? '' : "Party"}
              </span>
            </h2>
            
            <div className="text-center text-[#222222] text-lg space-y-6">
              <p>
                {language === 'es' ? t('partyText1') : 
                  "Whether you realize it or not, you caused a party in Heaven when you gave your life to Christ. Jesus said, \"Likewise, I say to you, there is joy in the presence of the angels of God over one sinner who repents\" (Luke 15:10)."}
              </p>
              <p>
                {language === 'es' ? t('partyText2') : 
                  "According to the Bible, the moment you received Jesus Christ into your life as your Lord and Savior, the following things have taken place in your life:"}
              </p>
            </div>
          </div>
        </section>
        
        {/* Scripture Cards */}
        <section className="py-12">
          <div className="container-praise">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scriptureCards.map((card, index) => (
                <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#D4201A]">{card.reference}</h3>
                    <p className="text-[#222222]">{card.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* New Creation Section */}
        <section className="py-16">
          <div className="container-praise max-w-4xl">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
              {language === 'es' ? t('newCreation') : "New"} 
              <span className="text-[#D4201A]">
                {language === 'es' ? '' : " Creation"}
              </span>
            </h2>
            
            <div className="text-center text-[#222222] text-lg">
              <p>
                {language === 'es' ? t('newCreationText') : 
                  "You have been made completely new! \"Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new.\" (2 Corinthians 5:17)."}
              </p>
            </div>
          </div>
        </section>
        
        {/* What's Next Section */}
        <section 
          className="py-16 bg-cover bg-center" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(36, 9, 8, 0.5), rgba(36, 9, 8, 0.5)), url(/lovable-uploads/whatsnext.jpg)` 
          }}
        >
          <div className="container-praise max-w-4xl text-white">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 text-white">
              {language === 'es' ? t('whatsNext') : "What's"} 
              <span className="text-white">
                {language === 'es' ? '' : " Next?"}
              </span>
            </h2>
            
            <div className="text-center text-lg mb-10">
              <p>
                {language === 'es' ? t('whatsNextText') : 
                  "After getting saved and starting a new life in Christ, you may be wondering what to do next. We believe the four immediate actions that you need to take are:"}
              </p>
            </div>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-10">
              <CardContent className="p-6">
                <ol className="space-y-4 pl-6 list-decimal">
                  {nextSteps.map((step, index) => (
                    <li key={index} className="text-lg text-white">{step}</li>
                  ))}
                </ol>
              </CardContent>
            </Card>
            
            <div className="mt-8 text-center">
              <p className="mb-2">{language === 'es' ? t('contactForBaptism') : "If you want to get water baptized contact us!"}</p>
              <p className="mb-2">{language === 'es' ? t('callOrText') : "Call or Text: (925) 248-3250"}</p>
              <p>{language === 'es' ? t('email') : "E-mail:"} <a href="mailto:getconnected.pcbai@gmail.com" className="text-[#D4201A] hover:underline">getconnected.pcbai@gmail.com</a></p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default NewBeliever;
