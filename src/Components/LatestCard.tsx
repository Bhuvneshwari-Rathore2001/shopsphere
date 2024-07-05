import { FaPlus } from 'react-icons/fa';
type latestCardProps = {
  productId?: string;
  photo: string;
  name: string;
  desc: string;
  price: number;
  stock: number;
  handler: () => void;
};
const LatestCard = ({
  // productId,
  photo,
  name,
  desc,
  price,
  // stock,
  handler,
}: latestCardProps) => {
  return (
    // <section className='relative group'>
    //   <div className='flex flex-col  gap-0 relative w-auto h-auto group'>
    //     <div className='bg-yellow-600 h-48 w-[350px]'></div>
    //     <div className='bg-gray-800 h-52 w-[350px]'></div>
    //   </div>

    //   <div className='flex flex-col gap-0 absolute top-0 left-0 bottom-0 p-[6px] w-full h-full leading-3'>
    //     <img src={photo} alt='macbook' className='object-fill h-52' />
    //     <p className='font-semibold text-sm items-center justify-center flex text-gray-100'>
    //       {name}
    //     </p>
    //     <p className='text-sm items-center justify-center flex text-gray-200'>
    //       {desc}
    //     </p>
    //     <p className='font-semibold text-sm items-center justify-center flex text-gray-100'>
    //       {price}
    //     </p>
    //   </div>
    //   <div className='absolute top-0 left-0 bg-[#0000006b] h-full w-full opacity-0  group-hover:opacity-100 flex items-center justify-center'>
    //     <button
    //       onClick={() => handler()}
    //       className='flex bg-gray-800 hover:rotate-45 transition-all h-12 w-12 rounded-full items-center justify-center text-base'
    //     >
    //       <FaPlus />
    //     </button>
    //   </div>
    // </section>

    <>
      
        <div className='w-72 border-purple-400 border-2 shadow-[8px_8px_0px_0px_rgb(168,85,247)] pb-5 relative group'>
          <div className='flex flex-col gap-1  p-[3px] w-full h-full leading-3'>
            <img src={photo} alt='macbook' className='object-fill h-52' />
            <div className='flex flex-col gap-2 mt-4 px-5'>
              <p className='font-bold text-md items-center justify-center flex text-gray-700'>
                {name}
              </p>
              <p className='text-sm items-center justify-center flex text-gray-800'>
                {desc}
              </p>
              <p className='font-bold text-md items-center justify-center flex text-gray-800'>
               ${price}
              </p>
            </div>
          </div>
          <div className='absolute top-0 left-0 bg-transparent h-full w-full opacity-0  group-hover:opacity-100 flex items-center justify-center'>
            <button
              onClick={() => handler()}
              className='flex bg-purple-500 hover:rotate-45 transition-all h-12 w-12 rounded-full items-center justify-center text-base'
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </>
    
  );
};

export default LatestCard;
