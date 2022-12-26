import AddShowReview from "components/add-show-review/add-show-review";
import SecondryNavigationMaker from "components/secondry-navigation-maker";


function Reviews() {
    return (
        <>
            <div className="vw-100 bg-white mb-5 ">
                <div className="container text-uppercase ">
                    <div className="row border-bottom border-4">
                        <h2 className="col-sm-10 offset-sm-2 fw-normal ">your reviews</h2>
                    </div>
                    <SecondryNavigationMaker
                        linksName={['current reviews', 'archived reviews']}
                        linksAddress={['reviews', 'archived']}
                    />
                </div>
            </div>
            <AddShowReview />
        </>

    );
}

export default Reviews;