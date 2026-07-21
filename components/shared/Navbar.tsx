"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaMagic,
  FaSignOutAlt,
  FaChevronDown,
  FaRobot,
  FaUser,
  FaPlusCircle,
  FaTasks,
} from "react-icons/fa";
import { motion } from "framer-motion";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Container from "./Container";
import Logo from "./Logo";
import { authClient } from "@/lib/auth-client";

const mainNavLinks = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/explore" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const aiNavLinks = [
  {
    name: "AI Study Generator",
    href: "/ai-plan",
    icon: FaMagic,
    description: "Generate customized study roadmap with Groq AI",
  },
  {
    name: "AI Tutor Assistant",
    href: "/ai-assistant",
    icon: FaRobot,
    description: "Chat and solve doubt instantly with AI",
  },
];

const userNavLinks = [
  { name: "Add Plan", href: "/items/add", icon: FaPlusCircle },
  { name: "Manage Plans", href: "/items/manage", icon: FaTasks },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();

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

  const isAiActive = aiNavLinks.some((link) => pathname === link.href);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-7">
            {mainNavLinks.map((link) => {
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

            {/* AI Features Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 text-sm font-medium outline-none transition cursor-pointer">
                <span
                  className={`flex items-center gap-1.5 ${
                    isAiActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <FaMagic className="text-blue-600" size={14} />
                  <span>AI Features</span>
                  <FaChevronDown size={10} />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-64 p-2 shadow-xl border-gray-100 rounded-xl bg-white z-50"
              >
                {aiNavLinks.map((aiItem) => {
                  const Icon = aiItem.icon;
                  return (
                    <DropdownMenuItem
                      key={aiItem.href}
                      className="rounded-lg p-0 cursor-pointer focus:bg-gray-50"
                    >
                      <Link
                        href={aiItem.href}
                        className="flex items-start gap-3 w-full p-2.5 text-gray-700 hover:text-blue-600"
                      >
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                          <Icon size={16} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">
                            {aiItem.name}
                          </div>
                          <div className="text-xs text-gray-500 line-clamp-1">
                            {aiItem.description}
                          </div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* User Auth Section */}
          <div className="hidden md:flex items-center gap-4">
            {isPending ? (
              <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse" />
            ) : session ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none cursor-pointer rounded-full ring-offset-2 focus:ring-2 focus:ring-blue-500">
                  <div className="flex items-center gap-2">
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
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  className="w-60 p-2 shadow-xl border-gray-100 rounded-xl bg-white z-50"
                >
                  {/* Base UI standard: DropdownMenuLabel inside DropdownMenuGroup */}
                  <DropdownMenuGroup>
                    <DropdownMenuLabel className="p-2">
                      <div className="flex flex-col gap-0.5">
                        <p className="text-sm font-bold text-gray-800">
                          {user?.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user?.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator className="my-1 border-gray-100" />

                  <DropdownMenuGroup>
                    <DropdownMenuLabel className="px-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      AI Tools
                    </DropdownMenuLabel>
                    {aiNavLinks.map((aiItem) => {
                      const Icon = aiItem.icon;
                      return (
                        <DropdownMenuItem
                          key={aiItem.href}
                          className="rounded-lg p-0 cursor-pointer focus:bg-gray-50"
                        >
                          <Link
                            href={aiItem.href}
                            className="flex items-center gap-2.5 w-full px-2 py-2 text-sm text-gray-700 hover:text-blue-600"
                          >
                            <Icon className="text-blue-600" size={14} />
                            <span>{aiItem.name}</span>
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator className="my-1 border-gray-100" />

                  <DropdownMenuGroup>
                    <DropdownMenuLabel className="px-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Dashboard
                    </DropdownMenuLabel>
                    {userNavLinks.map((userItem) => {
                      const Icon = userItem.icon;
                      return (
                        <DropdownMenuItem
                          key={userItem.href}
                          className="rounded-lg p-0 cursor-pointer focus:bg-gray-50"
                        >
                          <Link
                            href={userItem.href}
                            className="flex items-center gap-2.5 w-full px-2 py-2 text-sm text-gray-700 hover:text-blue-600"
                          >
                            <Icon className="text-gray-500" size={14} />
                            <span>{userItem.name}</span>
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator className="my-1 border-gray-100" />

                  <DropdownMenuItem
                    onClick={handleSignOut}
                    className="rounded-lg p-2 text-red-600 font-medium cursor-pointer focus:bg-red-50 focus:text-red-600 flex items-center gap-2 mt-1"
                  >
                    <FaSignOutAlt size={14} />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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

          {/* Mobile Sheet Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="rounded-lg border p-2">
                <FaBars size={22} />
              </SheetTrigger>
              <SheetContent side="right" className="w-72 overflow-y-auto">
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>

                <div className="mt-8 flex flex-col gap-4">
                  {session && (
                    <div className="flex items-center gap-3 border-b pb-4">
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
                        <p className="text-sm text-gray-500 truncate max-w-[170px]">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  )}

                  {mainNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-medium transition ${
                        pathname === link.href
                          ? "text-blue-600 font-semibold"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div className="my-1 rounded-xl border bg-gray-50/50 p-3">
                    <div className="mb-2 flex items-center gap-2 text-xs font-bold tracking-wider text-gray-400 uppercase">
                      <FaMagic className="text-blue-600" />
                      <span>AI Features</span>
                    </div>
                    <div className="flex flex-col gap-3">
                      {aiNavLinks.map((aiItem) => (
                        <Link
                          key={aiItem.href}
                          href={aiItem.href}
                          onClick={() => setIsOpen(false)}
                          className={`text-sm font-medium transition ${
                            pathname === aiItem.href
                              ? "text-blue-600 font-semibold"
                              : "text-gray-700 hover:text-blue-600"
                          }`}
                        >
                          {aiItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {session && (
                    <div className="my-1 rounded-xl border bg-blue-50/30 p-3">
                      <div className="mb-2 flex items-center gap-2 text-xs font-bold tracking-wider text-gray-400 uppercase">
                        <FaUser className="text-blue-600" />
                        <span>Dashboard</span>
                      </div>
                      <div className="flex flex-col gap-3">
                        {userNavLinks.map((userItem) => (
                          <Link
                            key={userItem.href}
                            href={userItem.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-sm font-medium transition ${
                              pathname === userItem.href
                                ? "text-blue-600 font-semibold"
                                : "text-gray-700 hover:text-blue-600"
                            }`}
                          >
                            {userItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {session ? (
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        handleSignOut();
                      }}
                      className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-red-300 py-3 text-red-600 hover:bg-red-50"
                    >
                      <FaSignOutAlt />
                      Sign Out
                    </button>
                  ) : (
                    <div className="mt-2 flex flex-col gap-3">
                      <Link
                        href="/login"
                        onClick={() => setIsOpen(false)}
                        className="rounded-xl border px-5 py-3 text-center font-medium text-gray-700 hover:bg-gray-50"
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
                    </div>
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