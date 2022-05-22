import { FC } from 'react';
import { Button } from './Button';
import Image from 'next/image';

export const Cta: FC = () => (
  <section className='flex py-[2rem] px-[1rem] flex-col min-h-[500px] items-center justify-center bg-primary-100' >
    <div className='flex flex-col items-center'>
      <Image src='/img/next_restaurant.png' width={626} height={344} alt='restaurant' />
      <h2 className='text-[2rem] text-center font-bold my-[2rem]'>
      飲食店を次世代に<br />進化させませんか？
      </h2>
      <a
        href='https://docs.google.com/forms/d/e/1FAIpQLSfcjEUEJRLp4uWoZwCYBI1jntmwOFryUk-KZWK1ZLXOY1MWjw/viewform?usp=sf_link'
        target={'_blank'}
        rel='noreferrer'
      >
        <Button text={'資料ダウンロード'} color={'brown'} />
      </a>
    </div>
  </section>
);
