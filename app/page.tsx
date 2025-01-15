"use client";
import { Button } from "rsuite";
import { DatePicker } from "rsuite";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello TailwindCSS!</h1>
      <Button>I am RSuitejs Button</Button>
      <DatePicker className="custom-rs-datepicker" />
    </div>
  );
}
