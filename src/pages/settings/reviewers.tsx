import { Button } from "@mui/material";
import ReviwerDetail from "components/reviwer-detail";
import { colors } from "constants/colors";

function Reviewers() {
    return (
        <div className="container-sm">
            <div className="row">
                <div className="col-sm-8 offset-sm-2 p-4 bg-white">
                    <div className="d-flex">
                        <div className="w-75">
                            <div className="mb-3">
                                <h5 style={{ color: colors.lightBlue }}>Reviewers</h5>
                                <ReviwerDetail />
                            </div>
                            <div className="mb-3">
                                <h5 style={{ color: colors.lightBlue }}>Invites</h5>
                                <div className="text-black-50">There are currently no pending invites for this review.</div>
                            </div>
                            <div>
                                <h5 style={{ color: colors.lightBlue }}>Expired or Declined Invites</h5>
                                <div className="text-black-50">There have been no expired or declined invites for this review.</div>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="mb-3"><small>This review is for user which allows 2 reviewers.</small></div>
                            <Button className="mb-3" variant="contained" sx={{
                                backgroundColor: colors.primary, fontSize: 10, ":hover": {
                                    bgcolor: colors.secondry
                                }
                            }}>Invite another reviewer</Button>
                            <div><small>Invited reviewers will receive an email notifying them of your invitation to join your review.</small></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviewers;