import CategoryCreateForm from "@/components/Category/CreateCategoryForm";
import Heading from "@/utils/Heading";
import React from "react";

const Pages = () => {
  return (
    <div>
      <Heading
        title="HotelHaven || Create Category"
        description="HotelHaven is booking platform"
        keywords="Hotel, Property, Du Plex"
      />
      <CategoryCreateForm />
    </div>
  );
};

export default Pages;
