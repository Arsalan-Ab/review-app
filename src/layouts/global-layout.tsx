import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import PrimaryNavigation from "../components/primary-navigation/primary-navigation";


function Globallayout() {

    return (
        <>
            <PrimaryNavigation />
            <Outlet />
        </>
    );
}

export default Globallayout;