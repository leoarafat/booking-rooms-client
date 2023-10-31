import BookingsAnalytics from "@/components/Invoices/BookingAnalytics";
import Heading from "@/utils/Heading";
import React from "react";

const page = () => {
  return (
    <div>
      <Heading
        title="HotelHaven || Booking Analytics"
        description="HotelHaven is booking platform"
        keywords="Hotel, Property, Du Plex"
      />
      <BookingsAnalytics />
    </div>
  );
};

export default page;
