
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

interface AboutSectionProps {
  title?: string;
  content: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  content,
  buttonText,
  buttonLink = "/about-us",
  imageSrc = "https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
}) => {
  const { t } = useTranslation();
  
  return (
    <section className="section-padding bg-white">
      <div className="container-praise">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title">{title || t('aboutUsTitle')}</h2>
            <p className="mb-8 text-lg leading-relaxed">{content}</p>
            {buttonText && (
              <Link 
                to={buttonLink}
                className="btn-primary inline-block"
              >
                {buttonText}
              </Link>
            )}
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={imageSrc} 
                alt="About Praise Chapel" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
