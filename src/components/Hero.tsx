import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  videoId?: string;
  videoSource?: 'youtube' | 'vimeo' | 'mp4';
  videoUrl?: string;
  height?: string;
  showScrollArrow?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink = '/',
  backgroundImage = 'https://images.unsplash.com/photo-1480742444427-f4bb0573e315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  backgroundPosition = 'top center',
  videoId,
  videoSource = 'youtube',
  videoUrl,
  height = "min-h-[70vh]",
  showScrollArrow = false,
}) => {
  return (
    <section 
      className={`relative bg-praise-dark text-white ${height} flex items-center overflow-hidden`}
      style={!videoId && !videoUrl ? {
        backgroundImage: `linear-gradient(rgba(36, 9, 8, 0.5), rgba(36, 9, 8, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition,
      } : {}}
    >
      {(videoId || videoUrl) && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-praise-dark opacity-50 z-10"></div>
          <div className="absolute inset-0 w-full h-full">
            {videoSource === 'youtube' ? (
              <iframe 
                className="absolute w-full h-full object-cover"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`}
                title="Background video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  pointerEvents: 'none'
                }}
              ></iframe>
            ) : videoSource === 'vimeo' ? (
              <iframe
                className="absolute w-full h-full object-cover"
                src={`https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&byline=0&title=0&playsinline=1`}
                allow="autoplay; fullscreen"
                allowFullScreen
                frameBorder="0"
                title="Background video"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  pointerEvents: 'none'
                }}
              ></iframe>
            ) : (
              <video
                className="absolute w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  pointerEvents: 'none'
                }}
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
      
      <div className="container-praise py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl mb-8 animate-slide-down" style={{ animationDelay: '0.2s' }}>
              {subtitle}
            </p>
          )}
          {buttonText && (
            <div className="animate-slide-down" style={{ animationDelay: '0.4s' }}>
              {videoId ? (
                <a 
                  href={`https://www.youtube.com/watch?v=${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white hover:bg-white hover:bg-opacity-20 transition-all px-6 py-3 rounded-md inline-block"
                >
                  {buttonText}
                </a>
              ) : (
                <Link 
                  to={buttonLink}
                  className="btn-primary inline-block"
                >
                  {buttonText}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      
      {showScrollArrow && (
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
          <div className="animate-bounce">
            <ChevronDown className="h-10 w-10 text-white opacity-80" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
