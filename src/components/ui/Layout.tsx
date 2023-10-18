"use client";
import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Slider,
} from "@mui/material";
import dynamic from "next/dynamic";

import ProductCard from "../Services/Card";
import Pagination from "@mui/material/Pagination";
import { useServicesQuery } from "@/redux/slices/services/serviceApi";
import { useCategoriesQuery } from "@/redux/slices/category/categoryApi";

import { useSearchParams } from "next/navigation";

const LayoutPage = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  // console.log(category);
  const [price, setPrice] = useState([0, 10000]);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: servicesData } = useServicesQuery({});
  const { data: categoryData } = useCategoriesQuery({});
  // console.log(categoryData?.categories);
  const handlePriceChange = (event: any, newValue: any) => {
    setPrice(newValue);
  };
  const handlePageChange = (event: any, page: number) => {
    setCurrentPage(page);
  };
  const handleCategoryChange = (category: string) => {
    console.log(category);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {/* Left Sidebar with Filters */}
        <Grid item xs={12} md={3}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6" gutterBottom>
              Filters
            </Typography>
            <TextField
              label="Min Price"
              variant="outlined"
              fullWidth
              size="small"
            />
            <TextField
              label="Max Price"
              variant="outlined"
              fullWidth
              size="small"
            />
            <Typography variant="subtitle1" style={{ marginTop: "16px" }}>
              Categories:
            </Typography>
            {categoryData?.categories?.map((category: any) => (
              <div key={category?._id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      onChange={() => handleCategoryChange(category?.category)}
                    />
                  }
                  label={category?.category}
                />
              </div>
            ))}
            <Typography variant="subtitle1" style={{ marginTop: "16px" }}>
              Price Range:
            </Typography>
            <Slider
              value={price}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `$${value}`}
              step={10}
              min={0}
              max={10000}
              color="primary"
            />
          </Paper>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* Search Bar */}
              <Paper elevation={3} style={{ padding: "16px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <TextField
                    label="Search"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              {/* <ProductCard /> */}
              {servicesData?.services?.map((service: any) => (
                <Grid item xs={12} key={service.id}>
                  <ProductCard service={service} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <div className="flex items-center justify-center bg-gray-100 p-3 my-3 rounded-sm ">
            <Pagination
              //   onChange={(e) => setPage(e.target.value)}
              count={10}
              color="primary"
              page={currentPage}
              onChange={handlePageChange}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

// export default LayoutPage;
export default dynamic(() => Promise.resolve(LayoutPage), {
  ssr: false,
});
