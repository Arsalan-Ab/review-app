import Button from "@mui/material/Button";
import { colors } from "../../value/colors/colors";

function NewReviewForm() {

    return (
        <div className="container-sm">
            <div className="row">
                <form className="col-sm-8 offset-2 my-4 bg-white p-3">
                    <div className="mb-3">
                        <label className="form-label">Name your review</label>
                        <input type="email" className="form-control shadow-none" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Review type</label>
                        <select className="form-select shadow-none">
                            <option defaultValue={"systematic"}>Systematic review</option>
                            <option value="1">One</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Area of research</label>
                        <select className="form-select shadow-none">
                            <option defaultValue={'Art'}>Art</option>
                            <option value="1">One</option>
                        </select>
                    </div>
                    <Button variant="contained" sx={{
                        backgroundColor: colors.primary, fontSize: 13, ":hover": {
                            bgcolor: colors.secondry
                        }
                    }}>Submit </Button>
                </form>
            </div>

        </div >

    );
}

export default NewReviewForm;
