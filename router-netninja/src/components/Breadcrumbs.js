import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
    const location = useLocation();
    const crumbs = location.pathname.split('/').filter(crumb => crumb !== '');

    let currentLink = "";
    const crumbLinks = crumbs.map(crumb => {
        currentLink += `/${crumb}`;
        return (
            <div className="crumb" key={crumb}>
                <Link to={currentLink}>{crumb}</Link>
            </div>
        );
    })

    return (
        <div className="breadcrumbs">
            {crumbLinks}
        </div>
    )
}
