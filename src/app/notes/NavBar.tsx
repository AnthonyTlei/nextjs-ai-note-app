"use client";

import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import AddEditNoteDialog from "@/components/AddEditNoteDialog";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import logoWhite from "@/assets/logo-white.png";
import logoBlack from "@/assets/logo-black.png";
import AIChatButton from "@/components/AIChatButton";

export default function NavBar() {
  const { theme } = useTheme();
  const [showAddEditNoteDialog, setShowAddEditNoteDialog] = useState(false);

  return (
    <>
      <div className="p-4 shadow ">
        <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-1 ">
            <Image
              className="block dark:hidden"
              src={logoBlack}
              width={40}
              height={40}
              alt="SecondBrain Logo"
            />
            <Image
              className="hidden dark:block"
              src={logoWhite}
              width={40}
              height={40}
              alt="SecondBrain Logo"
            />
            <span className="hidden font-bold sm:block ">SecondBrain</span>
          </Link>
          <div className="flex items-center gap-2">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
              }}
            />
            <ThemeToggleButton />
            <Button
              className="sm:hidden"
              onClick={() => setShowAddEditNoteDialog(true)}
            >
              <Plus size={20} />
            </Button>
            <Button
              className="hidden sm:flex"
              onClick={() => setShowAddEditNoteDialog(true)}
            >
              <Plus size={20} className="mr-2" />
              Add Note
            </Button>
            <AIChatButton />
          </div>
        </div>
      </div>
      <AddEditNoteDialog
        open={showAddEditNoteDialog}
        setOpen={setShowAddEditNoteDialog}
      />
    </>
  );
}
