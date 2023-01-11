import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

interface SecondryNavigationProps {
    linksName: string[],
    linksAddress: string[]
}

function SecondryNavigationMaker({ linksAddress, linksName }: SecondryNavigationProps) {
    const location = useLocation()
    console.log(location);


    return (
        <div className="row">
            <div className="col-8 offset-sm-2  d-flex">
                {linksAddress.map((linkAddress, index) => {
                    return <Link key={linksName[index]} to={`/${linkAddress}`}
                        className={clsx(index !== linksName.length - 1 && "me-4", "h-100", "text-decoration-none", "py-3",
                            "text-nowrap", "border-3", location.pathname == `/${linkAddress}` && "custom-border")}
                    >
                        {linksName[index]}
                    </Link>
                })}
            </div>
        </div>
    );
}

export default SecondryNavigationMaker;