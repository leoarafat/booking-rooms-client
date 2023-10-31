/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import Header from "@/components/layouts/Header";
import Heading from "@/utils/Heading";

const AboutUs = () => {
  return (
    <>
      <Heading
        title="HotelHaven || About Us"
        description="HotelHaven is booking platform"
        keywords="Hotel, Property, Du Plex"
      />
      <Header />
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          About Hotel Haven
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h5" gutterBottom>
                Our Story
              </Typography>
              <Typography>
                Hotel Haven is a leading name in the world of hospitality. Our
                journey began with a passion for providing exceptional
                experiences to travelers from around the globe. With years of
                dedication and commitment, we've grown into a trusted partner
                for your travel adventures.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography>
                Our mission is to make your travel dreams a reality. We offer a
                wide range of accommodations and services, from luxurious hotels
                to cozy vacation rentals. We're dedicated to delivering
                unmatched convenience and value to every guest.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutUs;
