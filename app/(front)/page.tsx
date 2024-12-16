import { Hero } from "@/components/hero";
import { Invite } from "@/components/invite";
import { Articles } from "@/components/articles";
import { Estimate } from "@/components/estimate";
import { StatList } from "@/components/stat-list";
import { BrandList } from "@/components/brand-list";
import { Preference } from "@/components/preference";
import { OurProjects } from "@/components/our-projects";
import { Testimonials } from "@/components/testimonials";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Preference />
      <Estimate />
      <Testimonials />
      <BrandList className="container" />
      <OurProjects />
      <StatList />
      <Articles />
      <Invite />
    </div>
  );
};

export default Home;
