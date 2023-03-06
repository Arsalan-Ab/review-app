import SimpleAccordion from "components/simple-accordination";
import TitleAccordionDetail from "./title-accordion-detail";

function TitleAccordination() {
    return (
        <SimpleAccordion accordinationSummary="Title and abstract screening"
            accordinationDetails={<TitleAccordionDetail />}
        />
    );
}

export default TitleAccordination;