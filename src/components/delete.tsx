"use client"

export default function Delete({
  id,
  onDelete
}: {
  id: string;
  onDelete: (id: string) => void;
}) {

  async function handledelete() {
    try {
      const res = await fetch(`/api/delete/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        alert("Todo deleted");

        onDelete(id);
      } else {
        alert("Failed");
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button
      onClick={handledelete}
      className="bg-red-600 px-3 py-1 rounded"
    >
      Delete
    </button>
  );
}