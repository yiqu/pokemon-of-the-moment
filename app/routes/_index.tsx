import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={ { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" } }>
      <h1>Pokemon News</h1>
      <Link to="/about">About</Link>
      <div>
        <Link to="/potd">Pokemon of the Moment</Link>
      </div>
    </div>
  );
}
