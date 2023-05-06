async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );

  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);

  return (
    <div className="flex justify-center items-center w-full mt-14">
      <article className="max-w-sm bg-yellow-300 rounded-md shadow-xl flex flex-col gap-4 px-4 py-2">
        <header className="font-bold">
          <h2>notes/{note.id}</h2>
          <h3>{note.title}</h3>
        </header>
        <section>{note.content}</section>
        <footer>
          <p className="underline italic text-xs">{note.created}</p>
        </footer>
      </article>
    </div>
  );
}
