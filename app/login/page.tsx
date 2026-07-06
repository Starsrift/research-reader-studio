import type { Metadata } from "next";
import { LoginForm } from "@/components/login-form";

export const metadata: Metadata = {
  title: "登录 | Sylva",
  description: "登录 Sylva AI 论文阅读工作台"
};

export default function LoginPage() {
  return <LoginForm />;
}
