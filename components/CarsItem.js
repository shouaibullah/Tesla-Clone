import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/outline';

const CarsItem = ({ model, disc, link, buttonOne, buttonTwo, pic, Icon }) => {
  const scrollTobottom = () => {
    window.scrollTo({
      top: 700,
      behavior: 'smooth',
    });
  };
  return (
    <div className="relative h-screen">
      <Image src={pic} layout="fill" objectFit="cover" alt="" />
      <div className="flex flex-col justify-between items-center  h-full lg:pt-40 pt-36">
        <div className="flex flex-col items-center z-10 text-sm space-y-3">
          <h2 className="text-5xl text-zinc-600">{model}</h2>
          <p>
            {disc}
            <span className=" pl-2 underline cursor-pointer text-zinc-600 hover:text-black">
              {link}
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center  md:flex-row md:space-x-7 space-y-7 md:space-y-0 md:pb-16">
          <button className="bg-black opacity-70 text-white text-[12px] h-12 w-[26rem] rounded-full uppercase md:h-10 md:w-56">
            {buttonOne}
          </button>
          <button className="bg-white opacity-50 text-black text-[12px] h-12 w-[26rem] rounded-full uppercase md:h-10 md:w-56">
            {buttonTwo}
          </button>
          <ChevronDownIcon
            className="h-8 cursor-pointer md:hidden animate-bounce "
            onClick={scrollTobottom}
          />
        </div>
      </div>
    </div>
  );
};

export default CarsItem;
