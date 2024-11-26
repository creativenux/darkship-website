import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function Faq() {
    return (
        <section id="faq" className="w-full text-white py-16 md:py-24 lg:py-32 bg-purple-900">
          <div className="container md:w-2/3 mx-auto px-4 md:px-6">
            <h2 className="text-3xl text-center mb-5 font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>1. What services do you offer?</AccordionTrigger>
                <AccordionContent>
                  <p>We offer podcast recording, production, post-production services, and consultation for content creation.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>2. How can I book a session?</AccordionTrigger>
                <AccordionContent>
                  <p>You can book a session by clicking the Book a Session button on our homepage or contacting us directly.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>3. Do I need to bring my own equipment?</AccordionTrigger>
                <AccordionContent>
                  <p>No, we provide all the necessary equipment for recording and production.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>4. Can I get help with editing my podcast?</AccordionTrigger>
                <AccordionContent>
                  <p>Yes, we offer professional editing and post-production services to enhance your podcast.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>5. What are your rates?</AccordionTrigger>
                <AccordionContent>
                  <p>Please contact us for detailed pricing information based on your specific needs.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
    )
}