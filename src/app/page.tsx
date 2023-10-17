import AllCategory from "@/components/Category/AllCategory";
import AvailableServiceSection from "@/components/Services/AvailabeService";
import Header from "@/components/layouts/Header";
import Hero from "@/components/ui/Hero";
import OverviewForm from "@/components/ui/OverView";
import Heading from "@/utils/Heading";
import dynamic from "next/dynamic";

const RootPage = () => {
  return (
    <div>
      <Heading
        title="HotelHaven || Home"
        description="HotelHaven is booking platform"
        keywords="Hotel, Property, Du Plex"
      />
      <Header />
      <Hero />
      <AvailableServiceSection />
      <AllCategory />
      <OverviewForm />
    </div>
  );
};

export default dynamic(() => Promise.resolve(RootPage), {
  ssr: false,
});
