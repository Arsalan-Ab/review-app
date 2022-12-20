import CustomizedAccordions from "../components/accordination/accordination";

function ReviewSummary() {


    return (
        <>
            <div className="vw-100 bg-white mb-5 ">
                <div className="container p-3">
                        <h2 className="col-sm-10 offset-sm-2 fw-normal ">Reviews summary</h2>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <CustomizedAccordions></CustomizedAccordions>
                </div>
            </div>


        </>

    );
}

export default ReviewSummary;