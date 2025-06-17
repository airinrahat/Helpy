"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { data: session, status } = useSession();

  const NavMenu = () => (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">About</Link>
      </li>
      <li>
        <Link href="/">Events</Link>
      </li>
      <li>
        <Link href="/">Blogs</Link>
      </li>
      <li>
        <Link href="/">FAQ</Link>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-[#E7E6EA] shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {NavMenu()}
            </ul>
          </div>
          <Link href="/" className="text-xl">
            <Image src="/images/logo.png" width={100} height={80} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavMenu()}</ul>
        </div>
        <div className="navbar-end gap-5"></div>
        {status == "authenticated" ? (
          <>
            {session?.user?.image ? (
              <Image
                src={session.user.image}
                alt="User Image"
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <FaUserCircle className="text-5xl  text-gray-600" />
            )}

            <li onClick={() => signOut()} className="btn bg-[#01715D]">
              Logout
            </li>
          </>
        ) : (
          <>
            <Link href="/login" className="btn bg-[#01715D]">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
