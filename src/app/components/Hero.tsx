export default function Hero() {
    return (
      <section className="py-12 px-8 flex justify-between items-center bg-gray-50">
        <div>
          <h1 className="text-4xl font-bold mb-4">Hi, I am John, Creative Technologist</h1>
          <p className="text-gray-600 mb-6 max-w-md">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit.
          </p>
          <button className="bg-red-500 text-white px-6 py-2 rounded">
            Download Resume
          </button>
        </div>
        <img
          src="/img 1.png"
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover"
        />
      </section>
    );
  }
  