"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaMagic, FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Container from "./Container";
import Logo from "./Logo";
import { authClient } from "@/lib/auth-client";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/explore" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Add Plan", href: "/items/add" },
  { name: "Manage", href: "/items/manage" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();

  const visibleLinks = navLinks.filter((link) => {
    if (
      !session &&
      (link.href === "/items/add" || link.href === "/items/manage")
    ) {
      return false;
    }
    return true;
  });

  const user = session?.user;

  const initial =
    user?.name?.charAt(0)?.toUpperCase() ||
    user?.email?.charAt(0)?.toUpperCase() ||
    "U";

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/";
        },
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {visibleLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition ${
                    active
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {link.name}

                  {active && (
                    <motion.span
                      layoutId="activeLink"
                      className="absolute -bottom-2 left-0 h-0.5 w-full bg-blue-600"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-4">
            {isPending ? (
              <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse" />
            ) : session ? (
              <>
                <div className="flex items-center gap-3">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt={user.name ?? "User"}
                      width={40}
                      height={40}
                      className="rounded-full object-cover border"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      {initial}
                    </div>
                  )}

                  <div className="hidden lg:block">
                    <h3 className="text-sm font-semibold">{user?.name}</h3>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                </div>

                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-red-50 hover:text-red-600 transition"
                >
                  <FaSignOutAlt />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm font-medium text-gray-600 hover:text-blue-600"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
                >
                  <FaMagic size={16} />
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="rounded-lg border p-2">
                <FaBars size={22} />
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>

                <div className="mt-8 flex flex-col gap-5">
                  {session && (
                    <div className="flex items-center gap-3 border-b pb-5">
                      {user?.image ? (
                        <Image
                          src={user.image}
                          alt={user.name ?? "User"}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                          {initial}
                        </div>
                      )}

                      <div>
                        <h3 className="font-semibold">{user?.name}</h3>
                        <p className="text-sm text-gray-500">{user?.email}</p>
                      </div>
                    </div>
                  )}

                  {visibleLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-medium transition ${
                        pathname === link.href
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}

                  {session ? (
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        handleSignOut();
                      }}
                      className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-red-300 py-3 text-red-600 hover:bg-red-50"
                    >
                      <FaSignOutAlt />
                      Sign Out
                    </button>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        onClick={() => setIsOpen(false)}
                        className="mt-5 rounded-xl border px-5 py-3 text-center font-medium"
                      >
                        Login
                      </Link>

                      <Link
                        href="/register"
                        onClick={() => setIsOpen(false)}
                        className="rounded-xl bg-blue-600 px-5 py-3 text-center font-medium text-white hover:bg-blue-700"
                      >
                        Get Started
                      </Link>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}