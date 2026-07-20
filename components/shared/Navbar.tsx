"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import Container from "./Container";
import Logo from "./Logo";


const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Explore",
    href: "/explore",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];


export default function Navbar() {

  const pathname = usePathname();


  return (
    <header
      className="
      sticky 
      top-0 
      z-50 
      w-full 
      border-b 
      bg-white/80 
      backdrop-blur-md
      "
    >

      <Container>

        <div
          className="
          flex 
          h-16 
          items-center 
          justify-between
          "
        >


          {/* Logo */}

          <Logo />



          {/* Desktop Menu */}

          <nav
            className="
            hidden 
            md:flex 
            items-center 
            gap-7
            "
          >

            {
              navLinks.map((link)=>{

                const active =
                  pathname === link.href;


                return (

                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                    relative
                    text-sm
                    font-medium
                    transition
                    ${
                      active
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                    }
                    `}
                  >

                    {link.name}


                    {
                      active && (
                        <motion.span

                          layoutId="activeLink"

                          className="
                          absolute
                          -bottom-2
                          left-0
                          h-0.5
                          w-full
                          bg-blue-600
                          "

                        />
                      )
                    }

                  </Link>

                )

              })
            }

          </nav>





          {/* Right Side */}

          <div
            className="
            hidden
            md:flex
            items-center
            gap-3
            "
          >


            <Link
              href="/login"
              className="
              text-sm
              font-medium
              text-gray-600
              hover:text-blue-600
              "
            >
              Login
            </Link>



            <Link
              href="/register"
              className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-blue-600
              px-5
              py-2
              text-sm
              font-medium
              text-white
              hover:bg-blue-700
              transition
              "
            >

              <Sparkles size={16}/>

              Get Started

            </Link>


          </div>






          {/* Mobile Menu */}


          <div
            className="
            md:hidden
            "
          >

            <Sheet>


              <SheetTrigger
                className="
                rounded-lg
                border
                p-2
                "
              >

                <Menu size={22}/>

              </SheetTrigger>




              <SheetContent
                side="right"
                className="
                w-72
                "
              >


                <div
                  className="
                  mt-10
                  flex
                  flex-col
                  gap-5
                  "
                >


                  {
                    navLinks.map((link)=>{


                      return (

                        <Link
                          key={link.href}
                          href={link.href}
                          className="
                          text-base
                          font-medium
                          text-gray-700
                          hover:text-blue-600
                          "
                        >

                          {link.name}

                        </Link>

                      )

                    })
                  }



                  <Link
                    href="/login"
                    className="
                    mt-5
                    rounded-xl
                    border
                    px-5
                    py-2
                    text-center
                    font-medium
                    "
                  >

                    Login

                  </Link>




                  <Link
                    href="/register"
                    className="
                    rounded-xl
                    bg-blue-600
                    px-5
                    py-2
                    text-center
                    font-medium
                    text-white
                    "
                  >

                    Create Account

                  </Link>



                </div>


              </SheetContent>


            </Sheet>


          </div>


        </div>


      </Container>


    </header>
  );
}