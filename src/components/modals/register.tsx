'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { useModal } from '@/hooks/use-modal-store';

import { Dialog, DialogContent } from '@/components/ui/dialog';
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
import { Checkbox } from '../ui/checkbox';

import { useState } from 'react';
import PostCode from '../PostCode';

const FormSchema = z.object({
  postcode: z.string().min(2, {
    message: '우편번호를 기입해주세요.',
  }),
  address: z.string().min(2, {
    message: '주소를 기입해주세요.',
  }),
  detail: z.string().min(2, {
    message: '상세 주소를 기입해주세요.',
  }),
  name: z.string().min(2, {
    message: '성함을 기입해주세요.',
  }),
  phone: z.string().min(2, {
    message: '전화번호를 기입해주세요.',
  }),
  agree: z.boolean().refine((value) => value === true, {
    message: '동의를 눌러주세요.',
  }),
});

const Register = () => {
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === 'register';

  const [popup, setPopup] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      postcode: '',
      address: '',
      detail: '',
      name: '',
      phone: '',
      agree: false,
    },
  });

  console.log('ppoo', form.getValues().postcode);
  console.log('getget', form.getValues().address);

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
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className='flex flex-col items-center justify-center py-10 sm:py-20 px-4 gap-10 overflow-y-auto'>
        <div className='text-2xl sm:text-3xl font-bold text-center'>
          <p>
            우리동네 매장 광고
            <br />
            가장 먼저 시작하고 혜택 누리세요!
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=' sm:w-3/4 space-y-6'
          >
            <div className='flex gap-4'>
              <FormField
                control={form.control}
                name='postcode'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className='text-xl'
                        placeholder='우편번호'
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type='button' onClick={() => setPopup(!popup)}>
                우편번호 검색
              </Button>
              {popup && <PostCode setValue={form.setValue} />}
            </div>

            <FormField
              control={form.control}
              name='address'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className='text-xl' placeholder='주소' {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='detail'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className='text-xl'
                      placeholder='상세주소'
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

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
              name='phone'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='전화번호'
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

            <div>
              <Button className=' w-full text-xl' type='submit'>
                상담 신청하기
              </Button>

              <p className='text-gray-500 mt-1 text-center '>
                담당자 배정 후 평균 1~2일 내로 연락드려요 :)
              </p>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default Register;
