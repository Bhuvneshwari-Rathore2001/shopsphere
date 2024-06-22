import { FaPlus } from 'react-icons/fa';
type ProductsProps = {
  productId?: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};
const ProductCard = ({
  productId,
  photo,
  name,
  price,
  stock,
  handler,
}: ProductsProps) => {
  return (
    <div className='w-72 h-96 p-4 flex flex-col  gap-1 float-start items-center relative bg-white group'>
      <img alt='{name}' src={photo} className='h-60 w-60 object-cover m-4' />
      <p>{name}</p>
      <span className='font-bold text-base'>{price}</span>

      <div className='absolute top-0 left-0 bg-[#0000006b] h-full w-full opacity-0  group-hover:opacity-100 flex items-center justify-center'>
        <button
          onClick={() => handler()}
          className='flex bg-[#006888] hover:rotate-45 transition-all h-12 w-12 rounded-full items-center justify-center text-base'
        >
          <FaPlus />
        </button>
      </div>
    </div>



    
  );
};

export default ProductCard;
