
"use client"; 

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import faqList from "./faq";


export default function FaqSectionOne() {
  return (
    <Accordion type="single" collapsible className="w-2/5 md:w-4/5 sm:w-full bg-white">
      {faqList.map(faq => (
        <AccordionItem key={faq.id} value={`item-${faq.id}`} className="border-b">
          <AccordionTrigger className="p-4 text-lg font-medium">{faq.question}</AccordionTrigger>
          <AccordionContent className="p-4">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

}
