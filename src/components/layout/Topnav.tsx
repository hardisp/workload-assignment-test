export function TopNav() {
  return (
    <header className="h-14 border-b border-gray-200 bg-white flex items-center px-6">
      <div className="font-semibold text-sm">
        Workload App
      </div>

      <nav className="ml-10 flex gap-6 text-sm text-gray-600">
        <button className="hover:text-gray-900 font-bold">
          Home
        </button>
      </nav>
    </header>
  );
}
