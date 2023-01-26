
import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
    const careers = useLoaderData();

    return (
        <div className="careers">
            {careers.map(career => (
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link> 
            ))}
        </div>
    )
}

// Loader Function

export const careersLoader = async () => {
    const res = await fetch('http://localhost:4500/careers');

    if(!res.ok) {
        throw Error('Could not fetch careers');
    }

    return res.json();
}
