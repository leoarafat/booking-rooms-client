import UsersAnalytics from "@/components/Invoices/UserAnalytics";
import Heading from "@/utils/Heading";
import React from "react";

const page = () => {
  return (
    <div>
      <Heading
        title="HotelHaven || User analytics"
        description="HotelHaven is booking platform"
        keywords="Hotel, Property, Du Plex"
      />
      <UsersAnalytics />
    </div>
  );
};

export default page;
