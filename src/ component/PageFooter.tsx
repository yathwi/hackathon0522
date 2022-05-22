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
          <div className='text-center'>
            <Image src='/img/logo.png' alt='logo' width={150} height={150} />
          </div>
          <h3 className='hidden text-center text-base tracking-widest text-white'>
            XXXX
          </h3>
          <div className='hidden'>
            <h4 className='mt-2 text-center text-base text-white'>＼ SNS でシェア ／</h4>
            <div className='mx-5 mt-2 grid grid-cols-3 grid-rows-1 content-center items-center justify-between gap-4'>
              <div className='mx-auto flex items-center rounded bg-white p-2'>
                <Image src='/img/facebook.png' alt='facebook' width={40} height={40} />
              </div>
              <div className='mx-auto flex items-center rounded bg-white p-2'>
                <Image src='/img/twitter.png' alt='twitter' width={40} height={40} />
              </div>
              <div className='mx-auto flex items-center rounded bg-white p-2'>
                <Image src='/img/line.png' alt='line' width={40} height={40} />
              </div>
            </div>
          </div>
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
