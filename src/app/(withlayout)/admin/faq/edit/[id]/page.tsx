import Heading from "@/utils/Heading";
import React from "react";

const page = ({ params }: any) => {
  console.log(params.id);
  return (
    <div>
      <Heading
        title="HotelHaven || Edit Category"
        description="HotelHaven is booking platform"
        keywords="Hotel, Property, Du Plex"
      />
      <h1 className="text-xl font-semibold text-center">Coming soon...</h1>
    </div>
  );
};

export default page;
