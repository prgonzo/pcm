import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

interface ValueItemProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ValueItem: React.FC<ValueItemProps> = ({ title, description, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <Card 
      className="overflow-hidden transition-all duration-300 h-[400px] relative border-none shadow-md hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 w-full h-full">
        {!imageLoaded && (
          <Skeleton className="w-full h-full" />
        )}
        <img 
          src={imageSrc} 
          alt={title}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'scale-110 blur-[1px]' : 'scale-100'
          }`}
        />
        
        {/* Gradiente suave desde abajo hacia arriba, usando color rojo oscuro y con difuminado sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-praise-dark/90 via-praise-dark/20 to-transparent"></div>
      </div>
      
      {/* Contenido con posición absoluta y altura fija para alinear títulos */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <div className="flex flex-col justify-end">
          {/* Título con altura fija para garantizar alineación */}
          <div className="h-[60px] flex items-end">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
          <div className="h-[80px] mt-3">
            <p className="text-white/90 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

const ValueSection = () => {
  const { t } = useTranslation();

  const values = [
    {
      title: t('win'),
      description: t('winDescription'),
      imageSrc: "/lovable-uploads/win.jpeg",
    },
    {
      title: t('build'),
      description: t('buildDescription'),
      imageSrc: "/lovable-uploads/build.jpg",
    },
    {
      title: t('send'),
      description: t('sendDescription'),
      imageSrc: "/lovable-uploads/send.jpg",
    },
  ];

  return (
    <section className="section-padding bg-praise-bg">
      <div className="container-praise">
        <div className="text-center mb-16">
          <h2 className="section-title mb-3">{t('ourVision')}</h2>
          <p className="max-w-2xl mx-auto text-lg text-praise-text/80">
            {t('visionDescription')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueItem 
              key={index}
              title={value.title}
              description={value.description}
              imageSrc={value.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
