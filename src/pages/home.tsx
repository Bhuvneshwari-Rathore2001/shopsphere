import { Link } from "react-router-dom"
import ProductCard from "../Components/ProductCard";
const Home = () => {

  const addToCartHandler = () => {}
  return (
    <div>
      <section className="bg-myImage h-[500px] bg-no-repeat w-full bg-center bg-cover"/>

      <div className='flex justify-between items-center mt-12 max-w-7xl m-auto'>
        <h1>Latest Products</h1>
        <Link to='/search'>More</Link>
      </div>
      <main className='flex flex-1 gap-4'>
        <ProductCard
          productId='3433'
          photo='http://m.media-amazon.com/images/I/71jG+e7roXL._SX466_.jpg'
          name='mac'
          price={545}
          stock={5656}
          handler={addToCartHandler}
        />
      </main>
    </div>
  );
}

export default Home