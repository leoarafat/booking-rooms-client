// /* eslint-disable @next/next/no-img-element */
// "use client";
// import React, { useState } from "react";
// import {
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   Box,
// } from "@mui/material";
// import { ArrowBack, ArrowForward } from "@mui/icons-material";
// import { useCategoriesQuery } from "@/redux/slices/category/categoryApi";

// const servicesData = [
//   { id: 1, title: "Service 1", description: "Description 1" },
//   { id: 2, title: "Service 2", description: "Description 2" },
//   { id: 3, title: "Service 3", description: "Description 3" },
//   { id: 4, title: "Service 4", description: "Description 4" },
//   { id: 5, title: "Service 5", description: "Description 5" },
//   { id: 6, title: "Service 6", description: "Description 6" },
//   // Add more services as needed
// ];

// const itemsPerPage = 6;

// const AllCategory = () => {
//   const [startIndex, setStartIndex] = useState(0);

//   //!Get All Category
//   const { data: categoryData } = useCategoriesQuery({});
//   console.log(categoryData?.categories);

//   const nextSlide = () => {
//     if (startIndex + itemsPerPage < servicesData.length) {
//       setStartIndex(startIndex + itemsPerPage);
//     }
//   };

//   const prevSlide = () => {
//     if (startIndex > 0) {
//       setStartIndex(startIndex - itemsPerPage);
//     }
//   };

//   return (
//     <div className="py-3">
//       <Container>
//         <Typography variant="h5">Explore Bangladesh</Typography>
//         <Typography>These popular destinations have a lot to offer</Typography>

//         <Box
//           display="flex"
//           justifyItems={"justify-center"}
//           alignItems="center"
//           justifyContent="space-between"
//         >
//           <Button
//             variant="outlined"
//             startIcon={<ArrowBack />}
//             onClick={prevSlide}
//             disabled={startIndex === 0}
//           ></Button>

//           <Button
//             variant="outlined"
//             endIcon={<ArrowForward />}
//             onClick={nextSlide}
//             disabled={startIndex + itemsPerPage >= servicesData.length}
//           ></Button>
//         </Box>
//         <div className="pt-3">
//           <Grid container spacing={3}>
//             {servicesData
//               .slice(startIndex, startIndex + itemsPerPage)
//               .map((service) => (
//                 <Grid item key={service.id} xs={12} sm={6} md={4}>
//                   <Grid item key={service.id} xs={12} sm={6} md={4}>
//                     <Card
//                       style={{
//                         backgroundColor: "#003B95",
//                         color: "#fff",
//                         transition: "transform 0.2s",
//                       }}
//                     >
//                       <CardContent>
//                         <img
//                           src="your-image-source.jpg"
//                           alt="Service Image"
//                           style={{
//                             width: "100%",
//                             height: "100%",
//                             objectFit: "cover",
//                           }}
//                         />
//                         <Typography variant="h6" gutterBottom>
//                           {service.title}
//                         </Typography>
//                         <Typography variant="body2">
//                           {service.description}
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   </Grid>
//                 </Grid>
//               ))}
//           </Grid>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default AllCategory;
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useCategoriesQuery } from "@/redux/slices/category/categoryApi";

const itemsPerPage = 3;

const AllCategory = () => {
  const [startIndex, setStartIndex] = useState(0);

  //!Get All Category
  const { data: categoryData } = useCategoriesQuery({});
  // console.log(categoryData?.categories);

  const nextSlide = () => {
    //@ts-ignore
    if (startIndex + itemsPerPage < categoryData?.categories?.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <div className="py-3">
      <Container>
        <Typography variant="h5">Explore Bangladesh</Typography>
        <Typography>These popular destinations have a lot to offer</Typography>

        <Box
          display="flex"
          justifyItems={"justify-center"}
          alignItems="center"
          justifyContent="space-between"
        >
          <Button
            variant="outlined"
            startIcon={<ArrowBack />}
            onClick={prevSlide}
            disabled={startIndex === 0}
          ></Button>

          <Button
            variant="outlined"
            endIcon={<ArrowForward />}
            onClick={nextSlide}
            disabled={
              //@ts-ignore
              startIndex + itemsPerPage >= categoryData?.categories?.length
            }
          ></Button>
        </Box>
        <div className="pt-3">
          <Grid container spacing={3}>
            {categoryData?.categories
              ?.slice(startIndex, startIndex + itemsPerPage)
              .map((category) => (
                <Grid item key={category.id} xs={12} sm={6} md={4}>
                  <Card
                    style={{
                      transition: "transform 0.2s",
                    }}
                  >
                    <CardContent>
                      <img
                        src={category?.thumbnail?.url}
                        alt={category.category}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                      <Typography variant="h6" gutterBottom>
                        {category.category}
                      </Typography>
                      {/* <Typography variant="body2">
                        {category.description}
                      </Typography> */}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default AllCategory;
