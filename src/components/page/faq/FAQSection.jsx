// import BodyText from "@/components/typography/BodyText"
// import Heading from "@/components/typography/Heading";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
import BodyText from "../../typography/BodyText";
import Heading from "../../typography/Heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

export default function FAQSection({ data }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Heading
        tag="h2"
        variant="h2"
        className="text-app-dark mb-10 text-center"
      >
        {data?.data?.section_title}
      </Heading>
      <BodyText
        tag="p"
        variant="body-2"
        className="text-app-dark/80 text-center"
      >
        {data?.data?.description}
      </BodyText>
      <div className="mt-[60px] bg-[#2A2A2C0D] p-[30px] rounded-2xl">
        <Accordion collapsible className="space-y-4">
          {data?.data?.faq_items.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="border-b border-gray-200"
            >
              <AccordionTrigger className="flex justify-between cursor-pointer py-5">
                <BodyText tag="span" variant="lead-2" className="text-app-gray">
                  {index + 1}. {faq.question}
                </BodyText>
              </AccordionTrigger>
              <AccordionContent className="pt-0">
                <BodyText
                  tag="span"
                  variant="body-2"
                  className="text-app-dark/80"
                >
                  {" "}
                  {faq.answer}
                </BodyText>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
