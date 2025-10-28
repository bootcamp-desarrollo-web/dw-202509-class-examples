import { Link, Outlet } from "react-router-dom"

function About() {
  return (
    <>
      <h2>About</h2>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit
        maxime, vero doloribus corrupti laboriosam. Ea enim autem necessitatibus
        alias fuga in rem blanditiis unde quos maiores, iure eaque eligendi.
      </div>

      <ul>
        <li>
          <Link to="members/1">Socio 1</Link>
        </li>
        <li>
          <Link to="members/2">Socio 2</Link>
        </li>
        <li>
          <Link to="members/3">Socio 3</Link>
        </li>
      </ul>

      <Outlet />
    </>
  )
}

export default About
