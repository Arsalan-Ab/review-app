import NewImportForm from "components/new-import-form";
import SecondryNavigationMaker from "components/secondry-navigation-maker";

function NewImport() {

    return (
        <>
            <div className="vw-100 bg-white mb-4 ">
                <div className="container text-uppercase ">
                    <div className="row border-bottom border-4">
                        <h2 className="col-sm-10 offset-sm-2 fw-normal ">Import</h2>
                    </div>
                    <SecondryNavigationMaker
                        linksName={['import from file', 'import history']}
                        linksAddress={['new-import', 'import-history']}
                    />
                </div>
            </div>
            <NewImportForm/>
        </>
    );
}

export default NewImport;
