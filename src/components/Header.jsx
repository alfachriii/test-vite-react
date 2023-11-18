import { person } from "../Author";

export default function Header() {
  return (
    <nav className="nav">
        <h1>{person.nama}</h1>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
    </nav>
  );
}
