import { useLoaderData } from "react-router-dom"

export default function CareerDetails() {
    const career = useLoaderData();

    return (
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde obcaecati est nesciunt ea! Inventore quidem facilis possimus, aut veniam esse iusto, ipsam minus molestias cum sint repellendus ea at blanditiis fuga doloribus beatae molestiae natus? Amet alias repellat dolore accusantium, ea, aut dolor modi nostrum natus cumque doloremque tempore harum!</p>
            </div>
        </div>
    )
}

// Loader Function
export const CareerDetailsLoader = async ({ params }) => {
    const { id } = params;

    const res = await fetch('http://localhost:4500/careers/' + id);

    if(!res.ok) {
        throw Error('Failed to fetch this specific career');
    }

    return res.json();
}
