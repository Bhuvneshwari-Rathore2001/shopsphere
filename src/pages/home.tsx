import { Link } from "react-router-dom"
import ProductCard from "../Components/ProductCard";
import Category from "../Components/Category";
const Home = () => {

  const addToCartHandler = () => {}
  return (
    <div className='bg-gray-100 border'>
      <section className='bg-myImage h-[500px] bg-no-repeat w-full bg-center bg-cover' />

      <div className='flex justify-between items-center mt-12 max-w-7xl m-auto'>
        <h1>Latest Products</h1>
        <Link to='/search'>More</Link>
      </div>
      <main className='flex flex-1 gap-4'>
        <ProductCard
          productId='3433'
          photo='https://www.pcworld.com/wp-content/uploads/2022/07/primary-1.jpg?quality=50&strip=all'
          name='Macbook'
          price={545}
          stock={5656}
          handler={addToCartHandler}
        />
      </main>
      <div className='grid grid-cols-6 gap-14 max-w- m-14'>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
}

export default Home