"use client";

import { GlobalContext } from "@/context/page";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function Navbar() {
  const { showModal, setShowModal } = useContext(GlobalContext);
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className=" flex flex-wrap items-center justify-between mx-auto px-11 ">
        <div className="flex items-center cursor-pointer">
          <img src="https://i.ibb.co/gzmQVpr/Screenshot-11-removebg-preview.png" />
        </div>
        <div className="mx-auto text-xl font-semibold">
          <Link href="/about" className="mx-4">
            About
          </Link>
          <Link href="/posts" className="mx-4">
            Posts
          </Link>
          <Link href="/doctor" className="mx-4">
            Doctor
          </Link>
        </div>
        <div>
          <Link href="/login" className="mx-4">
            Login
          </Link>
          <Link href="/signup" className="mx-4">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}
