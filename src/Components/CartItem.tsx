// import { FaTrash } from "react-icons/fa";

import { FaTrash } from "react-icons/fa";

// import { Link } from "react-router-dom";


// type cartItemProps = {
//   photo:string;
//   productId:string;
//   name:string;
//   desc:string;
//   price:number;
//   quantity:number;
//   stock:number;
// };

// const CartItem = () => {
//   return (
//     // <div className='p-8 flex float-start justify-center gap-12'>
//     //   <img
//     //     className='h-80 w-40 object-contain '
//     //     src={item.photo}
//     //     alt='image'
//     //   />
//     //   <article className='flex flex-col items-start justify-center gap-1'>
//     //     <Link
//     //       to={'/product/${productId}'}
//     //       className='font-bold tracking-widest text-xl text-[#2E2E2E] hover:text-[rgb(0,104,136)]'
//     //     >
//     //       macbook
//     //       deacrition of laptop here
//     //     </Link>
//     //     <span className='font-bold'>4000</span>
//     //     <span>7 days return available</span>
//     //   </article>

//     //   <div className='flex ml-auto items-center justify-center'>
//     //     <button className='border-none h-8 w-8 rounded flex cursor-pointer text-2xl hover:bg-[#2E2E2E] hover:text-white items-center justify-center'>
//     //       -
//     //     </button>
//     //     <p className='h-8 w-8 flex items-center justify-center'>4</p>
//     //     <button className='border-none h-8 w-8 rounded flex cursor-pointer text-2xl hover:bg-[#2E2E2E] hover:text-white items-center justify-center'>
//     //       +
//     //     </button>
//     //   </div>

//     //   <button className='border-none bg-transparent flex cursor-pointer text-xl items-center justify-center hover:text-red-500'>
//     //     <FaTrash />
//     //   </button>
//     // </div>


//   );
// };

// export default CartItem







type cartItemProps = {
  photo: string;
  productId: string;
  name: string;
  desc: string;
  price: number;
  quantity: number;
  stock: number;
  toggle?:() => void;
};

function CartItem(items:cartItemProps) {


  const trashHandler = ()=>{}

  return (
    <div className='flex border-l-4 border-gray-800 px-4'>
      <div>
        <img className='max-w-60 rounded-md' src={items.photo} alt='Lighter' />
      </div>
      <div className='px-5 max-w-md'>
        <div className='flex items-center justify-between'>
          <h3 className='text-xl font-semibold mb-1 text-yellow-500'>
            {items.name}
          </h3>
          <button
            className='hover:text-red-500 hover:scale-[1.3] cursor-pointer'
            onClick={trashHandler}
          >
            <FaTrash />
          </button>
        </div>
        <p className='text-gray-600'>{items.desc}</p>

        <div className='mt-3'>
          <button
            onClick={items.toggle}
            className='bg-gray-100 py-2 border border-gray-200 px-4 font-semibold'
          >
            Qty: 1
          </button>
          <span className='text-yellow-600 font-bold text-xl ml-4'>
            ${items.price}
          </span>
        </div>
      </div>

    </div>
    
  );
}

export default CartItem;