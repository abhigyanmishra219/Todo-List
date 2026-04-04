import { prisma } from "@/services/prisma";
import { NextRequest } from "next/server";

export async function POST(request:NextRequest)
{
    try{
    const body=await request.json();
      if (!body.title || body.title.trim() === "") {
      return Response.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    const todo=await prisma.todo.create({
        data:{
            title:body.title,
        },
    });
    return Response.json(todo,{status:201});
}
catch(error)
{
console.log(error);
}
{
    return Response.json(
        {error:"Something went wrong"},
        {status:500}
        
    );
}

}