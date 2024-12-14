
import Hero from "@/app/components/Hero";
import RecentPosts from "@/app/components/Recent post sec";
import FeaturedWorks from "@/app/components/Featured work sec";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <RecentPosts />
      <FeaturedWorks />
    </div>
  );
}

