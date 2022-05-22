import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MenuBar } from './svgr';

export const PageHeader: React.FC = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isOpenUserMenu, setOpenUserMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!isOpenMenu);
  };

  const handleUserMenu = () => {
    setOpenUserMenu(!isOpenUserMenu);
  };

  const menu = [
    {
      name: 'Top',
      path: '/#top',
    },
    {
      name: 'サービスについて',
      path: '/#about',
    },
    {
      name: '特徴',
      path: '/#strong',
    },
    {
      name: '利用の流れ',
      path: '/#flow',
    }
    
  ];

  

  return (
    <div className='flex items-center justify-between  border-b border-gray-100 bg-[#ffffff]'>
      <div className='flex items-center px-9'>
        <span className='text-primary-900 text-[2rem] font-cursive'>Root4you</span>
        <Link href='/noteIndex'>
          <a className='hover:opacity-50'>
            <Image src='/img/umakoko.png' alt='logo' width={100} height={100} />
          </a>
        </Link>
        <nav>
          <ul className='ml-24 hidden gap-6 md:flex '>
            {menu.map((item, index) => (
              <li
                key={index}
                className='px-6 py-8 text-base text-gray-900  hover:border-b-4  hover:opacity-70'
              >
                <Link href={item.path}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      

      {isOpenMenu ? (
        <div className='absolute top-0 right-0 z-10 flex min-h-fit  min-w-full flex-row'>
          <div className='basis-1/2'></div>
          <div className='basis-1/2 pt-20 pr-4'>
            <ul className=' border-l bg-primary-50 text-center '>
              <li className='border-b border-t border-r p-2'>
                <button onClick={handleMenu} className='font-bold'>
                  close
                </button>
              </li>
              {menu.map((item, index) => (
                <li key={index} className='border-b border-r p-2  text-gray-900'>
                  <Link href={item.path}>
                    <a onClick={handleMenu}>{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
      <div className='flex p-4 sm:hidden'>
    
        <button onClick={handleMenu} className='px-2'>
          <MenuBar />
        </button>
      </div>
     
    </div>
  );
};