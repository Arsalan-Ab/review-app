interface HistoriesDetails {
    title: string,
    totalAdd: number
}

function HistoryDetails({ title, totalAdd }: HistoriesDetails) {
    return (
        <div className="border">
            <div className="px-3 pt-3 py-4 text-center">
                <div className="mb-2 text-nowrap" style={{fontSize:".68rem"}}>{title}</div>
                <h5>{totalAdd}</h5>
            </div>
        </div>
    );
}

export default HistoryDetails;