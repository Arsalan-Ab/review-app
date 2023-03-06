import VoteStatusGenerator from "components/accordination/vote-status-generator";
import BasicTable from "components/basic-table";
import { progressColor } from "constants/colors";
import MultiProgress from "react-multi-progress";

function TitleAccordionDetail() {
    return (
        <div>
            <div className="mb-4">
                <div className="mb-2">Team Progress</div>
                <div className="mb-3"><MultiProgress backgroundColor={progressColor.noVote} height={15} elements={
                    [{
                        value: 25,
                        color: progressColor.oneVote
                    }]
                } />
                </div>
                <div className="d-flex justify-content-between mb-3 me-5">
                    <div>{VoteStatusGenerator("Done", progressColor.done, 1)}</div>
                    <div>{VoteStatusGenerator("One Vote", progressColor.oneVote, 0)}</div>
                    <div>{VoteStatusGenerator("Conflict", progressColor.conflict, 0)}</div>
                    <div>{VoteStatusGenerator("No Votes", progressColor.noVote, 0)}</div>
                </div>
                <div>
                    <BasicTable columns={['REVIEWER', 'CONTRIBUTION']} rows={[['name', 2]]} />
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default TitleAccordionDetail;