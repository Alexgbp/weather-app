import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>Weather app</div>
      <Link href={"/authorize"}>Authorize</Link>
    </div>
  );
}
