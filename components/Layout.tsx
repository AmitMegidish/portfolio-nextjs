import { ReactNode } from "react";
import Navbar from "./Navbar";

type LayoutProps = {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="bg-slate-500 flex-1">{children}</main>
        </div>
    )
}
export default Layout