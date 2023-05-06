"use client";

import { Note } from "@/types/notes";
import Link from "next/link";

const Note = ({ id, title, content, created }: Note) => {
  return (
    <Link href={`/notes/${id}`}>
      <article className="max-w-sm bg-yellow-300 rounded-md shadow-xl flex flex-col gap-4 px-4 py-2">
        <header className="font-bold">
          <h2>{title}</h2>
        </header>
        <section>{content}</section>
        <footer>
          <p className="underline italic text-xs">{created}</p>
        </footer>
      </article>
    </Link>
  );
};

export default Note;
