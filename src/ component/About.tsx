import Image from "next/image"

export const About: React.FC = () =>(
  <div id="about" className=" text-center py-8 text-primary-900">
    <div className=" max-w-[95%] mx-auto " >
    <Image src="/img/light1.png" width={30} height={30} alt="light" />
      <h2 className=" text-lg font-bold">良いサービスに投げ銭を</h2>
      <div className=" text-gray-900 mt-5">
        <p>Root4youではお客様から「投げ銭」を受け取ることで、従業員の労働環境改善やお店の新しい価値を生み出すことを支援いたします。</p>
      </div>
   </div>
  </div>
) 