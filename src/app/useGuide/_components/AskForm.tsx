'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

const FormSchema = z.object({
  name: z.string().min(1, {
    message: '성함을 기입해주세요.',
  }),
  email: z
    .string()
    .min(1, {
      message: '이메일을 기입해주세요.',
    })
    .email({
      message: '이메일 형식에 맞게 기입해주세요.',
    }),
  title: z.string().min(1, {
    message: '제목을 기입해주세요.',
  }),
  description: z.string().min(1, {
    message: '내용을 기입해주세요.',
  }),
  agree: z.boolean().refine((value) => value === true, {
    message: '동의를 눌러주세요.',
  }),
});

const AskForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      title: '',
      description: '',
      agree: false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className='w-[800px] py-6 flex flex-col justify-center items-center gap-10'>
      <div className='text-center text-3xl font-bold'>무엇이든 물어보세요</div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full px-4 sm:w-1/2 space-y-6'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className='text-xl' placeholder='이름' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className='text-xl' placeholder='이메일' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className='text-xl' placeholder='제목' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder='내용'
                    className=' text-xl'
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='agree'
            render={({ field }) => (
              <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className='flex flex-col'>
                  <FormLabel>개인정보 수집 및 이용 동의</FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button className=' w-full text-xl' type='submit'>
            보내기
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AskForm;
