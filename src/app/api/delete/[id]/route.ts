import { prisma } from "@/services/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  context: { params: { id: string } }
) {
  try {
    const {id} = await context.params;

    console.log("id is", id);
    console.log("params:", context.params);
console.log("id:", context.params.id);

    await prisma.todo.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Deleted Successfully",
    });

  } catch (error: any) {
    console.log("error", error.message);

    return NextResponse.json({
      success: false,
      message: "Internal Server Error",
    });
  }
}