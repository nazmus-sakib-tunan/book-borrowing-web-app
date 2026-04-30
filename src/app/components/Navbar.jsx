"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={50}
            height={50}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">BookMart</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li >
            <Link href={"/"}>Home</Link>
          </li>
          <li >
            <Link href={"/all-books"}>All Books</Link>
          </li>
         
          <li >
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-5">
          <ul className="flex items-center  text-sm">
            <li className="bg-linear-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent text-xl">
              <Link href={"/signup"}>Login</Link>
            </li>
          
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;