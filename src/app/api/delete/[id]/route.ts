import { prisma } from "@/services/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params; 

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