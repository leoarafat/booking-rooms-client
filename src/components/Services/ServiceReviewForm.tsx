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
import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";

const ServiceReviewForm = ({ onSubmitReview }: any) => {
  const { control, handleSubmit, reset, formState } = useForm();
  const { isDirty, isValid } = formState;
  const { userId } = getUserInfo() as any;
  const onSubmit = (data: any) => {
    // Call the onSubmit callback with the review data
    onSubmitReview(data);
    reset();
  };

  return (
    <div className="pt-3 ">
      <Paper
        className="border border-gray-300 p-2 rounded-md"
        elevation={3}
        style={{ padding: "16px", background: "#010313", color: "white" }}
      >
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
                className="bg-[#125a9e] p-1 my-1 rounded-md"
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
                className="bg-gray-300 rounded-md"
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
              {userId ? (
                "Submit Review"
              ) : (
                <Link href={"/login"}>Login first</Link>
              )}
            </Button>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export default ServiceReviewForm;
