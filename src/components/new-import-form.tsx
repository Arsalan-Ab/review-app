import Button from "@mui/material/Button";
import { colors } from "value/colors/colors";
function NewImportForm() {
    return (
        <div className="container-sm">
            <div className="row">
                <form className="col-sm-8 offset-sm-2 my-4 bg-white p-3">
                    <div className="mb-3">
                        <label className="form-label">
                            References can be imported using the EndNote XML format, the PubMed format, or the RIS text format.
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Import in to</label>
                        <select className="form-select shadow-none">
                            <option defaultValue={"screen"}>Screen</option>
                            <option value="full text">Full Text</option>
                        </select>
                    </div>

                    <div className="mb-4" style={{maxWidth:200}}>
                        <input className="form-control form-control-sm" id="formFileSm" type="file"/>
                    </div>
                    <Button variant="contained" sx={{
                        backgroundColor: colors.primary, fontSize: 12, ":hover": {
                            bgcolor: colors.secondry
                        }
                    }}>Import </Button>
                </form>
            </div>

        </div >
    );
}

export default NewImportForm;