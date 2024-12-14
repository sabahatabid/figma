export default function Header() {
    return (
      <header className="py-6 px-8 flex justify-between items-center">
        <div className="text-2xl font-bold">hi</div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-black">Works</a>
          <a href="#" className="text-gray-600 hover:text-black">Blog</a>
          <a href="#" className="text-gray-600 hover:text-black">Contact</a>
        </nav>
      </header>
    );
  }
  