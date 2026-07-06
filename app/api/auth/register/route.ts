import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    // const { username, email, password } = await request.json();
    const { username, password } = await request.json(); // 暂时不收集邮箱

    if (!username || !password) {
      return NextResponse.json(
        { error: "请填写所有字段" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const users = db.collection("users");

    // 检查用户名是否已存在
    const existingUser = await users.findOne({ username });

    if (existingUser) {
      return NextResponse.json(
        { error: "用户名已被注册" },
        { status: 409 }
      );
    }

    // 创建用户（注意：生产环境应使用 bcrypt 加密密码）
    const result = await users.insertOne({
      username,
      // email, // 暂不收集邮箱
      password, // 仅用于演示，生产环境需加密
      createdAt: new Date()
    });

    return NextResponse.json(
      { message: "注册成功", userId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "注册失败，请稍后重试" },
      { status: 500 }
    );
  }
}
