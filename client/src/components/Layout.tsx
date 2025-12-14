import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white border-b px-6 py-4 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">
          타임라인 시각화 도구
        </h1>
      </header>
      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  );
}
