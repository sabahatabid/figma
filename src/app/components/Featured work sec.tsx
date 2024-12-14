export default function FeaturedWorks() {
  const works = [
    { title: "Designing Dashboards", year: "2020", tag: "Dashboard", image: "/img 2.png" },
    { title: "Designing Dashboards", year: "2021", tag: "Illustration", image: "/img 3.png" },
    { title: "Designing Dashboards", year: "2022", tag: "Typography", image: "/img 4.png" },
  ];

  return (
    <section className="py-12 px-8">
      <h2 className="text-2xl font-bold mb-6">Featured Works</h2>
      <div>
        {works.map((work, index) => (
          <div key={index} className="mb-8 flex items-start">
            {/* Image */}
            <img
              src={work.image}
              alt={work.title}
              className="w-32 h-32 object-cover mr-6"
            />

            {/* Text Content */}
            <div>
              <h3 className="font-bold text-lg">{work.title}</h3>
              <p className="text-sm text-gray-500">
                {work.year} &nbsp; | &nbsp; {work.tag}
              </p>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

  
  