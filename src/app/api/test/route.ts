import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
  await connectDB();

  await mongoose.connection.db.collection("test").insertOne({
    message: "first record",
    createdAt: new Date(),
  });

  return NextResponse.json({ message: "Database & collection created ✅" });
}
