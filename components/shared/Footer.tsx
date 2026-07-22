import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import Container from "./Container";
import Logo from "./Logo";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebook,
    hoverColor: "hover:text-blue-600",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
    hoverColor: "hover:text-pink-500",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedin,
    hoverColor: "hover:text-blue-700",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: FaTwitter,
    hoverColor: "hover:text-sky-500",
  },
];

const footerLinks = [
  {
    title: "Product",
    links: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Explore",
        href: "/explore",
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
        <div className="grid gap-10 py-12 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand Section */}
          <div>
            <Logo />

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-600">
              StudyMate AI helps students create personalized learning plans,
              generate notes, and improve their study journey using Artificial
              Intelligence.
            </p>

            <div className="mt-6 flex items-center gap-4 text-gray-500">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`transition ${social.hoverColor}`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900">{section.title}</h3>

              <ul className="mt-5 space-y-3">
                {section.links.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 transition hover:text-blue-600"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright */}
        <div className="border-t py-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} StudyMate AI by <span className="font-medium text-gray-700">Saima Akter</span>. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}