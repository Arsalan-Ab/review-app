import { Button } from "@mui/material";
import { colors } from "constants/colors";

function ReviwerDetail() {
    return (
        <div className="d-flex border p-3">
            <div className="flex-grow-1">
                <div>reviewer name</div>
                <div>email</div>
                <div>date</div>
            </div>
            <div>
                <div className="mb-1 text-center">role</div>
                <Button variant="contained" sx={{
                        backgroundColor: colors.removecolor, fontSize: 10, ":hover": {
                            bgcolor: colors.removecolor
                        }
                    }}>Remove reviwer</Button>
            </div>
        </div>
    );
}

export default ReviwerDetail;