import Image from "next/image";
interface parts {
  title: string;
  src: string;
  alt: string;
  content: string;
}

const Items: parts[] = [
  {
    title: 'スタッフの働く意欲向上',
    src: '/img/motivation.png',
    alt: 'motivation',
    content:
      '従業員は自分のサービスレベルが金銭に直結するので、モチベーションの向上に繋がります。',
  },
  {
    title: 'リピーターの増加',
    src: '/img/repeater.png',
    alt: "repeater",
    content:
      '食事やサービスだけでなく、「人」に対してファンがつくことで新しいリピーターを見込めます。',
   
  },
  {
    title: '店舗の利用手数料は0円',
    src: '/img/margin.png',
    alt: 'margin',
    content:
      '導入にあたって店舗側に金銭的負担は一切ありません。お申し込みから最短○日後からご利用いただけます。',
  },

];
export const StrongPoint:React.FC = () => (
    <div>
    <div id='strong' className=' py-10 bg-primary-50'>
      <div className='mx-auto max-w-[90%]'>
      <h2 className = 'text-center text-lg text-primary-900 my-2'>
      <span className='border-b tracking-widest	 highlight font-bold'>
      3つのメリット
      </span>
      </h2>
        <div className='grid-cols-3  pc:grid'>
          {Items.map((item, i) => {
            return (
              <div key={i} className='pb-10'>
                <div className=' mx-auto h-[32rem] w-80 rounded-md border border-gray-100 shadow bg-white text-center'>
                <p className=' text-lg font-bold pt-5 px-5'>{item.title}</p>
                  <div className=' pt-5'>
                    <Image src={item.src} alt={item.alt} width={280} height={280} />
                  </div>
                    <p className='mt-5 px-5   text-left'>{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    </div>
  )
