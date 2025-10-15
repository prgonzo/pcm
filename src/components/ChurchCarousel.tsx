import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface CarouselImageProps {
  images: string[];
  className?: string;
  showIndicators?: boolean;
}

const ChurchCarousel: React.FC<CarouselImageProps> = ({
  images,
  className,
  showIndicators = true,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [carouselApi, setCarouselApi] = React.useState<any>(null);

  React.useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const handleSelect = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", handleSelect);
    return () => {
      carouselApi.off("select", handleSelect);
    };
  }, [carouselApi]);

  const handleDotClick = (index: number) => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <Carousel
        setApi={setCarouselApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem 
              key={index} 
              className="pl-2 md:pl-4 basis-full transition-opacity duration-300"
            >
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={image} 
                  alt={`Church image ${index + 1}`} 
                  className="w-full h-64 md:h-96 object-cover object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {showIndicators && images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeIndex === index ? "bg-praise-primary scale-125" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChurchCarousel;
