"use client";
import Link from "next/link";
import { Button } from "rsuite";
import { DatePicker } from "rsuite";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello TailwindCSS!</h1>
      <Button>I am RSuitejs Button</Button>
      <DatePicker className="custom-rs-datepicker" />
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/page1">Page1</Link>
        </li>
        <li>
          <Link href="/page2">Page2</Link>
        </li>
      </ul>
    </div>
  );
}
