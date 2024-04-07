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
   </div>
   <section className="flex gap-10 ml-24">
    <div>
      <div className="relative">
          <img className="" src="./banner-1.jpg"/>
          <p className="absolute top-20 left-32 text-white text-xl">Chamelas</p>
      </div>
      <div className="relative">
              <img className="" src="./banner-2.jpg"></img>
          <p className="absolute top-20 left-32 text-white text-xl">Begamot</p>
      </div><div className="relative">
          <img className="" src="./banner-3.jpg"></img>
          <p className="absolute top-20 left-32 text-white text-xl">Botlebush</p>
        </div>
      </div>
   </section>
   </>
  );
}

