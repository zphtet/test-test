import Link from "next/link";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Link href={"/nba-team/create-team"}>Checkout all teams</Link>
      {children}
    </div>
  );
};

export default Layout;
