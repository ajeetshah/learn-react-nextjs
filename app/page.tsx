"use client";
import Link from "next/link";
import { Button } from "rsuite";
import { DatePicker } from "rsuite";

export default function Page() {
  return (
    <div className="parent bg-gray-200 p-4">
      <h1 className="text-3xl font-bold underline">Hello TailwindCSS!</h1>
      <Button>I am RSuitejs Button</Button>
      <DatePicker className="custom-rs-datepicker" />
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
          <Link href="/javascript#heading5">JavaScript Heading 5</Link>
        </li>
        <li>
          <Link href="/java">Java</Link>
        </li>
        <li>
          <Link href="/java#heading5">Java Heading 5</Link>
        </li>
      </ul>
    </div>
  );
}
