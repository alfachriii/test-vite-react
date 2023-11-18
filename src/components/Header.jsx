import { person } from "../Author"

export default function Header() {
  return (
    <nav className="nav">
        <h1>{person.nama}</h1>
        <ul>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Project</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
        </ul>
    </nav>
  );
};
