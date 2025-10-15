import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ValueSection from '@/components/ValueSection';
import FlagSection from '@/components/FlagSection';
import EventsPreviewSection from '@/components/EventsPreviewSection';
import ConnectWithUsSection from '@/components/ConnectWithUsSection';
import { useTranslation } from '@/hooks/useTranslation';
import { Heart } from 'lucide-react';
import PageTitle from '@/components/PageTitle';

const Index = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <PageTitle title="Home" />
      <Header />
      
      <main className="bg-[#F3F1EB]">
        <Hero 
          title={t('praiseChapelMinistries')}
          subtitle={t('welcomeHome')}
          buttonText={t('watchNow')}
          buttonLink="https://www.youtube.com/@pc.ministries"
          videoSource="mp4"
          videoUrl="/lovable-uploads/video-hero-pcm.mp4"
          height="min-h-[65vh] md:min-h-[85vh]"
          showScrollArrow={true}
        />
        
        <AboutSection 
          title={t('aboutUsTitle')}
          content={t('aboutUsContent')}
          buttonText={t('learnMore')}
          buttonLink="/about-us"
          imageSrc="/lovable-uploads/about-us-home.webp"
        />
        
        <ValueSection />
        
        <EventsPreviewSection />
        
        <ConnectWithUsSection />
        
        <FlagSection />
        
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
              <h2 className="text-3xl font-bold mb-6 text-white">{t('givingSection.title')}</h2>
              <p className="text-white/90 mb-8 text-lg">
                {t('givingSection.content')}
              </p>
              <a 
                href="https://app.sharefaith.com/app/giving/halopays-4221"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-praise-primary hover:bg-praise-primaryHover text-white font-medium rounded"
              >
                <Heart className="h-5 w-5 mr-2" /> {t('givingSection.button')}
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
