import Header from "@/components/layouts/Header";
import FaqItems from "@/components/ui/FaqItem";
import Heading from "@/utils/Heading";
import React from "react";

const FaqPages = () => {
  return (
    <div>
      <Heading
        title="HotelHaven || FAQ"
        description="HotelHaven is booking platform"
        keywords="Hotel, Property, Du Plex"
      />
      <Header />
      <FaqItems />
    </div>
  );
};

export default FaqPages;
