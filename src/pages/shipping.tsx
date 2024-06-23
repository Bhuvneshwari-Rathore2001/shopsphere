import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {

    const navigate = useNavigate()

  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    state: '',
    country: '',
    pinCode: '',
  });

  const chngeHandler = () => {
    // setShippingInfo(prev=>({...prev, [e.target.name]: e.target.value}));
  };

  return (
    <div className='flex flex-col'>
      <button
        className='bg-[rgb(42,42,42)] text-white border-none outline-none cursor-pointer rounded-full h-10 w-10 fixed top-8 left-8 transition-all flex items-center justify-center group'
        onClick={() => navigate('/cart')}
      >
        <BiArrowBack className='group-hover:-translate-x-1 ' />
      </button>
      <div className='flex items-center justify-center w-full'>
        <form className='max-w-md w-full flex flex-col items-center justify-stretch gap-8 p-8'>
          <h1 className='m-8 text-center text-2xl uppercase text-[#4a4848]'>
            Shipping Address
          </h1>
          <input
            required
            type='text'
            placeholder='Address'
            name='address'
            value={shippingInfo.address}
            onChange={chngeHandler}
            className='border w-full px-1 py-2'
          />

          <input
            required
            type='text'
            placeholder='City'
            name='city'
            value={shippingInfo.city}
            onChange={chngeHandler}
            className='border w-full px-1 py-2'
          />

          <input
            required
            type='text'
            placeholder='State'
            name='state'
            value={shippingInfo.state}
            onChange={chngeHandler}
            className='border w-full px-1 py-2'
          />

          <select
            className='px-1 py-2 w-full bg-inherit border text-[#4a4848] border-[rgba(31,31,31,0.351)] text-sm'
            name='country'
            required
            value={shippingInfo.country}
            onChange={chngeHandler}
          >
            <option value=''>Choose Country</option>
            <option value='india'>India</option>
            <option value='usa'>USA</option>
            <option value='uk'>UK</option>
            <option value='maleysia'>Maleysia</option>
          </select>

          <input
            required
            type='number'
            placeholder='Pin code'
            name='pinCode'
            value={shippingInfo.pinCode}
            onChange={chngeHandler}
            className='border w-full px-1 py-2'
          />

          <button
            type='submit'
            className='bg-[rgb(0,104,136)] w-full text-white outline-none cursor-pointer  p-3 h- border-none rounded uppercase tracking-wider hover:opacity-80'
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
