import AddShowReview from "../components/add-show-review/add-show-review";
import ReviewSecondryNavigation from "../components/secondry-navigation/review-secondry-navigation";

function Reviews() {
    return (
        <>
            <div className="vw-100 bg-white mb-5 ">
                <div className="container text-uppercase ">
                    <div className="row border-bottom border-4">
                        <h2 className="col-sm-10 offset-sm-2 fw-normal ">your reviews</h2>
                    </div>
                    <ReviewSecondryNavigation />
                </div>
            </div>
            <AddShowReview />
        </>

    );
}

export default Reviews;