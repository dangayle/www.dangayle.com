import type { ReactNode } from "react";
import BaseTemplate from "./BaseTemplate";

function TwoColumn({
  navigation,
  body,
  children,
}: {
  navigation: ReactNode;
  body: ReactNode;
  children?: ReactNode;
}) {
  return (
    <BaseTemplate>
      <div className="grid md:grid-cols-3 gap-6">
        <nav className="navigation">{navigation}</nav>
        <section className="body md:col-span-2">{body}</section>
      </div>
    </BaseTemplate>
  );
}

export default TwoColumn;
