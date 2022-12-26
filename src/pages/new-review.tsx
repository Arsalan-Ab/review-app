import NewReviewForm from "../components/new-review/new-review-form";

function NewReview() {
    return (
        <>
            <div className="vw-100 bg-white mb-5 border">
                <div className="container">
                    <div className="row">
                        <h2 className="col-sm-10 offset-sm-2 fw-normal ">Start a new review</h2>
                    </div>

                </div>
            </div>
            <NewReviewForm />
        </>


    );
}

export default NewReview;