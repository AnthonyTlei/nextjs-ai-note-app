import Image from "next/image";
import logoBlack from "@/assets/logo-black.png";
import logoWhite from "@/assets/logo-white.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import HomePageThemeToggler from "./HomePageThemeToggler";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/notes");
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4 flex-col sm:flex-row">
        <Image
          className="block dark:hidden"
          src={logoBlack}
          width={100}
          height={100}
          alt="SecondBrain Logo"
        />
        <Image
          className="hidden dark:block"
          src={logoWhite}
          width={100}
          height={100}
          alt="SecondBrain Logo"
        />
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          SecondBrain
        </span>
      </div>
      <p className="max-w-prose text-center">
        <span className="text-gray-500">
          An intelligent note taking app built with Clerk, Next.js, OpenAI,
          Pinecone, Prisma, Shadcn UI and more.
        </span>
      </p>
      <div className="flex flex-row gap-3">
        <Button asChild size="lg">
          <Link href="/notes">Get Started</Link>
        </Button>
        <HomePageThemeToggler />
      </div>
    </main>
  );
}
