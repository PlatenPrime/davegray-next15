import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div className="px-2 w-full flex items-center flex-col">
      <h2 className="text-2xl">Not Found</h2>
      <Image
        src="/images/not-found.png"
        alt="404"
        className="rounded-xl"
        width={500}
        height={500}
        sizes="500px"
        priority
        title="404"
      />
      <Link href="/">Return Home</Link>
    </div>
  );
}
