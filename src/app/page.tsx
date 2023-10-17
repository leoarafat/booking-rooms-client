import Header from "@/components/layouts/Header";
import Hero from "@/components/ui/Hero";
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
    </div>
  );
};

export default dynamic(() => Promise.resolve(RootPage), {
  ssr: false,
});
