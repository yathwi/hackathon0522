import * as React from 'react';
import { SVGProps } from 'react';

export const MenuBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-8 w-8'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
    {...props}
  >
    <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
  </svg>
);

export const User = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-8 w-8'
    viewBox='0 0 20 20'
    fill='currentColor'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-7 9a7 7 0 1 1 14 0H3z'
      clipRule='evenodd'
    />
  </svg>
);

export const Pen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-5 w-5'
    viewBox='0 0 20 20'
    fill='currentColor'
    {...props}
  >
    <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
  </svg>
);

export const Trash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-6 w-6 '
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
    />
  </svg>
);

export const Tag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-5 w-5'
    viewBox='0 0 20 20'
    fill='currentColor'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z'
      clipRule='evenodd'
    />
  </svg>
);

export const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg width="25" height="17" viewBox="0 0 45 34" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.4559 33.9974C17.5423 33.6626 13.3119 24.2132 0 12.2347C12.2098 13.9491 17.4559 21.4985 17.4559 21.4985C17.4559 21.4985 29.1931 4.39385 44.9999 0C40.0652 5.117 33.5382 9.93844 29.1546 15.4138C24.5919 21.1662 20.6697 27.3974 17.4559 33.9974Z" fill="#B0484B"/>
  </svg>
  
);
