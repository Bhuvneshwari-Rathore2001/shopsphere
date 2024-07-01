import { Link } from 'react-router-dom';
import LatestCard from '../Components/LatestCard';
const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className='bg-gray-50 border py-10'>
      <div className='bg-myImage h-[400px] bg-no-repeat w-1/2 bg-center bg-cover ml-10 ' />

      <div className='flex justify-between items-center my-16 max-w-7xl m-auto'>
        <h1 className='text-gray-800 text-5xl font-bold'>
          Latest <span className='text-yellow-500'>Products</span>
        </h1>
        <Link
          to='/search'
          className='text-gray-800 text-bold text-lg hover:text-yellow-500'
        >
          More...
        </Link>
      </div>
      <main className='flex flex-1 gap-[42px] gap-y-20  flex-wrap max-w-7xl m-auto'>
        <div className='hover:scale-105'>
          <LatestCard
            productId='3433'
            photo='https://www.pcworld.com/wp-content/uploads/2022/07/primary-1.jpg?quality=50&strip=all'
            name='Woolen Wear'
            price={545}
            stock={5656}
            handler={addToCartHandler}
            desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nulla ducimus rerum vero natus perferendis'
          />
        </div>
        <div className='hover:scale-[1.1]'>
          <LatestCard
            productId='3433'
            photo='https://www.pcworld.com/wp-content/uploads/2022/07/primary-1.jpg?quality=50&strip=all'
            name='Woolen Wear'
            price={545}
            stock={5656}
            handler={addToCartHandler}
            desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nulla ducimus rerum vero natus perferendis'
          />
        </div>
        <div className='hover:scale-[1.1]'>
          <LatestCard
            productId='3433'
            photo='https://www.pcworld.com/wp-content/uploads/2022/07/primary-1.jpg?quality=50&strip=all'
            name='Woolen Wear'
            price={545}
            stock={5656}
            handler={addToCartHandler}
            desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nulla ducimus rerum vero natus perferendis'
          />
        </div>
        <div className='hover:scale-[1.1]'>
          <LatestCard
            productId='3433'
            photo='https://www.pcworld.com/wp-content/uploads/2022/07/primary-1.jpg?quality=50&strip=all'
            name='Woolen Wear'
            price={545}
            stock={5656}
            handler={addToCartHandler}
            desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nulla ducimus rerum vero natus perferendis'
          />
        </div>
        <div className='hover:scale-[1.1]'>
          <LatestCard
            productId='3433'
            photo='https://www.pcworld.com/wp-content/uploads/2022/07/primary-1.jpg?quality=50&strip=all'
            name='Woolen Wear'
            price={545}
            stock={5656}
            handler={addToCartHandler}
            desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nulla ducimus rerum vero natus perferendis'
          />
        </div>
        <div className='hover:scale-[1.1]'>
          <LatestCard
            productId='3433'
            photo='https://www.pcworld.com/wp-content/uploads/2022/07/primary-1.jpg?quality=50&strip=all'
            name='Woolen Wear'
            price={545}
            stock={5656}
            handler={addToCartHandler}
            desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nulla ducimus rerum vero natus perferendis'
          />
        </div>
        <div className='hover:scale-[1.1]'>
          <LatestCard
            productId='3433'
            photo='https://www.pcworld.com/wp-content/uploads/2022/07/primary-1.jpg?quality=50&strip=all'
            name='Woolen Wear'
            price={545}
            stock={5656}
            handler={addToCartHandler}
            desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nulla ducimus rerum vero natus perferendis'
          />
        </div>
      </main>
      {/* <div className='grid grid-cols-6 gap-14  m-14'>
        <Category />
      </div> */}
    </div>
  );
};

export default Home;
