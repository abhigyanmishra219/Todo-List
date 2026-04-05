"use client"

import { useState } from "react"

export default function Input()
{
    const [text, setText] = useState("");
    async function handleSave()
    {
        try{
            const response=await fetch("/api/addtodo",{
                method:"POST",
                body:JSON.stringify({title:text})
            })
            if(response.status===201)
            {
                alert("Todo saved successfully!");
               
                setText("");
            }

        }
        catch(error:unknown)
        {
          alert("Error is adding");
        }
    }
    return(
        <div className="flex justify-center mt-10 gap-4">
            <input type="text" 
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="Enter Todo..."
            className="border px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
           onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition"
            >Save</button>
        </div>
    )
}