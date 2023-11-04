import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs";

export const metadata = {
  title: "SecondBrain - Notes",
};

export default async function NotesPage() {
  const { userId } = auth();

  if (!userId) throw Error("userId undefined");

  const allNotes = await prisma.note.findMany({
    where: { userId },
  });

  return <div>{JSON.stringify(allNotes)}</div>;
}
