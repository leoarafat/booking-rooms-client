import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import { newsData } from "@/constants/fakeData";

const LatestNews = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Latest News
      </Typography>
      <Grid container spacing={3}>
        {newsData?.map((news: any, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              style={{
                background: "#010313",
                color: "white",
                height: "560px",
              }}
              className=" text-white border border-gray-300 p-2 rounded-md"
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={news.title}
                  height="200"
                  image={news.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {news.title}
                  </Typography>
                  <Typography variant="body2">{news.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LatestNews;
