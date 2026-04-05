import { prisma } from "@/services/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const todo = await prisma.todo.findMany();

    return NextResponse.json({
      success: true,
      todo: todo,
    });

  } catch (error) {
    console.log("error in todo ", error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
}