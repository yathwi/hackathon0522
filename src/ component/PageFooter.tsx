import Image from 'next/image';

export const PageFooter: React.FC = () => {
  const footerMenu = {
    legal: [
      {
        name: '利用規約',
        path: '/',
      },
    ],
    links: [
      {
        name: 'Twitter',
        path: '/',
      },
    ],
  };
  return (
    <footer>
      <div className=' bg-gray-900 px-8'>
        <div className='items-end justify-between gap-10 border-b-2 border-white py-8 md:flex'>

          <h3 className='hidden text-center text-base tracking-widest text-white'>
            XXXX
          </h3>

        </div>
        <div className='mt-10 justify-start gap-52 md:flex'>
          <div>
            <h4 className='mt-4 text-base font-bold text-white'>Legal</h4>
            <ul className='md:mt-4'>
              {footerMenu.legal.map((item, index) => (
                <li key={index} className=' text-base text-white  hover:opacity-70'>
                  <a href={item.path} target='_blank' rel='noopener noreferrer'>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='mt-4 text-base font-bold text-white'>Links</h4>
            <ul className='md:mt-4'>
              {footerMenu.links.map((item, index) => (
                <li key={index} className=' text-base text-white  hover:opacity-70'>
                  <a href={item.path} target='_blank' rel='noopener noreferrer'>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h4 className='py-8 text-center text-base text-white'>
          ©️ 2022, XXXX, All right reserved.
        </h4>
      </div>
    </footer>
  );
};
