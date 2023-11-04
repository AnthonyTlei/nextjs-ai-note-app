import Image from "next/image";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/notes");
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="SecondBrain Logo" width={100} height={100} />
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
      <Button asChild size="lg">
        <Link href="/notes">Get Started</Link>
      </Button>
    </main>
  );
}
