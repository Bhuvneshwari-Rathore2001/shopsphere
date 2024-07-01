// import { useEffect, useState } from 'react';
// import {createPortal} from "react-dom";
// import QuantityModal from '../Components/QuantityModal';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import CartItem from '../Components/CartItem';
import PriceDetails from '../Components/PriceDetails';
import QuantityModal from '../Components/QuantityModal';
import { cartItems } from '../utils/constant';
import { Link } from 'react-router-dom';

// // import { VscError } from 'react-icons/vsc';
// // import { Link } from 'react-router-dom';
// import CartItem from '../Components/CartItem';
// // import { cartItems } from '../utils/constant';

// // const cartItems = [
// //   {
// //     productId: 'huhuhu',
// //     photo: 'http://m.media-amazon.com/images/I/71jG+e7roXL._SX466_.jpg',
// //     name: 'macbook',
// //     price: 3000,
// //     quantity: 4,
// //     stock: 10,
// //   },
// // ];
// const subtotal = 4000;
// const tax = Math.round(subtotal * 0.18);
// const shippingCharges = 200;
// const discount = 400;
// const total = subtotal + tax + shippingCharges;

// const Cart = () => {
//   const [couponCode, setCouponCode] = useState<string>('');
//   const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

//   useEffect(() => {
//     const timeOutId = setTimeout(() => {
//       if (Math.random() > 0.5) {
//         setIsValidCouponCode(true);
//       } else {
//         setIsValidCouponCode(false);
//       }
//     }, 1000);

//     return () => {
//       clearTimeout(timeOutId);
//       setIsValidCouponCode(false);
//     };
//   }, [couponCode]);

//   return (

// <section className='max-w-6xl m-auto'>
//   <div className='cart px-4 py-16 flex flex-row items-center gap-16 h-3/5 bg-gray-50'>
//     <main className='w-4/6 flex flex-col h-screen overflow-y-auto '>
//       {cartItems.length > 0 ? (
//         cartItems.map((item, index) => <CartItem key={index} {...item} />)
//       ) : (
        // <div className='flex flex-col gap-4 items-center justify-center'>
        //   <img
        //     src='https://static.vecteezy.com/system/resources/previews/000/496/007/original/vector-add-to-cart-icon-design.jpg'
        //     className='h-48 w-48'
        //   />
        //   <div className='flex flex-col items-center justify-center'>
        //     <h1>Hey! it feels so light!</h1>
        //     <p className='text-[rgb(42,42,42)] text-xs'>
        //       There is nothing in your bag. Let's add some items.
        //     </p>
        //   </div>
        //   <Link
        //     to='/'
        //     className='uppercase  border-orange-700 p-2 border-2 text-sm text-orange-700'
        //   >
        //     Add items from wishlist
        //   </Link>
        // </div>
//       )}
//     </main>
//     <aside className='p-12 flex flex-col justify-center gap-6 items-stretch w-1/3'>
//       <h1 className='uppercase'>price details</h1>
//       <p>Total MRP: {total}</p>
// //       <p className=''>
// //         Discount on MRP <em className='text-green-500'>- {discount}</em>
// //       </p>
// //       <p className='text-base'>Subtotal: {subtotal}</p>
// //       <p>Shipping Fee: {shippingCharges}</p>
// //       <p>Tax: {tax}</p>

// //       <input
//         className='p-4 border border-[#00000047] outline-none rounded-md mt-8 '
//         type='text'
//         value={couponCode}
//         onChange={(e) => setCouponCode(e.target.value)}
//         placeholder='Coupon Code'
//       />

//       {couponCode &&
//         (isValidCouponCode ? (
//           <span className='text-green-600 -mt-4 flex justify-center items-center gap-1'>
//             {discount} off using the{' '}
//             <code className='font-black'>{couponCode}</code>
//           </span>
//         ) : (
//           <span className='text-red-500 -mt-4 flex justify-center items-center gap-1'>
//             Invalid {couponCode}
//             <VscError />{' '}
//           </span>
//         ))}

//       {cartItems.length > 0 && (
//         <Link
//           to='/shipping'
//           className='bg-[rgb(0,104,136)] p-4 text-white uppercase tracking-widest text rounded-sm hover:opacity-80 flex items-center justify-center'
//         >
//           Checkout
//         </Link>
//       )}
//       <button></button>
//     </aside>
//   </div>
// </section>

//   );
// };

// export default Cart;


const Cart = () => {
  const [isOpen, setOpen] = useState(false);
  function toggleModal() {
    setOpen(!isOpen);
  }
  return (
    <>
      {cartItems.length > 0 ? (
        <div className='flex'>
          <div className='flex-1 min-h-screen border-r border-gray-300'>
            <div className=' text-gray-800'>
              <header className='pt-10 pl-10 pb-5 border-b border-gray-300'>
                <h2 className='text-3xl font-bold '>
                  Your <span className='text-yellow-500'>Cart</span>
                </h2>
                <p className='text-md mt-2 text-gray-700'>
                  Checkout all your items and modify quantity as needed from
                  here
                </p>
              </header>
              <section className='p-10 flex flex-col gap-10 overflow-y-auto h-[90vh]'>
                {cartItems.map((item, index) => (
                  <CartItem key={index} {...item} toggle={toggleModal} />
                ))}
              </section>
              {createPortal(
                <QuantityModal isOpen={isOpen} toggle={toggleModal} />,
                document.body
              )}
            </div>
          </div>
          <div className='w-4/12'>
            <PriceDetails />
          </div>
        </div>
      ) : (
        <div className='items-center justify-center flex h-screen w-screen'>
          <div className='flex flex-col gap-4 items-center justify-center'>
            <img
              src='https://static.vecteezy.com/system/resources/previews/000/496/007/original/vector-add-to-cart-icon-design.jpg'
              className='h-48 w-48'
            />
            <div className='flex flex-col items-center justify-center'>
              <h1>Hey! it feels so light!</h1>
              <p className='text-[rgb(42,42,42)] text-xs'>
                There is nothing in your bag. Let's add some items.
              </p>
            </div>
            <Link
              to='/'
              className='uppercase  border-orange-700 p-2 border-2 text-sm text-orange-700'
            >
              Add items from wishlist
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
