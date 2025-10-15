import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionData {
  title: string;
  content: string;
}

interface AccordionSectionProps {
  title?: string;
  items: AccordionData[];
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, items }) => {
  return (
    <div className="w-full">
      {title && <h2 className="section-title text-center mb-12">{title}</h2>}
      
      <Accordion type="single" collapsible className="space-y-4">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
            <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-gray-50 font-medium">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 pt-2">
              <div className="text-base leading-relaxed">
                {item.content}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionSection;
