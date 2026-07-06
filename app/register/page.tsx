import type { Metadata } from "next";
import { RegisterForm } from "@/components/register-form";

export const metadata: Metadata = {
  title: "注册 | Sylva",
  description: "创建 Sylva AI 论文阅读工作台账户"
};

export default function RegisterPage() {
  return <RegisterForm />;
}
