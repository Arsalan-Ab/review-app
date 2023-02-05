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
                        linksName={['review setting','team setting', 'reviewers', 'Criteria & exclusion reasons', 'study tags']}
                        linksAddress={['review-setting', 'authors', 'team-setting','criteria-exclusion', 'study-tags']}
                    />
                </div>
            </div>
            <Outlet />
        </>

    );
}

export default SettingLayout;