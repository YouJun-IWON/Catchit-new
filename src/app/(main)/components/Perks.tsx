import { perks } from '@/constants/lending';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Perks = () => {
  return (
    <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6'>
      {perks.map((perk, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Perks;
