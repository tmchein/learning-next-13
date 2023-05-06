"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateNote = () => {
  const [form, setForm] = useState({ title: "", content: "" });

  const router = useRouter();

  async function create() {
    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: form.title,
        content: form.content,
      }),
    });

    setForm({ title: "", content: "" });
    router.refresh();
  }

  return (
    <form
      onSubmit={create}
      className="flex flex-col items-center justify-center gap-2 bg-gray-200
        p-4 shadow-xl border-2 border-gray-300 rounded-md"
    >
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />
      <button type="submit">Create Note</button>
    </form>
  );
};

export default CreateNote;
