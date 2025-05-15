"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  return (
    <div className="bg-blue-600">
      <div className="mx-auto max-w-screen-lg p-4">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-white font-semibold text-2xl">NotesApp</h1>
          <nav>
            <ul className="flex gap-4 items-center">
              <li className="text-white font-medium text-md">
                <Link href={"/"}>Beranda</Link>
              </li>
              <li className="text-white font-medium text-md">
                <Link href={"/notes"}>List Catatan</Link>
              </li>
              <li className="text-white font-medium text-md">
                <Link href={"/notes/create"}>Buat Catatan</Link>
              </li>

              {isLoggedIn ? (
                <li className=" font-medium text-md">
                  <Button onClick={handleLogout} className="text-black bg-white hover:bg-gray-400">
                    Logout
                  </Button>
                </li>
              ) : (
                <div className="flex gap-4">
                  <li className="text-white font-medium text-md">
                    <Link href={"/login"}>
                      <Button className="bg-green-500 hover:bg-green-600">
                        Login
                      </Button>
                    </Link>
                  </li>
                  <li className=" font-medium text-md">
                    <Link href={"/register"}>
                      <Button className="text-black bg-white hover:bg-gray-400">
                        Register
                      </Button>
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
