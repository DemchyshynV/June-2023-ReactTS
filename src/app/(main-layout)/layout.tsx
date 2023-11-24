import {Header} from "@/app/(main-layout)/components/Header/Header";
import {FC, PropsWithChildren} from "react";

const Layout:FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;