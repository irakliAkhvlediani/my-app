import { IoBag } from "react-icons/io5"
import { FaBagShopping } from "react-icons/fa6";
import 'animate.css';
import Button from "./componenets/button";


export default function Home() {
  return (
    <>
    <div className="h-screen header ">
      <div className="bg-white w-screen  pt-3 border-b-2  flex justify-between ">
        <div className="pl-10">
        <p className="">Default welcome msg!</p></div>
          <div className="flex absolute right-2">
            <h4 className="pl-5 pr-5">My Account |</h4>
            <h4 className="pl-5 pr-5">$Doller(US) |</h4>
            <img className="size-5 " src="./united-kingdom.png"></img>
            <h4 className="pl-5 pr-5">English</h4>
          </div>
        <div className="bg-gray-400"></div>
      </div>
    <div className="flex bg-white justify-between  h-24">
        <h1 className="pt-7 text-3xl pl-10">Phuler</h1>
      <div className="flex pt-8  text-xl justify-between mr-5 pr-10">
        <h2 className=" hover:text-red-500 cursor-pointer pl-5 pr-5">HOME</h2>
        <h2 className=" hover:text-red-500 cursor-pointer pl-5 pr-5">ABOUT</h2>
        <h2 className=" hover:text-red-500 cursor-pointer pl-5 pr-5">SHOP</h2>
        <h2 className=" hover:text-red-500 cursor-pointer pl-5 pr-5">BLOG</h2>
        <h2 className=" hover:text-red-500 cursor-pointer pl-5 pr-5">PAGES</h2>
        <FaBagShopping className="size-7" />
      </div>
    </div>
    <div className="mt-56 ml-14 ">
        <h1 className=" text-red-500 text-3xl pb-3 animate__animated animate__backInLeft">New Arrivals</h1>
        <h1 className="text-5xl pb-3 animate__animated animate__backInLeft">For MOTHER's DAY</h1>
        <h4 className="pb-3 animate__animated animate__backInLeft">Exclusive Offer -10% Off This Week</h4>
        <button className="bg-red-500 animate__animated animate__backInLeft py-2 px-4 rounded text-white cursor-pointer hover:bg-white hover:text-red-500 ">SHOP NOW</button>
    </div>
    <div className=" absolute flex pr-7 pl-10 mt-64">
        <div className="relative">
            <img className="pl-10 pr-3" src="./banner-1.jpg"/>
            <p className="absolute top-16 left-32 text-white text-xl">Camelas</p>
        </div>
        <div className="relative">
            <img className="pr-3" src="./banner-2.jpg"></img>
            <p className="absolute top-16 left-32 text-white text-xl">Bergamont</p>
            <a ></a>
        </div>
        <div className="relative">
            <img className="pr-3 hover:" src="./banner-3.jpg"></img>
            <p className="absolute top-16 left-32 text-white text-xl">Bottlebrush</p>
          </div>
      </div>
   </div>
   <section className='mt-56'>
        <div>
          <div className='flex'>
              <h1 className='ml-16 text-lg font-bold'>Featured Products</h1>
              <p className='border-t-2 w-2/6 mt-4 ml-20'></p>
              <h3 className='ml-72 text-red-500'>All</h3>
              <h3 className='ml-5'>Winter</h3>
              <h3 className='ml-5'>Various</h3>
              <h3 className='ml-5'>Greens</h3>
          </div>
          <div className='flex justify-center mt-8'>
            <img className='' src='./product-1.jpg'></img>

            <img className='ml-5' src='./product-2.jpg'></img>
            <img className='ml-5' src='./product-3.jpg'></img>
            <img className='ml-5' src='product-2.jpg'></img>
          </div>
        </div>
      </section>
      
      <section>
          <div className="mt-10">
            <img src="./woman.jpg"></img>
          </div>
      </section>
      
   </>
  );
}