"use client"

import { useEffect, useState } from "react"
import Delete from "./delete";

type Todo = {
  id: string;
  title: string;
};

export default function Display() {
  const [todo, setTodo] = useState<Todo[]>([]);

  useEffect(() => {
    async function fetchtodo() {
      const res = await fetch("/api/getodos");
      const data = await res.json();
      setTodo(data.todo || []);
    }

    fetchtodo();
  }, []);

  function handleDelete(id: string) {
    setTodo(prev => prev.filter(item => item.id !== id));
  }

  return (
    <div className="mt-6 flex flex-col items-center gap-2 text-white">
      {todo.map((item) => (
        <div
          key={item.id}
          className="border px-4 py-2 rounded w-64 flex justify-between"
        >
          <span>{item.title}</span>

         
          <Delete id={item.id} onDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
}