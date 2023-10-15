import Header from "@/components/layouts/Header";
import Heading from "@/utils/Heading";

const RootPage = () => {
  return (
    <div>
      <Heading
        title="HotelHaven || Home"
        description="HotelHaven is booking platform"
        keywords="Hotel, Property, Du Plex"
      />
      <Header />
    </div>
  );
};

export default RootPage;
