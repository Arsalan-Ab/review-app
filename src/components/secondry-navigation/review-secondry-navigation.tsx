import { Link } from "react-router-dom";

function ReviewSecondryNavigation() {


    return (
        <div className="row">
            <div className="col-8 offset-sm-2  d-flex">
                <Link to='/reviews' className="me-4 h-100 text-decoration-none py-3 border-bottom">current reviews</Link>
                <Link to = '/archive' className="h-100 py-3 text-decoration-none">archive reviews</Link>
            </div>
        </div>
    );
}

export default ReviewSecondryNavigation;