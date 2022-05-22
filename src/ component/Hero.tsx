import Image from 'next/image';
import {Check } from './svgr';

export const Hero: React.FC = () => (
  <div id='top' className='bg-primary-50'>
    <div className='relative  text-center'>
      <Image src='/img/Hero.png' alt='hero' width={996} height={664} />
      <h1 className='absolute text-left  bottom-4  text-lg md:right-1/4 md:text-[64px] ml-2'>
        <span className=' text-white'>
    頑張る人が<br/>報われる飲食店<br/>投げ銭という新たな応援の形
        </span>
      </h1>
    </div>

      <h2 id='about' className = 'text-center text-lg text-primary-900 mt-6'>
      <span className='border-b tracking-widest	 highlight font-bold'>
      こんな課題ありませんか？
      </span>
      </h2>
      <div className='relative mx-auto w-[80%] mt-6'>
        <div className='flex mx-auto items-center w-fit ml-6'>
          <Check/><li className = 'list-none text-gray-900 font-bold'>優秀な人材が定着しない</li>
        </div>
        <div className='flex mr-auto items-center w-fit ml-6'>
          <Check/><li className='list-none text-gray-900 font-bold'>リピーターが増えない</li>
        </div>
        <div className='text-center mt-6'>
        <Image src='/img/Polygon 3.png' alt='hero' width={80} height={36} />
        </div>
        <h2 className = 'text-center text-base text-primary-900 mt-2 py-4'>
          <span className='border-b tracking-tighter highlight font-bold text-[20px]'>
        「Root4you」で解決できます！
          </span>
        </h2>
      </div>
   
    
  </div>
);
