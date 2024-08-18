import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`min-h-screen p-24 ${inter.className}`}>
      <h1 className="text-blue-500 text-3xl font-bold text-center">
        Next Practice
      </h1>

      <ul className="text-center my-10">
        <li className="text-black hover:text-blue-500">
          <Link href="/next-practice-1">
            <p>Next Practice 1</p>
          </Link>
        </li>
      </ul>
    </main>
  );
}
