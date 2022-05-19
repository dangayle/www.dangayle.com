import type { ReactNode } from "react";
import Header from "~/components/Header";

function BaseTemplate({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-16 leading-tight">
      <Header />
      <main className="mw8 center">{children}</main>
    </div>
  );
}

export default BaseTemplate;
