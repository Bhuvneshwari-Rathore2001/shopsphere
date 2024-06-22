import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";


type cartItemProps = {
  photo:string;
  productId:string;
  name:string;
  price:number;
  quantity:number;
  stock:number;
};

const CartItem = (item : cartItemProps) => {
  return (
    <div className='p-8 flex float-start justify-center gap-12'>
      <img
        className='h-40 w-40 object-contain '
        src={item.photo}
        alt='image'
      />
      <article className='flex flex-col items-start justify-center gap-1'>
        <Link
          to={'/product/${productId}'}
          className='font-bold tracking-widest text-xl text-[#2E2E2E] hover:text-[rgb(0,104,136)]'
        >
          macbook
        </Link>
        <span className='font-bold'>4000</span>
      </article>

      <div className='flex ml-auto items-center justify-center'>
        <button className='border-none h-8 w-8 rounded flex cursor-pointer text-2xl hover:bg-[#2E2E2E] hover:text-white items-center justify-center'>
          -
        </button>
        <p className='h-8 w-8 flex items-center justify-center'>4</p>
        <button className='border-none h-8 w-8 rounded flex cursor-pointer text-2xl hover:bg-[#2E2E2E] hover:text-white items-center justify-center'>
          +
        </button>
      </div>

      <button className='border-none bg-transparent flex cursor-pointer text-xl items-center justify-center hover:text-red-500'>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem