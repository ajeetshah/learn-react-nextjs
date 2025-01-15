import Link from "next/link";
import "../../app/globals.css";

export default function About() {
  return (
    <div className="parent bg-gray-200 p-4">
      <div>I am About Page</div>
      <br />
      <br />
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/javascript">JavaScript</Link>
        </li>
        <li>
          <Link href="/java">Java</Link>
        </li>
      </ul>
    </div>
  );
}
