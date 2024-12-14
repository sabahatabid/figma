export default function RecentPosts() {
    return (
      <section className="py-12 px-8 bg-red-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Recent Post</h2>
          <a href="#" className="text-red-500">View all</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white shadow rounded">
            <h3 className="font-bold">Making a design system from scratch</h3>
            <p className="text-gray-500 text-sm">12 Feb 2024 | Design, Pattern</p>
            <p className="mt-2 text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h3 className="font-bold">Making a design system from scratch</h3>
            <p className="text-gray-500 text-sm">12 Feb 2024 | Design, Pattern</p>
            <p className="mt-2 text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>
        </div>
      </section>
    );
  }
  