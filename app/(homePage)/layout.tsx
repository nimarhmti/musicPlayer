import React, { PropsWithChildren } from "react";

export default function HomePageLayout({ children }: PropsWithChildren) {
  return <div className="bg-primary h-screen relatives">{children}</div>;
}
