import React from "react";
import { Button, TextField, Typography, Box, Paper } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const ServiceCommentForm = ({ onSubmitReview, isQuestion }: any) => {
  const { control, handleSubmit, reset, formState } = useForm();
  const { isDirty, isValid } = formState;

  const onSubmit = (data: any) => {
    console.log(data);
    // Call the onSubmit callback with the comment data
    onSubmitReview(data);
    reset();
  };

  return (
    <div className="pt-3">
      <Paper
        elevation={3}
        style={{ padding: "16px", paddingLeft: "20px", height: "275px" }}
      >
        <Typography variant="h6" gutterBottom>
          {isQuestion ? "Ask a Question" : "Add a Comment"}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="comment"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label={isQuestion ? "Your Question" : "Your Comment"}
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
              {isQuestion ? "Ask Question" : "Add Comment"}
            </Button>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export default ServiceCommentForm;
