import { Link } from "react-router-dom"

export default function NoFound() {
  return (
    <div>
        <h2>Page not found</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum animi numquam quidem voluptatum assumenda molestias odio corrupti impedit sint dicta.</p>

        <p>Go to link <Link to="/">Homepage</Link>.</p>
    </div>
  )
}
