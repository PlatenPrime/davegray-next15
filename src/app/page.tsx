import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <h1>
            Platen&apos;s Computer <br /> Repair Shop
          </h1>
          <address>
            555 Gateway Lane
            <br />
            Prime City, PP
          </address>
          <p>Open Daily: 9am to 8pm</p>
          <Link href="tel:+380930931602" className="hover:underline">
            +380930931602
          </Link>
        </div>
      </main>
    </div>
  );
}
