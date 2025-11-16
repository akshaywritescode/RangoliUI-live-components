import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-screen p-10 bg-white text-black">
      {/* Ui Compoenent */}
      <h1 className="text-3xl underline">UI Components</h1>
      <div>
        <ul className="mt-3 ml-5 flex flex-col gap-2">
          <li>
            <Link href={"/language-switcher"} className="underline">Language Switcher</Link>
          </li>
          <li>
             <Link href={"/theme-switcher"} className="underline">Theme Switcher</Link>
          </li>
          <li>
             <Link href={"/separator"} className="underline">Separator</Link>
          </li>
          <li>
             <Link href={"/separator-with-text"} className="underline">Separator with text</Link>
          </li>
        </ul>
      </div>
      {/* Landing Page Components */}
      <h1 className="text-3xl underline mt-3">Landing Page Components</h1>
      <div>
        <ul className="mt-3 ml-5 flex flex-col gap-2">
          <li>
            <Link href={"/header"} className="underline">Header</Link>
          </li>
          <li>
            <Link href={"/testimonial-card"} className="underline">Testimonial Card</Link>
          </li>
          <li>
            <Link href={"/testimonial-section"} className="underline">Testimonial Section</Link>
          </li>
            <li>
            <Link href={"/pricing-card"} className="underline">Pricing Card</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
