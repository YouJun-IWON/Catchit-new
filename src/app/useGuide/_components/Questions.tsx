import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Accor from './Accor';
import AskForm from './AskForm';

const Questions = () => {
  return (
    <div className='flex items-center justify-center'>
      <Tabs defaultValue='question' className='w-full sm:w-[800px]'>
        <TabsList className='grid bg-white h-fit w-full  grid-cols-2'>
          <TabsTrigger
            className='text-xl data-[state=active]:bg-gray-300'
            value='question'
          >
            자주하는 질문
          </TabsTrigger>
          <TabsTrigger
            className='text-xl data-[state=active]:bg-gray-300'
            value='ask'
          >
            1:1 문의하기
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className='max-sm:px-4 flex items-center justify-center'
          value='question'
        >
          <Accor />
        </TabsContent>
        <TabsContent className='flex items-center justify-center' value='ask'>
          <AskForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Questions;
