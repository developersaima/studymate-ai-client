import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import Container from "./Container";
import Logo from "./Logo";


const footerLinks = [
  {
    title: "Product",
    links: [
      {
        name: "Explore",
        href: "/explore",
      },
      {
        name: "AI Planner",
        href: "/roadmap",
      },
      {
        name: "AI Chat",
        href: "/chat",
      },
    ],
  },

  {
    title: "Company",
    links: [
      {
        name: "About",
        href: "/about",
      },
      {
        name: "Blog",
        href: "/blog",
      },
      {
        name: "Contact",
        href: "/contact",
      },
    ],
  },

  {
    title: "Legal",
    links: [
      {
        name: "Privacy Policy",
        href: "/privacy",
      },
      {
        name: "Terms & Conditions",
        href: "/terms",
      },
    ],
  },
];


export default function Footer() {

  return (
    <footer className="mt-20 border-t bg-slate-50">

      <Container>

        <div className="
        grid
        gap-10
        py-12
        sm:grid-cols-2
        md:grid-cols-4
        ">


          {/* Brand Section */}

          <div>

            <Logo />


            <p className="
            mt-4
            max-w-xs
            text-sm
            leading-6
            text-gray-600
            ">
              StudyMate AI helps students create
              personalized learning plans, generate
              notes, and improve their study journey
              using Artificial Intelligence.
            </p>


            <div className="
            mt-6
            flex
            items-center
            gap-4
            ">


              <Link
                href="#"
                className="hover:text-blue-600 transition"
              >
                <FaFacebook size={20}/>
              </Link>


              <Link
                href="#"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram size={20}/>
              </Link>


              <Link
                href="#"
                className="hover:text-blue-700 transition"
              >
                <FaLinkedin size={20}/>
              </Link>


              <Link
                href="#"
                className="hover:text-sky-500 transition"
              >
                <FaTwitter size={20}/>
              </Link>


            </div>


          </div>




          {/* Footer Links */}


          {
            footerLinks.map((section)=>(
              
              <div key={section.title}>


                <h3 className="
                font-semibold
                text-gray-900
                ">
                  {section.title}
                </h3>


                <ul className="
                mt-5
                space-y-3
                ">

                  {
                    section.links.map((item)=>(

                      <li key={item.href}>

                        <Link
                          href={item.href}
                          className="
                          text-sm
                          text-gray-600
                          transition
                          hover:text-blue-600
                          "
                        >
                          {item.name}
                        </Link>

                      </li>

                    ))
                  }


                </ul>


              </div>

            ))
          }


        </div>




        {/* Bottom */}

        <div className="
        border-t
        py-5
        text-center
        text-sm
        text-gray-500
        ">

          © {new Date().getFullYear()} StudyMate AI.
          All rights reserved.

        </div>


      </Container>


    </footer>
  );
}