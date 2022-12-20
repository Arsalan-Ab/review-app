import { Link } from "react-router-dom";

function SettingSecondryNavigation() {

    return (
        <div className="row">
            <div className="col-8 offset-sm-2  d-flex">
                <Link to='/reviews' className="me-4 h-100 text-decoration-none py-3 border-bottom"> Review Setting</Link>
                <Link to='/archive' className="h-100 py-3 text-decoration-none me-4">Reviewers</Link>
                <Link to='/study-tag' className="h-100 py-3 text-decoration-none">Study Tags</Link>
            </div>
        </div>
    );
}

export default SettingSecondryNavigation;