/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Rating,
  Box,
  Card,
  CardContent,
} from "@mui/material";

const OverviewForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (event: any, newValue: any) => {
    setRating(newValue);
  };

  const handleCommentChange = (event: any) => {
    setComment(event.target.value);
  };
  console.log({ userRatings: rating, comment });
  return (
    <Container>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                {/* Add your image here */}
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height="100%"
                  bgcolor="lightgray"
                >
                  <img
                    src="https://res.cloudinary.com/arafatleo/image/upload/v1697528239/hero/Customer_Survey-pana_kasgl1.png"
                    alt="Image"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" gutterBottom>
              We would appreciate if you can take a couple of minutes to
              evaluate how we are doing
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Ratings:
                </Typography>
                <Rating
                  name="rating"
                  value={rating}
                  onChange={handleRatingChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Add a Comment"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  value={comment}
                  onChange={handleCommentChange}
                />
              </Grid>
            </Grid>
            <div style={{ marginTop: "20px" }}>
              <Button variant="contained" color="primary">
                Save
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default OverviewForm;
