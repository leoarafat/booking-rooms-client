// import { Row, Space, Spin } from "antd";

// const Loading = () => {
//   return (
//     <Row
//       justify="center"
//       align="middle"
//       style={{
//         height: "100vh",
//       }}
//     >
//       <Space>
//         <Spin tip="Loading" size="large"></Spin>
//       </Space>
//     </Row>
//   );
// };

// export default Loading;
import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

const CustomLoader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <CircularProgress size={80} color="primary" />
      <Typography variant="h6" color="primary" style={{ marginTop: 10 }}>
        Loading...
      </Typography>
    </Box>
  );
};

export default CustomLoader;
