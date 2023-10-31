import ServiceAnalytics from "@/components/Invoices/ServiceAnalytics";
import Heading from "@/utils/Heading";
import React from "react";

const page = () => {
  return (
    <div>
      <Heading
        title="HotelHaven || Service analytics"
        description="HotelHaven is booking platform"
        keywords="Hotel, Property, Du Plex"
      />
      <ServiceAnalytics />
    </div>
  );
};

export default page;
