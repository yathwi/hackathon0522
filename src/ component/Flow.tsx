import Image from 'next/image';
import {Check } from './svgr';

export const Flow: React.FC = () => {

  const StepText = [{
    title:'Step1',
    subtitle:'利用申込',
    description:'ページ上部の「利用申込」をクリック。お店の基本情報や従業員のプロフィールなどを入力して送信します。'
  },
  {
    title:'Step2',
    subtitle:'QRコード受取',
    description:'運営が情報を確認して従業員のプロフィールページを用意し、QRコードを発行します。運営から送付されたQRコードをお店に配置しましょう。'
  },{
    title:'Step3',
    subtitle:'スキャン・送金',
    description:'来店されたお客様が気になる従業員のQRコードをスキャン。プロフィールを確認して指定した金額を送金します。'
  },{
    title:'Step4',
    subtitle:'お振込',
    description:'従業員への振り込みは月に1回。最低振込額1000円から対応可能です。'
  },
];

  return (

    <div className='mb-4' id='flow'>
      <h2 className = 'text-center text-lg text-primary-900 mt-6'>
      <span className='border-b tracking-widest	 highlight font-bold'>
      ご利用の流れ
      </span>
      </h2>
      <div className='relative mx-auto w-[90%] mt-6'>
        {
          StepText.map((item,index) => (
          <div key={index} >
            <div className='flex mr-auto w-fit ml-6 items-center gap-4 bg-primary-50 px-4 py-2 '>
              <h3 className = 'w-[100px] text-[20px] text-gray-900 font-bold'>{item.title}</h3><li className = 'list-none text-gray-900 text-base w-[165px]'>{item.subtitle}</li>
            </div>
            <p className ='text-base py-4 px-6'>
              {item.description}
            </p>
            {
              index === StepText.length-1 ? null :
                <div className='text-center my-2'>
                <Image src='/img/Polygon 3.png' alt='hero' width={40} height={18} />
              </div>
            }
          
          </div>
          ))
        }
        
      </div>
  </div>
)};
