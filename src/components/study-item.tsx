import Vote from "./vote";

interface VoteProps {
    voteOption: string[]
}

function StudyItem({ voteOption }: VoteProps) {

    return (
        <div className="d-flex align-items-center">
            <div className="flex-grow-1">
                <div className="mb-2">header</div>
                <div className="mb-2">title</div>
                <div className="mb-2">source info</div>
            </div>
            <Vote voteOption={voteOption}></Vote>
        </div>
    );
}

export default StudyItem;