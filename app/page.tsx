import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-screen p-10 bg-white text-black">
      <h1 className="text-3xl underline">UI Components</h1>
      <div>
        <ul className="mt-3 ml-5 flex flex-col gap-2">
          <li>
            <Link href={"/language-switcher"} className="underline">Language Switcher</Link>
          </li>
          <li>
             <Link href={"/theme-switcher"} className="underline">Theme Switcher</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
