import Note from "@/components/Note";
import PocketBase from "pocketbase";
import CreateNote from "./CreateNote";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

async function getNotes() {
  const db = new PocketBase("http://127.0.0.1:8090");
  const data = await db.collection("notes").getList(1, 30);
  console.log("this is the data", data);
  return data?.items;
}

export default async function Notes() {
  const notes = await getNotes();
  return (
    <div className="flex flex-col  items-center justify-center gap-14 mt-8">
      <h1>Notes</h1>
      <div className="flex gap-8">
        {notes?.map(({ id, title, content, created }) => {
          return (
            <Note
              key={title}
              id={id}
              title={title}
              content={content}
              created={created}
            />
          );
        })}
      </div>
      <CreateNote />
    </div>
  );
}
