import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-3xl font-bold sm:text-4xl">
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
