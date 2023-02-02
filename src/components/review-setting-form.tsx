import { Button } from "@mui/material";
import { colors } from "constants/colors";

function ReviewSettingForm() {
    return (
        <form className="position-relative col-sm-8 offset-sm-2 mb-4 bg-white py-3 px-3">
            <Button variant="contained" className="position-absolute end-0 mx-3" sx={{
                backgroundColor: colors.removecolor, fontSize: 10, ":hover": {
                    bgcolor: colors.removecolor
                }
            }}>Delete This Review</Button>
            <div className="mb-3 mt-4">
                <label className="form-label col-9">Review name</label>
                <input type="text" className="form-control shadow-none" />
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

            <div className="mb-3">
                <label className="form-label">Search strategy</label>
                <textarea className="form-control shadow-none" rows={2}></textarea>
            </div>

            <div className="mb-3">
                <label className="form-label">Your review citation (if updating a previous review)</label>
                <textarea className="form-control shadow-none" rows={2}></textarea>
            </div>

            <div className="mb-3">
                <label className="form-label">Reviewers required for screen</label>
                <select className="form-select shadow-none">
                    <option defaultValue={'one'}>1</option>
                    <option value="two">2</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label">Reviewers required for full text review</label>
                <select className="form-select shadow-none">
                    <option defaultValue={'one'}>1</option>
                    <option value="two">2</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label">Reviewers required for data extraction</label>
                <select className="form-select shadow-none">
                    <option defaultValue={'one'}>1</option>
                    <option value="two">2</option>
                </select>
            </div>

            <div className="form-check">
                <input className="form-check-input shadow-none" type="radio" name="extraction" id="extraction 1" checked />
                <label className="form-check-label">
                    Extraction 1
                </label>
            </div>
            <div className="form-check mb-3">
                <input className="form-check-input shadow-none" type="radio" name="extraction" id="extraction 2" />
                <label className="form-check-label">
                    Extraction 2
                </label>
            </div>

            <Button variant="contained" size="small" sx={{
                backgroundColor: colors.primary, fontSize: 12, ":hover": {
                    bgcolor: colors.secondry
                }
            }}>Save </Button>
        </form>
    );
}

export default ReviewSettingForm;