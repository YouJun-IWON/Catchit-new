import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Accor = () => {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-[700px] sm:text-xl space-y-2 py-6'
    >
      <AccordionItem value='item-1'>
        <AccordionTrigger>캐칫(Catchit)은 어떤 서비스 인가요?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>캐칫 광고는 언제부터 할 수 있나요?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>캐칫 광고 가능 지역은 어디인가요?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-4'>
        <AccordionTrigger>
          캐칫 광고를 하려면 무엇을 준비해야 하나요?
        </AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Accor;
