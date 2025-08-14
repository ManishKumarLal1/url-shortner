export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">ShortLink</h1>
        <nav>
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
        </nav>
      </div>
    </header>
  );
}
