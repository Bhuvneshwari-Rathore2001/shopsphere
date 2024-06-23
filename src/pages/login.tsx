import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');

  return (
    <section className='flex items-center justify-center bg-orange-50 h-screen'>
      <main className='w-full max-w-sm flex-col flex gap-3 bg-white text-sm'>
        <img
          src='https://www.printvenue.com/bundles/rocketfrontend/images/singup-popup---first-order-free_03.jpg'
          alt='login_image'
          className='h-52 object-fill'
        />
        <div className='w-4/5 m-auto flex flex-col gap-4'>
          <h1 className='text-[#4a4848] font-bold text-xl'>Login</h1>

          <div className='flex flex-col gap-1'>
            <label className='text-[#4a4848]'>Gender</label>
            <select
              className='border border-[rgba(162,162,162,0.53)] text-[rgba(65,63,63,0.53)]  placeholder:text-[rgba(162,162,162,0.53)]  rounded p-2'
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value=''>Select Gender</option>
              <option value='male' className=' text-[rgba(9,9,9,0.53)] '>
                Male
              </option>
              <option value='female'>Female</option>
            </select>
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-[#4a4848]'>Date of birth</label>
            <input
              className='border border-[rgba(162,162,162,0.53)] rounded p-2'
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className='mb-14'>
            <p className='text-center mt-2 text-[#4a4848] text-xs'>
              Already Signed In Once
            </p>
            <button className='w-full h-12 bg-red-600 text-white flex border-red-600 border rounded text-xl items-center justify-center mt-3'>
              <FcGoogle className='bg-white w-1/4 h-full' />
              <span className='w-full text-sm font-bold uppercase'>Sign in with Google</span>
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Login;
