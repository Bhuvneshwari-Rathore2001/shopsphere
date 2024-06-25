function QuantityModal({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    isOpen && (
      <div className='fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,.4)] flex justify-center items-center'>
        <div className='bg-white rounded-2xl max-w-[300px] shadow-lg'>
          <header className='p-5 pr-32'>
            <h4 className='font-semibold text-xl'>
              Select <span className='text-yellow-500'>Quantity</span>
            </h4>
          </header>
          <section className='pb-5 px-5 '>
            <ul className='flex flex-wrap justify-between w-full gap-3'>
              <li className='hover:bg-yellow-400 cursor-pointer transition hover:scale-[1.1] hover:shadow-md flex justify-center items-center text-white rounded-full bg-yellow-600 w-10 h-10'>
                1
              </li>
              <li className='hover:bg-yellow-400 cursor-pointer transition hover:scale-[1.1] hover:shadow-md flex justify-center items-center text-white rounded-full bg-yellow-600 w-10 h-10'>
                2
              </li>
              <li className='hover:bg-yellow-400 cursor-pointer transition hover:scale-[1.1] hover:shadow-md flex justify-center items-center text-white rounded-full bg-yellow-600 w-10 h-10'>
                3
              </li>
              <li className='hover:bg-yellow-400 cursor-pointer transition hover:scale-[1.1] hover:shadow-md flex justify-center items-center text-white rounded-full bg-yellow-600 w-10 h-10'>
                4
              </li>
              <li className='hover:bg-yellow-400 cursor-pointer transition hover:scale-[1.1] hover:shadow-md flex justify-center items-center text-white rounded-full bg-yellow-600 w-10 h-10'>
                5
              </li>
              <li className='hover:bg-yellow-400 cursor-pointer transition hover:scale-[1.1] hover:shadow-md flex justify-center items-center text-white rounded-full bg-yellow-600 w-10 h-10'>
                6
              </li>
              <li className='hover:bg-yellow-400 cursor-pointer transition hover:scale-[1.1] hover:shadow-md flex justify-center items-center text-white rounded-full bg-yellow-600 w-10 h-10'>
                7
              </li>
              <li className='hover:bg-yellow-400 cursor-pointer transition hover:scale-[1.1] hover:shadow-md flex justify-center items-center text-white rounded-full bg-yellow-600 w-10 h-10'>
                8
              </li>
              <li className='hover:bg-yellow-400 cursor-pointer transition hover:scale-[1.1] hover:shadow-md flex justify-center items-center text-white rounded-full bg-yellow-600 w-10 h-10'>
                9
              </li>
              <li className='hover:bg-yellow-400 cursor-pointer transition hover:scale-[1.1] hover:shadow-md flex justify-center items-center text-white rounded-full bg-yellow-600 w-10 h-10'>
                10
              </li>
            </ul>
            <div className='flex mt-8 justify-between gap-4'>
              <button
                className='bg-yellow-500 hover:bg-gray-700 text-white py-2 rounded-md group px-8'
                onClick={toggle}
              >
                Done
              </button>
              <button
                className='bg-red-500 hover:bg-gray-700 text-white py-2 rounded-md group px-8'
                onClick={toggle}
              >
                Cancel
              </button>
            </div>
          </section>
        </div>
      </div>
    )
  );
}

export default QuantityModal;
