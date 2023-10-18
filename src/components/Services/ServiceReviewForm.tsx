import React from "react";
import {
  Button,
  Rating,
  TextField,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const ServiceReviewForm = ({ onSubmitReview }: any) => {
  const { control, handleSubmit, reset, formState } = useForm();
  const { isDirty, isValid } = formState;

  const onSubmit = (data: any) => {
    // Call the onSubmit callback with the review data
    onSubmitReview(data);
    reset();
  };

  return (
    <div className="pt-3 ">
      <Paper elevation={3} style={{ padding: "16px" }}>
        <Typography variant="h6" gutterBottom>
          Write a Review
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="rating"
            control={control}
            defaultValue={0}
            render={({ field }) => (
              <Rating
                name="rating"
                value={field.value}
                onChange={(event, newValue) => field.onChange(newValue)}
                precision={0.5}
              />
            )}
          />
          <Controller
            name="comment"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="Your Review"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Box mt={2}>
            <Button
              type="submit"
              variant="contained"
              className="bg-[#3365C0]"
              disabled={!isDirty || !isValid}
            >
              Submit Review
            </Button>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export default ServiceReviewForm;
