"use client";

import ReactQueryProvider from "./ReactQueryProvider";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}