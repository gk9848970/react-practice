import { Link, useRouteError } from 'react-router-dom'

export default function CareersError() {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h2>Error</h2>
            <p>{error.message}</p>
            <Link to="/">Go to Homepage</Link>
        </div>
    )
}
