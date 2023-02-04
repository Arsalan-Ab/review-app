interface HistoriesDetails {
    title: string,
    totalAdd: number
}

function HistoryDetails({ title, totalAdd }: HistoriesDetails) {
    return (
        <div className="border">
            <div className="px-3 mt-2 mb-4">
                <div>{title}</div>
                <div>{totalAdd}</div>
            </div>
        </div>
    );
}

export default HistoryDetails;