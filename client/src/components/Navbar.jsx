import React from "react";
import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavbarItem = ({title, classProps}) => {
    return(
        <li className={`mx-4 cursor-pointer  ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
       
        <nav className="w-full flex md:justify-center justify-between items-center position: relative pt-5">
            <div className="md:flex-[0.7] flex-initial justify-center items-center ">
                <h1 className="font-pixel text-white px-5">BLOCKchain.</h1>
            </div>
            <ul className="text-white font-sans md:flex hidden list-none flex-row items-center flex-initial">
                {["Market", "Exchenge", "Wallets"].map((item, index) =>(
                    <NavbarItem key={item + index} title={item}/>
                ))}
                <li className="border font-sans pr-5 pl-5 pb-1 cursor-pointer hover:bg-white hover:bg-opacity-5 hover:shadow-sh hover:shadow-inner transition-all ">Login</li>
            </ul>
            <div className="flex relative">
            {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer mt-4 mr-5" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[50vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Wallets"].map(
              (item, index) => <NavbarItem key={item + index} title={item} classProps="my-2 text-lg pr-2" />,
            )}
          </ul>
        )}
            </div>
        </nav>
    )}

export default Navbar;