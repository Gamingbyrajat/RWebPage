import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 h-screen bg-amber-200 text-center text-black font-bold text-3xl items-center justify-center">
      <h1>Hello Who are you !</h1>
      <Link href="/games">
        <u>Games</u>
      </Link>
    </div>
  );
}
