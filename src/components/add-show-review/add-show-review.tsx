import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { colors } from "../../value/colors/colors";
import Review from "components/reviews/review";

function AddShowReview() {

    const navigate = useNavigate()

    return (
        <div className="container-sm">
            <div className="row mb-5">
                <div className="col-7 offset-sm-2 ">
                    <Button variant="contained" onClick={()=> navigate("/new-review")} sx={{
                        width: 192, backgroundColor: colors.primary, fontSize: 13, ":hover": {
                            bgcolor: colors.secondry
                        }
                    }}>start a new review </Button>
                </div>
                <div className="col-2 align-self-center">sort by</div>
                
            </div>
            <div className="row offset-sm-2 mb-2 p-1">Your reviews</div>
            <div className="row">
            
                <div className="col-8 offset-sm-2">
                    <Review />
                </div>
            </div>
        </div>
    );
}


export default AddShowReview;