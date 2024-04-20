export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 h-14 border-b">
      <div className="w-full h-full flex items-center justify-center gap-1 px-4 md:container">
        <div className="flex gap-2 items-center">
          <h1 className="text-xl font-semibold">AI Chat</h1>
        </div>
      </div>
    </header>
  );
}
