import SecondryNavigationMaker from "components/secondry-navigation-maker";
import { Outlet } from "react-router-dom";

function TitleScreningLayout() {
    return (
        <>
            <div className=" bg-white mb-5 ">
                <div className="container text-uppercase ">
                    <div className="row border-bottom border-4">
                        <h2 className="col-sm-10 offset-sm-2 fw-normal ">Title and abstract screening</h2>
                    </div>
                    <SecondryNavigationMaker
                        linksName={['screen references', 'resolve conflicts', 'awaiting other reviewers', 'irrelevnt references']}
                        linksAddress={['screen-references', 'resolve-conflicts', 'awaiting-other-reviewers',"irrelevnt references"]}
                    />
                </div>
            </div>
            <Outlet/>
        </>
    );
}

export default TitleScreningLayout;