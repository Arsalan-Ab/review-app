import { Link } from "react-router-dom";
import clsx from "clsx";

interface SecondryNavigationProps {
    linksName: string[],
    linksAddress: string[]
}

function SecondryNavigationMaker({ linksAddress, linksName }: SecondryNavigationProps) {

    return (
        <div className="row">
            <div className="col-8 offset-sm-2  d-flex">
                {linksAddress.map((linkAddress, index) => {
                    return <Link key={linksName[index]} to={`/${linkAddress}`} className={clsx(index !== linksName.length - 1 && "me-4", "h-100", "text-decoration-none", "py-3", "border-bottom")}>
                        {linksName[index]}
                    </Link>
                })}
            </div>
        </div>
    );
}

export default SecondryNavigationMaker;