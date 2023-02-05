import HistoryDetails from "components/history-details";
import { colors } from "constants/colors";


function ImportHistory() {
    return (
        <div className="container-sm">
            <div className="row">
                <div className="col-sm-9 offset-sm-2 my-4 bg-white p-4">
                    <div className="d-flex align-items-center mb-4">
                        <h5 style={{ color: colors.lightBlue }} className="flex-grow-1">File import to screen</h5>
                        <div>date</div>
                    </div>

                    <div className="row gx-3 mb-4 gy-3">
                        <div className="col-sm"><HistoryDetails title="TOTAL ADDED TO SCREEN" totalAdd={2} /></div>
                        <div className="col-sm"><HistoryDetails title="REFERENCES" totalAdd={2} /></div>
                        <div className="col-sm"><HistoryDetails title="DUPLICATES" totalAdd={2} /></div>
                        <div className="col-sm"><HistoryDetails title="ERRORS" totalAdd={2} /></div>
                        <div className="col-sm"><HistoryDetails title="IMPORTED" totalAdd={2} /></div>
                    </div>

                    <div className="mb-5"><small>Import can not be undone as actions have occurred against one or more of the imported studies.</small></div>
                </div>
            </div>


        </div>
    );
}

export default ImportHistory;