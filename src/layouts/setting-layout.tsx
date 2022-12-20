import { Outlet } from "react-router-dom";
import SettingSecondryNavigation from "../components/secondry-navigation/setting-secondry-navigation";

function SettingLayout() {

    return (
        <>
            <div className="vw-100 bg-white mb-5 ">
                <div className="container text-uppercase ">
                    <div className="row border-bottom border-4">
                        <h2 className="col-sm-10 offset-sm-2 fw-normal ">Setting</h2>
                    </div>
                    <SettingSecondryNavigation />
                </div>
            </div>
            <Outlet/>
        </>

    );
}

export default SettingLayout;