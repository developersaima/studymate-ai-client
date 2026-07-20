"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/common/SectionTitle";

export default function FAQ() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          title="Frequently Asked Questions"
          description="Everything you need to know about StudyMate AI."
        />

        <div className="mx-auto mt-14 max-w-3xl">

          <Accordion>

            <AccordionItem value="item-1">
              <AccordionTrigger>
                Is StudyMate AI free?
              </AccordionTrigger>

              <AccordionContent>
                Yes. You can start using the basic features completely free.
              </AccordionContent>
            </AccordionItem>


            <AccordionItem value="item-2">
              <AccordionTrigger>
                Can AI generate study plans?
              </AccordionTrigger>

              <AccordionContent>
                Yes. It generates personalized study plans based on your goals.
              </AccordionContent>
            </AccordionItem>


            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I chat with AI?
              </AccordionTrigger>

              <AccordionContent>
                Absolutely. The AI Assistant answers questions and provides explanations.
              </AccordionContent>
            </AccordionItem>

          </Accordion>

        </div>
      </Container>
    </section>
  );
}