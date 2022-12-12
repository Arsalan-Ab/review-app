import { ReactNode } from "react";
import PrimaryNavigation from "../components/primary-navigation/primary-navigation";

interface GlobalLayoutProps {
    children: ReactNode;
}

function Globallayout({ children }: GlobalLayoutProps) {

    return (
        <>
            <PrimaryNavigation />
            {children}
        </>
    );
}

export default Globallayout;