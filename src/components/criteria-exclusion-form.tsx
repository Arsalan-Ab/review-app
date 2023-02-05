import { Button } from "@mui/material";
import { colors } from "constants/colors";

function CriteriaExclusionForm() {
    return (
        <div className="col-sm-8 offset-sm-2 bg-white py-5 px-4 mb-5">
            <form className="mb-3">
                <h5 className="mb-3" style={{ color: colors.lightBlue }}>Manage criteria for screening and full text review</h5>
                <div className="row mb-3">
                    <div className="col-sm-6">
                        <label className="form-label"><small>Inclusion criteria</small></label>
                        <textarea className="form-control shadow-none" rows={10}></textarea>
                    </div>

                    <div className="col-sm-6">
                        <label className="form-label" htmlFor="exclusion-criteria"><small>Exclusion criteria</small></label>
                        <textarea className="form-control shadow-none" id="exclusion-criteria" rows={10}></textarea>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                        <Button variant="contained" size="small" sx={{
                            backgroundColor: colors.primary, fontSize: 12, ":hover": {
                                bgcolor: colors.secondry
                            }
                        }}>Save </Button>
                    </div>
                </div>
            </form>

            <div className="mb-2 border-top py-3">
                <small style={{color:colors.lightBlue}}>Manage exclusion reasons for full text review</small>
            </div>
            <div className="mb-2 border-top py-3">
                <small style={{color:colors.lightBlue}}>Manage highlights</small>
            </div>

        </div >
    );
}

export default CriteriaExclusionForm;