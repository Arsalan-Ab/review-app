import { Outlet } from "react-router-dom";
import SecondryNavigationMaker from "components/secondry-navigation-maker";

function SettingLayout() {

    return (
        <>
            <div className="vw-100 bg-white mb-5 ">
                <div className="container text-uppercase ">
                    <div className="row border-bottom border-4">
                        <h2 className="col-sm-10 offset-sm-2 fw-normal ">Setting</h2>
                    </div>
                    <SecondryNavigationMaker
                        linksName={['review setting', 'reviewers', 'study tags']}
                        linksAddress={['review-setting', 'authors', 'study-tags']}
                    />
                </div>
            </div>
            <Outlet />
        </>

    );
}

export default SettingLayout;