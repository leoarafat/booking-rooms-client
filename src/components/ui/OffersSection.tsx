/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";

const Offers = () => {
  return (
    <div className="py-3">
      <Container>
        <Typography variant="h5">Offers</Typography>
        <Typography>Promotions, deals and special offers for you</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Offer 1
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Description for Offer 1. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </Typography>
                    <Button variant="outlined" color="primary">
                      Learn More
                    </Button>
                  </CardContent>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <img
                    className="h-full"
                    src="
https://res.cloudinary.com/arafatleo/image/upload/v1697476630/hero/pexels-photo-1797393_nfr5er.jpg"
                    alt=""
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Offer 2
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Description for Offer 2. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </Typography>
                    <Button variant="outlined" color="primary">
                      Learn More
                    </Button>
                  </CardContent>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <img
                    className="h-full"
                    src="
https://res.cloudinary.com/arafatleo/image/upload/v1697476630/hero/pexels-photo-1797393_nfr5er.jpg"
                    alt=""
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Offers;
