import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-screen p-10 bg-white text-black">
      <h1 className="text-3xl underline">UI Components</h1>
      <div>
        <ul className="mt-3 ml-5">
          <li>
            <Link href={"#"} className="underline">Language Switcher</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
