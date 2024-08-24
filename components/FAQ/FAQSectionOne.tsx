"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Faq } from "@/types/faq";
import { useTranslations } from "next-intl";

export default function FaqSectionOne() {
  "use client";

  const t = useTranslations();

  const faqListLocal: Faq[] = [
    {
      id: "0",
      question: t("faq.faqSectionOne.question0"),
      answer: t("faq.faqSectionOne.answer0"),
    },
    {
      id: "1",
      question: t("faq.faqSectionOne.question1"),
      answer: t("faq.faqSectionOne.answer1"),
    },
    {
      id: "2",
      question: t("faq.faqSectionOne.question2"),
      answer: t("faq.faqSectionOne.answer2"),
    },
    {
      id: "3",
      question: t("faq.faqSectionOne.question3"),
      answer: t("faq.faqSectionOne.answer3"),
    },
    {
      id: "4",
      question: t("faq.faqSectionOne.question4"),
      answer: t("faq.faqSectionOne.answer4"),
    },
    {
      id: "5",
      question: t("faq.faqSectionOne.question5"),
      answer: t("faq.faqSectionOne.answer5"),
    },
    {
      id: "6",
      question: t("faq.faqSectionOne.question6"),
      answer: t("faq.faqSectionOne.answer6"),
    },
    {
      id: "7",
      question: t("faq.faqSectionOne.question7"),
      answer: t("faq.faqSectionOne.answer7"),
    },
    {
      id: "8",
      question: t("faq.faqSectionOne.question8"),
      answer: t("faq.faqSectionOne.answer8"),
    },
    {
      id: "9",
      question: t("faq.faqSectionOne.question9"),
      answer: t("faq.faqSectionOne.answer9"),
    },
    {
      id: "10",
      question: t("faq.faqSectionOne.question10"),
      answer: t("faq.faqSectionOne.answer10"),
    },
    {
      id: "11",
      question: t("faq.faqSectionOne.question11"),
      answer: t("faq.faqSectionOne.answer11"),
    },
    {
      id: "12",
      question: t("faq.faqSectionOne.question12"),
      answer: t("faq.faqSectionOne.answer12"),
    },
    {
      id: "13",
      question: t("faq.faqSectionOne.question13"),
      answer: t("faq.faqSectionOne.answer13"),
    },
    {
      id: "14",
      question: t("faq.faqSectionOne.question14"),
      answer: t("faq.faqSectionOne.answer14"),
    },
  ];

  return (
    <Accordion
      type="single"
      collapsible
      className="w-4/5 bg-white sm:w-full md:w-4/5"
    >
      {faqListLocal.map((faq) => (
        <AccordionItem
          key={faq.id}
          value={`item-${faq.id}`}
          className="border-b"
        >
          <AccordionTrigger className="p-4 text-lg font-medium">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="p-4">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
